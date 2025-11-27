'use client';

import RoundButton from './RoundButton';
import ButtonBar from './ButtonsBar';
import { PiSealCheckFill } from 'react-icons/pi';
import { formatTimestamp } from '@/utils/formatTimestamp';
import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/userContext';
import { useRouter } from 'next/navigation';

const TweetCard = ({ data }) => {
  const timestamp = data.createdAt ? formatTimestamp(data.createdAt) : '';
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(data.likes?.length || 0);
  const [author, setAuthor] = useState(null);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!data?.author) return;

    async function fetchAuthor() {
      try {
        const res = await fetch(`/api/users/${data.author}`);
        if (!res.ok) throw new Error('Failed to fetch author');
        const user = await res.json();
        setAuthor(user);
      } catch (err) {
        console.error('Error fetching author:', err);
      }
    }

    fetchAuthor();
  }, [data.author]);

  useEffect(() => {
    if (!data?.likes || !user?.id) return;
    setLiked(data.likes.includes(user.id));
  }, [data.likes, user?.id]);

  if (!data || !author) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="h-6 w-6 animate-spin rounded-full border-[3.5px] border-[var(--color-basic-background)] border-t-[var(--color-brand-generic)]"></div>
      </div>
    );
  }

  async function handleLikeClick(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const newLiked = !liked;
    setLiked(newLiked);
    setLikesCount((prev) => (newLiked ? prev + 1 : prev - 1));

    try {
      await fetch(`/api/tweets/${data._id}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      });
    } catch (err) {
      console.error('handleLikeClick error:', err);
      setLiked(!newLiked);
      setLikesCount((prev) => (newLiked ? prev - 1 : prev + 1));
    }
  }

  return (
    <div className="flex w-full flex-row items-start gap-4 border-x border-b border-gray-100 p-4 pt-3 text-gray-900">
      <img
        src={author.image}
        alt="user avatar"
        onError={(e) => (e.target.src = '/assets/default-avatar.png')}
        className="h-10 w-11 rounded-full bg-neutral-200 object-cover"
      />
      <div className="flex w-full min-w-0 flex-col gap-4">
        <div className="relative flex flex-row items-center justify-start gap-1">
          <span
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/user/${author._id}`);
            }}
            className="cursor-pointer font-bold whitespace-nowrap hover:underline"
          >
            {author.name}
          </span>
          <PiSealCheckFill className="text-[30px] text-amber-400" />
          <p className="w-full text-neutral-500">
            @{author.userName} · {timestamp}
          </p>
          <RoundButton icon="dots" hoverColor={'basic'} className="absolute top-0.5 right-0" />
        </div>

        <p className="min-w-0 font-sans text-[16px] break-words">{data.body}</p>

        <ButtonBar likes={likesCount} liked={liked} handleLikeClick={handleLikeClick}></ButtonBar>
      </div>
    </div>
  );
};

export default TweetCard;
