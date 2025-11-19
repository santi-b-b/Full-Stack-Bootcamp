import connect from './mongoose';
import Tweet from './models/Tweet';

export async function getTweets() {
  try {
    await connect();
    const tweets = await Tweet.find({}).sort({ createdAt: -1 });
    return tweets;
  } catch (err) {
    console.error('getTweets error:', err);
    throw err;
  }
}
export async function addTweet(data) {
  try {
    await connect();

    // Crear tweet usando Mongoose para respetar defaults
    const doc = await Tweet.create(data);

    return doc;
  } catch (err) {
    console.error('addTweet error:', err);
    throw err;
  }
}

export async function getTweetById(id) {
  await connect();
  const user = await Tweet.findById(id);
  return user;
}
