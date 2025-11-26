import { getUserById } from '@lib/users';

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    }
    console.log(user);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error('/api/users/[id] GET error:', err);
    return new Response(JSON.stringify({ error: 'DB error', message: err.message }), {
      status: 500,
    });
  }
}
