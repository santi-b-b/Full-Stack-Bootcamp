'use client';
import { useTweets } from '@/contexts/tweetsContext';
import TweetGrid from './TweetGrid';
import { useUser } from '@/contexts/userContext';
import { useState, useEffect } from 'react';

const TweetGridFollowing = () => {
  const [tweetsFollowing, setTweetsFollowing] = useState([]);
  const { tweets } = useTweets();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setTweetsFollowing(tweets.filter((tweet) => user.following.includes(tweet.author)));
    }
  }, [user, tweets]);

  return <TweetGrid tweets={tweetsFollowing}></TweetGrid>;
};

export default TweetGridFollowing;
