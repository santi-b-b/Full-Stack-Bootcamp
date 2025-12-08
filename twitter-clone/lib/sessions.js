import crypto from 'crypto';
import connect from './mongoose';
import Session from './models/Session';

export async function createSession({ userId, ttlSeconds = 7 * 24, userAgent }) {
  await connect();
  const sessionId = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + ttlSeconds * 1000);
  const session = await Session.create({ sessionId, userId, expiresAt, userAgent });
  return session;
}

export async function getSessionById(sessionId) {
  if (!sessionId) return null;
  await connect();
  const session = await Session.findOne({ sessionId });
  return session;
}

export async function deleteSession(sessionId) {
  await connect();
  return Session.deleteOne({ sessionId });
}
