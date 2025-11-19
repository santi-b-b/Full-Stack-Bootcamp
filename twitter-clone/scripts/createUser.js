import 'dotenv/config';
import connect from '../lib/mongoose.js';
import User from '../lib/models/User.js';
import readline from 'readline';

async function main() {
  await connect();
  console.log('Conectado a MongoDB');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function question(prompt) {
    return new Promise((resolve) => rl.question(prompt, resolve));
  }

  const name = await question('Nombre: ');
  const email = await question('Email: ');
  const password = await question('Password: ');

  rl.close();

  try {
    const user = new User({ name, email, password });
    await user.save();
    console.log('Usuario creado correctamente:');
    console.log({
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
    });
    process.exit(0);
  } catch (err) {
    console.error('Error creando usuario:', err.message);
    process.exit(1);
  }
}

main();
