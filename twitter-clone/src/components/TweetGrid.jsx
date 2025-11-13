'use client';
import TweetCard from './TweetCard';
import Link from 'next/link';
import { useTweets } from '@/contexts/tweetsContext';

const TweetGrid = () => {
  const { tweets } = useTweets();
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
