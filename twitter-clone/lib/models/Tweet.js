import mongoose from 'mongoose';
import clientPromise from '../mongodb';
import { ObjectId } from 'mongodb';

const TweetSchema = new mongoose.Schema(
  {
    author: String,
    text: String,
    createdAt: { type: Date, default: () => new Date() },
  },
  { collection: 'tweets' }
);

export async function getTweetById(id) {
  try {
    const client = await clientPromise;
    const db = client.db('Twitter_clone');
    const _id = ObjectId.isValid(id) ? new ObjectId(id) : id;
    const tweet = await db.collection('tweets').findOne({ _id });
    return tweet;
  } catch (err) {
    console.error('getTweetById error:', err);
    throw err;
  }
}

// Evitar recompilar el modelo en hot-reload
export default mongoose.models.Tweet || mongoose.model('Tweet', TweetSchema);
