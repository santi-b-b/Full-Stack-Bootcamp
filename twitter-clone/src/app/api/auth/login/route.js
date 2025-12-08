import User from '@lib/models/User';
import { createSession } from '@lib/sessions';
import { buildSessionCookie } from '@lib/auth';
import connect from '@lib/mongoose';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) return NextResponse.json({ error: 'Missing' }, { status: 400 });

  await connect();
  const user = await User.findOne({ email }).select('+password');
  if (!user) return NextResponse.json({ error: 'Invalid' }, { status: 401 });

  const ok = await user.comparePassword(password);
  if (!ok) return NextResponse.json({ error: 'Invalid' }, { status: 401 });

  const session = await createSession({
    userId: user._id,
    userAgent: req.headers.get('user-agent'),
  });
  const cookie = buildSessionCookie(session.sessionId);

  const publicUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    image: user.image,
  };

  const res = NextResponse.json(publicUser, { status: 200 });

  // ⬅️ Aquí sí se adjunta la cookie correctamente
  res.headers.set('Set-Cookie', cookie);

  return res;
}
