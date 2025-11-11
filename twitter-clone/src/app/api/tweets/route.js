import { getTweets } from '../../../../lib/tweets';
export async function GET() {
  try {
    console.log('MONGO URI present?', Boolean(process.env.MONGODB_URI));
    const tweets = await getTweets();
    return new Response(JSON.stringify(tweets), { status: 200 });
  } catch (err) {
    console.error('/api/tweets GET error:', err);
    return new Response(JSON.stringify({ error: 'DB connection failed', message: err.message }), {
      status: 500,
    });
  }
}
