'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTweets() {
    try {
      const res = await fetch('/api/tweets');
      const data = await res.json();
      setTweets(data);
    } catch (err) {
      console.error('Error al cargar los datos:', err);
    } finally {
      setLoading(false);
    }
  }

  const updateTweetLikes = (tweetId, userId, isLiking) => {
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet._id === tweetId
          ? {
              ...tweet,
              likes: isLiking
                ? [...tweet.likes, userId]
                : tweet.likes.filter((id) => id !== userId),
            }
          : tweet
      )
    );
  };

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <TweetContext.Provider value={{ tweets, loading, addTweet, fetchTweets, updateTweetLikes }}>
      {children}
    </TweetContext.Provider>
  );
};

export const useTweets = () => useContext(TweetContext);
