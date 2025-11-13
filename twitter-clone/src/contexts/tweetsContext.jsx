'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const res = await fetch('/api/tweets');
    const data = await res.json();
    setTweets(data);
  };

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <TweetContext.Provider value={{ tweets, addTweet, fetchTweets }}>
      {children}
    </TweetContext.Provider>
  );
};

export const useTweets = () => useContext(TweetContext);
