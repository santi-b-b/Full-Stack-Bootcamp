import mongoose from 'mongoose';

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
  likes: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
});

export default mongoose.models.Tweet || mongoose.model('Tweet', TweetSchema);
