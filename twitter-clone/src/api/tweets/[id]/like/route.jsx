import connect from '@lib/mongoose';
import Tweet from '@lib/models/Tweet';

export async function POST(req, context) {
  try {
    const { id } = await context.params;
    const { userId } = await req.json();

    await connect();

    const tweet = await Tweet.findById(id);
    if (!tweet) {
      return new Response(JSON.stringify({ error: 'Tweet not found' }), { status: 404 });
    }

    if (!Array.isArray(tweet.likes)) {
      tweet.likes = [];
    }

    const index = tweet.likes.indexOf(userId);
    if (index === -1) {
      tweet.likes.push(userId);
    } else {
      tweet.likes.splice(index, 1);
    }

    await tweet.save();

    return new Response(JSON.stringify({ likes: tweet.likes.length }), { status: 200 });
  } catch (err) {
    console.error('/api/tweets/[id]/like POST error:', err);
    return new Response(JSON.stringify({ error: 'Failed to toggle like' }), { status: 500 });
  }
}
