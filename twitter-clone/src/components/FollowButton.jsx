'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/userContext';

export default function FollowButton({ targetUserId, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [hovering, setHovering] = useState(false);
  const { fetchUser } = useUser();

  console.log(initialIsFollowing);

  useEffect(() => {
    setIsFollowing(initialIsFollowing);
  }, [initialIsFollowing]);

  async function toggleFollow() {
    const res = await fetch(`/api/users/${targetUserId}/follow`, {
      method: 'POST',
    });

    const data = await res.json();
    if (res.status === 200) {
      setIsFollowing((prev) => !prev);
      fetchUser();
    }
  }
  const label = isFollowing ? (hovering ? 'Unfollow' : 'Following') : 'Follow';

  return (
    <button
      onClick={toggleFollow}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`transition-200 h-9 rounded-full border-1 px-3 text-base font-bold ${isFollowing ? 'w-32 border-neutral-200 bg-white text-black hover:border-red-400 hover:bg-red-50 hover:text-red-400' : ' bg-black text-white hover:bg-neutral-800'} `}
    >
      {label}
    </button>
  );
}
