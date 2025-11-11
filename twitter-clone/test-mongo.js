// test-mongo.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

async function run() {
  if (!uri) {
    console.error('MONGODB_URI no está definida en .env.local');
    process.exit(1);
  }
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  try {
    console.log('Intentando conectar a MongoDB...');
    await client.connect();
    // Mostrar nombres de bases de datos como prueba
    const dbs = await client.db().admin().listDatabases();
    console.log('Conexión OK. Bases de datos encontradas:');
    console.log(dbs.databases.map((d) => d.name));
    await client.close();
  } catch (err) {
    console.error('ERROR al conectar:', err);
    process.exit(1);
  }
}

run();
