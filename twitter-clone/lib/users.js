import connect from './mongoose';
import User from './models/User';

export async function getUserById(id) {
  await connect();
  const user = await User.findById(id).select('name userName image');
  return user;
}

export async function updateUser(id, data) {
  const user = await User.findByIdAndUpdate(id, data, {
    new: true, // devuelve el usuario actualizado
  });

  return user;
}
