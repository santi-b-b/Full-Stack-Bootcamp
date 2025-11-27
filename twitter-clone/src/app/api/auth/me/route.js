// app/api/auth/me/route.js
import { getCurrentUserFromRequest } from '@lib/auth.js';
import connect from '@lib/mongoose.js';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connect();

  try {
    const user = await getCurrentUserFromRequest(req);
    if (!user) {
      // Siempre devolver JSON
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
    }

    const publicUser = {
      id: user._id,
      userName: user.userName,
      name: user.name,
      image: user.image,
    };
    return NextResponse.json(publicUser, { status: 200 });
  } catch (err) {
    console.error('Error in /auth/me:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
