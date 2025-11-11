import connect from './mongoose';
import Tweet from './models/Tweet';

export async function getTweets() {
  try {
    await connect();
    return await Tweet.find({}).lean();
  } catch (err) {
    console.error('getTweets error:', err);
    throw err;
  }
}

export async function addTweet(data) {
  try {
    await connect();
    const doc = await Tweet.create(data);
    return doc;
  } catch (err) {
    console.error('addTweet error:', err);
    throw err;
  }
}
