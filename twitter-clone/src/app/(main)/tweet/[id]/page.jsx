import TweetCard from '@/components/TweetCard';
import TweetHeader from '@/components/TweetHeader';

export default async function ProductoPage({ params }) {
  const res = await fetch(`http://localhost:3000/api/tweets/${params.id}`, { cache: 'no-store' });
  const data = res.ok ? await res.json() : [];
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
