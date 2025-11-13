import mongoose from 'mongoose';
import clientPromise from '../mongodb';
import { ObjectId } from 'mongodb';

const TweetSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true,
    maxlength: 280,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

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
