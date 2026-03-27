/**
 * @file lib/mongoose.js - MongoDB connection management
 * @description Manages MongoDB connection with caching to prevent multiple connections
 * in serverless environments. Implements singleton pattern for connection reuse.
 */

import mongoose from 'mongoose';

// Validate MongoDB URI is configured
const uri = process.env.MONGODB_URI;
console.log('🔍 MONGODB_URI loaded:', uri ? '✅ YES' : '❌ NO');
if (!uri) {
  throw new Error('MONGODB_URI environment variable is not defined. Please set it in .env.local');
}

/**
 * Global connection cache for serverless functions
 * Prevents creating new connections on every request
 * @type {Object}
 * @property {Object|null} conn - Active MongoDB connection
 * @property {Promise|null} promise - Pending connection promise
 */
let cached = global._mongoose;
if (!cached) cached = global._mongoose = { conn: null, promise: null };

/**
 * Connects to MongoDB with connection pooling and caching
 *
 * Features:
 * - Implements singleton pattern (single connection for all requests)
 * - Optimized for serverless architecture
 * - Automatic reconnection on connection loss
 * - Connection reuse prevents resource exhaustion
 *
 * @async
 * @returns {Promise<Object>} Mongoose connection instance
 *
 * @example
 * import connect from '@/lib/mongoose';
 *
 * export async function GET(req) {
 *   await connect();
 *   const users = await User.find();
 *   return Response.json(users);
 * }
 */
async function connect() {
  // Return existing connection if available
  if (cached.conn) return cached.conn;

  // Initiate connection if not already pending
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Prevents command buffering in serverless
    };
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => mongoose);
  }

  // Wait for connection to complete
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connect;
