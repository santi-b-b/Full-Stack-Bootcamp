// src/app/api/auth/logout/route.js
import { deleteSession } from '@lib/sessions';
import { parseCookies } from '@lib/auth';

export async function POST(req) {
  const cookieHeader = req.headers.get('cookie') || '';
  const { session } = parseCookies(cookieHeader); // si usas parseCookies de lib/auth
  if (session) await deleteSession(session);

  const expiredCookie = `session=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax;`;
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Set-Cookie': expiredCookie },
  });
}
