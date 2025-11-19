'use client';
import TweetCard from './TweetCard';
import Link from 'next/link';
import { useTweets } from '@/contexts/tweetsContext';

const TweetGrid = () => {
  const { tweets, loading } = useTweets();

  if (loading) {
    // 🔄 Spinner mientras se carga
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
            <Link href={`/tweet/${tweet._id}`} className="block w-full hover:bg-gray-100">
              <TweetCard data={tweet} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetGrid;
