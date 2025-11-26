import TweetGrid from '@/components/TweetGrid';
import Header from '@/components/Header';
import React from 'react';
import { TweetProvider } from '@/contexts/tweetsContext';
import NewTweetForm from '@/components/NewTweetForm';
import LoginBar from '@/components/LoginBar';

export default async function Home() {
  return (
    <div className="font-sans">
      <TweetProvider>
        <Header></Header>
        <NewTweetForm />
        <TweetGrid />
      </TweetProvider>
      <LoginBar></LoginBar>
    </div>
  );
}
