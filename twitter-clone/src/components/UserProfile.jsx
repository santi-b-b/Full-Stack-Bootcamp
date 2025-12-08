'use client';
import { useEffect, useState } from 'react';
import Header from './TweetHeader';
import { PiSealCheckFill } from 'react-icons/pi';
import { useTweets } from '@/contexts/tweetsContext';
import TweetGrid from './TweetGrid';
import UserCard from './UserCard';
import { useRouter } from 'next/navigation';
import LoadingScreen from './LoadingScreen';

export default function UserProfile({ id, tab }) {
  const [profileUser, setProfileUser] = useState(null);
  const { tweets, fetchTweets } = useTweets();
  const [tweetsUser, setTweetsUser] = useState([]);
  const router = useRouter();

  function handleLikesClik() {
    router.push(`/user/${id}/likes`);
  }

  function handleRepostsClik() {
    router.push(`/user/${id}`);
  }

  function handlePostsClik() {
    router.push(`/user/${id}`);
  }

  const checkColors = {
    basic: 'text-[var(--color-basic)]',
  };

  useEffect(() => {
    async function fetchProfileUser() {
      const res = await fetch(`/api/users/${id}`);
      const user = await res.json();
      setProfileUser(user);
    }
    fetchProfileUser();
  }, [id]);

  useEffect(() => {
    fetchTweets();
  }, []);

  useEffect(() => {
    if (profileUser) {
      if (tab === 'posts')
        setTweetsUser(tweets.filter((tweet) => tweet.author === profileUser._id));
      else if (tab === 'likes')
        setTweetsUser(tweets.filter((tweet) => tweet.likes.includes(profileUser._id)));
    }
  }, [tweets, profileUser]);

  if (!profileUser) {
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <div>
      <Header text={profileUser.name}>
        <PiSealCheckFill className={`mb-0.5 text-[20px] ${checkColors.basic}`}></PiSealCheckFill>
      </Header>
      <UserCard profileUser={profileUser}></UserCard>

      <div className="relative flex border-x border-b border-gray-100">
        <div
          onClick={handlePostsClik}
          className="flex flex-1 items-center justify-center hover:bg-neutral-200"
        >
          {tab === 'posts' ? (
            <div>
              <p className="p-3 font-bold">Posts</p>
              <div className="absolute bottom-0.5 w-14 rounded-full border-[3px] border-[var(--color-brand-generic)]"></div>
            </div>
          ) : (
            <p className="p-3 font-bold text-neutral-500">Posts</p>
          )}
        </div>
        <div
          onClick={handleLikesClik}
          className="flex flex-1 items-center justify-center hover:bg-neutral-200"
        >
          {tab === 'likes' ? (
            <div>
              <p className="p-3 font-bold">Likes</p>
              <div className="absolute bottom-0.5 w-14 rounded-full border-[3px] border-[var(--color-brand-generic)]"></div>
            </div>
          ) : (
            <p className="p-3 font-bold text-neutral-500">Likes</p>
          )}
        </div>
        <div
          onClick={handleRepostsClik}
          className="flex h-full flex-1 items-center justify-center text-neutral-500 hover:border-neutral-200 hover:bg-neutral-200"
        >
          <p className="p-3 font-bold">Reposts</p>
        </div>
      </div>
      <TweetGrid tweets={tweetsUser}></TweetGrid>
    </div>
  );
}
