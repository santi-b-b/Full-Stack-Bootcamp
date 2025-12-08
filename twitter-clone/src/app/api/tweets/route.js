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
    const formData = await req.formData();
    const body = formData.get('body');
    const author = formData.get('author');
    const image = formData.get('image'); // esto es un File si se subió
    const imagedata = new FormData();
    imagedata.append('file', image);
    imagedata.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

    console.log({ body, author, image });
    let images = [];

    if (!body || !body.trim()) {
      console.log('tweet vacio');
      return new Response(JSON.stringify({ error: 'Tweet vacío' }), { status: 400 });
    }

    if (!author) {
      return new Response(JSON.stringify({ error: 'Author requerido' }), { status: 400 });
    }

    if (image) {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,

        {
          method: 'POST',
          body: imagedata,
        }
      );

      const data = await res.json();
      console.log(data);
      images.push(data.secure_url); // guardas el link final
    }

    const newTweet = await addTweet({
      body,
      author, // ⬅️ ahora sí se envía
      images,
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
