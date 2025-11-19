'use client';
import { useState, useEffect } from 'react';
import NewTweetForm from './NewTweetForm';

export default function NewTweetFormWrapper() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/auth/me', {
      method: 'GET',
      credentials: 'include', // ⬅️ IMPORTANTE
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(console.error);
  }, []);

  return <NewTweetForm user={user} />;
}
