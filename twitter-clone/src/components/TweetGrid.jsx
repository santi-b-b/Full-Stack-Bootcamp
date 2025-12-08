'use client';
import TweetCard from './TweetCard';
import { useTweets } from '@/contexts/tweetsContext';
import { useRouter } from 'next/navigation';

const TweetGrid = ({ tweets }) => {
  const { loading } = useTweets();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-[3.5px] border-[var(--color-basic-background)] border-t-[var(--color-brand-generic)]"></div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center">
      <ul className="flex w-full grid-cols-1 flex-col justify-items-center md:grid-cols-1">
        {tweets.map((tweet) => (
          <li key={tweet._id}>
            <div
              className="block w-full hover:bg-gray-100"
              onClick={() => router.push(`/tweet/${tweet._id}`)}
            >
              <TweetCard data={tweet} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetGrid;
