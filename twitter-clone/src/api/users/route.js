import { getTweets, addTweet } from '../../../../lib/tweets';

export async function GET() {
  try {
    const tweets = await getTweets();
    return new Response(JSON.stringify(tweets), { status: 200 });
  } catch (err) {
    console.error('/api/tweets GET error:', err);
    return new Response(JSON.stringify({ error: 'DB connection failed', message: err.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const { body, author } = await req.json(); // ⬅️ desestructuramos author también
    console.log(body, author);

    if (!body || !body.trim()) {
      console.log('tweet vacio');
      return new Response(JSON.stringify({ error: 'Tweet vacío' }), { status: 400 });
    }

    if (!author) {
      return new Response(JSON.stringify({ error: 'Author requerido' }), { status: 400 });
    }

    const newTweet = await addTweet({
      body,
      author, // ⬅️ ahora sí se envía
    });
    console.log(newTweet);

    return new Response(JSON.stringify(newTweet), { status: 201 });
  } catch (err) {
    console.error('/api/tweets POST error:', err);
    return new Response(JSON.stringify({ error: 'Failed to create tweet', message: err.message }), {
      status: 500,
    });
  }
}
