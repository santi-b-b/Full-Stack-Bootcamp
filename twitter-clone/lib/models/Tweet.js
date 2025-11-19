import mongoose from 'mongoose';
import clientPromise from '../mongodb';
import { ObjectId } from 'mongodb';

const TweetSchema = new mongoose.Schema({
  body: {
    //call it message
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
  likes: {
    type: [String],
    default: [],
  },
});

// Evitar recompilar el modelo en hot-reload
export default mongoose.models.Tweet || mongoose.model('Tweet', TweetSchema);
