import MainHeather from '@/components/MainHeader';
import React from 'react';
import NewTweetForm from '@/components/NewTweetForm';
import LoginBar from '@/components/LoginBar';
import TweetGridMain from '@/components/TweetGridMain';

export default async function Home() {
  return (
    <div className="font-sans">
      <MainHeather tab="main"></MainHeather>
      <NewTweetForm />
      <TweetGridMain />
      <LoginBar></LoginBar>
    </div>
  );
}
