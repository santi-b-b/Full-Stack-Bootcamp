import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('MONGODB_URI no definida');

let cached = global._mongoose; // @ts-ignore
if (!cached) cached = global._mongoose = { conn: null, promise: null };

async function connect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const opts = {
      // opciones recomendadas; añade tlsCAFile si tu entorno lo requiere
      bufferCommands: false,
      // useNewUrlParser y useUnifiedTopology no son necesarios en mongoose 6+
    };
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connect;
