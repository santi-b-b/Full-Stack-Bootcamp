import { getTweetById } from '@lib/tweets';

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const tweet = await getTweetById(id);
    if (!tweet) {
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(tweet), { status: 200 });
  } catch (err) {
    console.error('/api/tweets/[id] GET error:', err);
    return new Response(JSON.stringify({ error: 'DB error', message: err.message }), {
      status: 500,
    });
  }
}
