import TweetCard from '@/components/TweetCard';
import TweetHeader from '@/components/TweetHeader';

export default async function ProductoPage({ params }) {
  const resolvedParams = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/tweets/${resolvedParams.id}`, { cache: 'no-store' });
  const data = res.ok ? await res.json() : [];

  return (
    <div>
      <TweetHeader text="Post" />
      <div className="flex w-full flex-col items-center justify-center">
        <TweetCard data={data} />
      </div>
    </div>
  );
}
