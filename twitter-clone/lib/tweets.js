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
  console.log(data);
  try {
    await connect();
    const doc = await Tweet.create(data);
    console.log(doc);
    return doc;
  } catch (err) {
    console.error('addTweet error:', err);
    throw err;
  }
}
