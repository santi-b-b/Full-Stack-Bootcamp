import User from '@lib/models/User';
import { createSession } from '@lib/sessions';
import { buildSessionCookie } from '@lib/auth';
import connect from '@lib/mongoose';

export async function POST(req) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  await connect();
  const exists = await User.findOne({ email });
  if (exists) return new Response(JSON.stringify({ error: 'Email exists' }), { status: 409 });

  const user = new User({ userName, name, email, password });
  await user.save();

  const session = await createSession({
    userId: user._id,
    userAgent: req.headers.get('user-agent'),
  });
  const cookie = buildSessionCookie(session.sessionId);

  return new Response(JSON.stringify({ id: user._id, name: user.name, email: user.email }), {
    status: 201,
    headers: { 'Set-Cookie': cookie },
  });
}
