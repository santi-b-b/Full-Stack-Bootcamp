'use client';
import { useEffect, useState } from 'react';
import Header from './TweetHeader';
import { PiSealCheckFill } from 'react-icons/pi';
import { useTweets } from '@/contexts/tweetsContext';
import TweetGrid from './TweetGrid';

export default function UserProfile({ id }) {
  const [profileUser, setProfileUser] = useState(null);
  const { tweets } = useTweets();
  const [tweetsUser, setTweetsUser] = useState([]);
  const checkColors = {
    basic: 'text-[var(--color-brand-generic)]',
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
    if (profileUser) {
      setTweetsUser(tweets.filter((tweet) => tweet.author === profileUser._id));
    }
  }, [tweets, profileUser]);

  if (!profileUser) return <p>Cargando...</p>;

  console.log(tweets);

  return (
    <div>
      <Header text={profileUser.name}>
        <PiSealCheckFill className={`text-xl ${checkColors.basic}`}></PiSealCheckFill>
      </Header>
      <img src={'/assets/mockImage.jpg'} className="h-48 w-full bg-black object-cover" />
      <TweetGrid tweets={tweetsUser}></TweetGrid>
    </div>
  );
}
