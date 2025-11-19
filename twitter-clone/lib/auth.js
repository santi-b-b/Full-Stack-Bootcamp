// lib/auth.js
import User from './models/User.js';
import { getSessionById } from './sessions.js';
import connect from './mongoose.js';

export const COOKIE_NAME = 'session';

// Construye la cookie de sesión
export function buildSessionCookie(sessionId, { maxAgeSec = 7 * 24 * 3600 } = {}) {
  const secureFlag = process.env.NODE_ENV === 'production' ? 'Secure; ' : '';
  return `${COOKIE_NAME}=${encodeURIComponent(sessionId)}; Path=/; HttpOnly; ${secureFlag}SameSite=Lax; Max-Age=${maxAgeSec}`;
}

// Parsear cookies de un header
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

// Obtener usuario actual desde el request
export async function getCurrentUserFromRequest(req) {
  const cookieHeader = req.headers.get('cookie') || '';
  const cookies = parseCookies(cookieHeader);
  const sessionId = cookies[COOKIE_NAME];
  if (!sessionId) return null;

  const session = await getSessionById(sessionId);
  if (!session) return null;

  await connect();
  const user = await User.findById(session.userId).select('-password');
  return user || null;
}
