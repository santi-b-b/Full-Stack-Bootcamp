import { updateImages } from '@lib/tweets';

export async function POST(req, context) {
  try {
    const { id } = context.params;
    const { images } = await req.json();

    const tweet = await updateImages(id, images);

    return new Response(JSON.stringify({ images: tweet.images }), { status: 200 });
  } catch (err) {
    console.error('/api/tweets/[id]/images POST error:', err);

    const status = err.message === 'Tweet not found' ? 404 : 500;
    return new Response(JSON.stringify({ error: err.message }), { status });
  }
}
