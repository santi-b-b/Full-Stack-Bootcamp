import { getUserById } from '@lib/users';

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error('/api/users/[id] GET error:', err);
    return new Response(JSON.stringify({ error: 'DB error', message: err.message }), {
      status: 500,
    });
  }
}

export async function PATCH(request, { params }) {
  const { id } = params;

  try {
    const body = await request.json();

    // Validar campos permitidos (evita que te cambien el id desde el cliente)
    const allowedFields = ['username', 'bio', 'following', 'avatar'];
    const updateData = {};

    for (const key of Object.keys(body)) {
      if (allowedFields.includes(key)) {
        updateData[key] = body[key];
      }
    }

    const updated = await updateUser(id, updateData);

    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    console.error('/api/users/[id] PATCH error:', err);
    return new Response(JSON.stringify({ error: 'DB error', message: err.message }), {
      status: 500,
    });
  }
}
