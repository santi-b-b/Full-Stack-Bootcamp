import NewTweetForm from '@/components/NewTweetForm';
import TweetGrid from '@/components/TweetGrid';
import Header from '@/components/Header';
import React from 'react';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/tweets', { cache: 'no-store' });
  const tweets = res.ok ? await res.json() : [];
  console.log(tweets);

  return (
    <div className="font-sans">
      <Header></Header>
      <NewTweetForm></NewTweetForm>
      <TweetGrid tweets={tweets} />
    </div>
  );
}
