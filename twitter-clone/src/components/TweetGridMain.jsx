'use client';
import { useTweets } from '@/contexts/tweetsContext';
import TweetGrid from './TweetGrid';

const TweetGridMain = () => {
  const { tweets } = useTweets();

  return <TweetGrid tweets={tweets}></TweetGrid>;
};

export default TweetGridMain;
