import { NextResponse } from 'next/server';
import { getUserById, updateUser } from '@lib/users';
import { getCurrentUserFromRequest } from '@lib/auth';

export async function POST(req, { params }) {
  const data = await params;
  const targetId = data.id;

  console.log(targetId);

  // Obtener usuario actual desde la cookie de sesión
  const currentUser = await getCurrentUserFromRequest(req);
  if (!currentUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (currentUser._id.toString() === targetId) {
    return NextResponse.json({ error: 'No puedes seguirte a ti mismo' }, { status: 400 });
  }

  // Obtener usuario objetivo
  const targetUser = await getUserById(targetId);
  if (!targetUser) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
  }

  // Verificar si ya sigue al usuario
  const isFollowing = currentUser.following.includes(targetId);
  console.log(isFollowing);
  console.log(targetId);

  // Actualizar lista de following
  const updatedFollowing = isFollowing
    ? currentUser.following.filter((id) => id.toString() !== targetId) // UNFOLLOW
    : [...currentUser.following, targetId]; // FOLLOW

  console.log(updatedFollowing);

  // Guardar cambios en la base de datos
  await updateUser(currentUser._id, { following: updatedFollowing });

  // Responder con nuevo estado
  return NextResponse.json({ following: !isFollowing });
}
