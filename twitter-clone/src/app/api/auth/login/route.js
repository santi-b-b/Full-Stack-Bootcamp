import User from '@lib/models/User';
import { createSession } from '@lib/sessions';
import { buildSessionCookie } from '@lib/auth';
import connect from '@lib/mongoose';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  // Validate required fields
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  await connect();

  // Check if user exists
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return NextResponse.json({ error: 'This email is not registered' }, { status: 401 });
  }

  // Verify password
  const ok = await user.comparePassword(password);
  if (!ok) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  // Create session
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
  res.headers.set('Set-Cookie', cookie);

  return res;
}
