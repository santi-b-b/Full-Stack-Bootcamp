/**
 * @file lib/auth.js - Authentication and session management utilities
 * @description Provides functions for session cookie creation, parsing, and user authentication
 * from HTTP requests. Implements secure session-based authentication with HTTP-only cookies.
 */

import User from './models/User.js';
import { getSessionById } from './sessions.js';
import connect from './mongoose.js';

/**
 * Session cookie name used across the application
 * @constant {string}
 */
export const COOKIE_NAME = 'session';

/**
 * Builds a secure HTTP-only session cookie string
 *
 * Features:
 * - HTTP-only flag prevents JavaScript access (XSS protection)
 * - Secure flag enabled in production (HTTPS only)
 * - SameSite=Lax prevents CSRF attacks
 * - Configurable expiration time (default: 7 days)
 *
 * @param {string} sessionId - The unique session identifier
 * @param {Object} options - Configuration options
 * @param {number} [options.maxAgeSec=604800] - Session expiration in seconds (default: 7 days)
 * @returns {string} Complete Set-Cookie header value
 *
 * @example
 * const cookie = buildSessionCookie('abc123', { maxAgeSec: 86400 });
 * response.headers.set('Set-Cookie', cookie);
 */
export function buildSessionCookie(sessionId, { maxAgeSec = 7 * 24 * 3600 } = {}) {
  // Only set Secure flag in production to enforce HTTPS
  const secureFlag = process.env.NODE_ENV === 'production' ? 'Secure; ' : '';

  return `${COOKIE_NAME}=${encodeURIComponent(sessionId)}; Path=/; HttpOnly; ${secureFlag}SameSite=Lax; Max-Age=${maxAgeSec}`;
}

/**
 * Parses HTTP cookie header into an object
 *
 * Handles URL-encoded cookie values and semicolon-delimited format
 *
 * @param {string} cookieHeader - Raw cookie header string (e.g., "name=value; other=data")
 * @returns {Object} Parsed cookies as key-value pairs
 *
 * @example
 * const cookies = parseCookies('session=abc123; user=john');
 * // { session: 'abc123', user: 'john' }
 */
export function parseCookies(cookieHeader) {
  if (!cookieHeader) return {};

  return cookieHeader
    .split(';')
    .map((c) => c.trim())
    .reduce((acc, pair) => {
      const [k, ...v] = pair.split('=');
      acc[k] = decodeURIComponent(v.join('='));
      return acc;
    }, {});
}

/**
 * Retrieves the current authenticated user from a request
 *
 * Process:
 * 1. Extracts session cookie from request headers
 * 2. Verifies session exists and is valid
 * 3. Retrieves user data from database
 * 4. Excludes password field from response
 *
 * @param {Request} req - Next.js Request object
 * @returns {Promise<Object|null>} User object if authenticated, null otherwise
 *
 * @example
 * const user = await getCurrentUserFromRequest(request);
 * if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
 */
export async function getCurrentUserFromRequest(req) {
  const cookieHeader = req.headers.get('cookie') || '';
  const cookies = parseCookies(cookieHeader);
  const sessionId = cookies[COOKIE_NAME];

  // Return null if no session cookie found
  if (!sessionId) return null;

  // Verify session exists in database
  const session = await getSessionById(sessionId);
  if (!session) return null;

  // Connect to MongoDB and fetch user
  await connect();
  const user = await User.findById(session.userId).select('-password');
  return user || null;
}
