import TweetCard from '@/components/TweetCard';
import TweetHeader from '@/components/TweetHeader';

export default async function ProductoPage({ params }) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);

  return (
    <div>
      <TweetHeader></TweetHeader>
      <div className="flex w-full flex-col items-center justify-center">
        <TweetCard data={data} />
      </div>
    </div>
  );
}
