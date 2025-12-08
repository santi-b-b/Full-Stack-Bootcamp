'use client';

import { useState } from 'react';
import PostButtonBar from './PostButtonBar';
import { RiEarthFill } from 'react-icons/ri';
import { useTweets } from '@/contexts/tweetsContext';
import TextareaAutosize from 'react-textarea-autosize';
import { useUser } from '@/contexts/userContext';
import RoundButton from './RoundButton';

const NewTweetForm = () => {
  const { addTweet } = useTweets();
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const { user, authless } = useUser();

  if (authless) return null;

  const handlePost = async () => {
    if (!content.trim() && !image) return;

    const formData = new FormData();
    formData.append('body', content);
    formData.append('author', user.id);
    if (image) formData.append('image', image);

    const res = await fetch('/api/tweets', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const newTweet = await res.json();
      addTweet(newTweet);
      setContent('');
      setImage(null);
    }
  };

  return (
    <div className="relative flex w-full flex-1 items-start justify-start gap-3 border-x border-b border-gray-100 p-4">
      <img
        src={user.image}
        alt="user avatar"
        onError={(e) => (e.target.src = '/assets/default-avatar.png')}
        className="h-10 w-10 rounded-full bg-neutral-200 object-cover"
      />
      <div className="flex flex-1 flex-col items-start justify-center gap-3">
        <TextareaAutosize
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening?"
          className="w-full resize-none overflow-hidden p-2 text-xl focus:ring-0 focus:outline-none"
          maxLength={280}
        />
        {image instanceof File && (
          <div className="relative h-56 w-56">
            <RoundButton
              icon="close"
              hoverColor={'neutral-200'}
              className="absolute top-2 left-4 z-1 h-9"
              onClick={() => setImage(null)}
            />

            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="absolute top-0 left-0 h-full w-full rounded-2xl border border-neutral-200 object-cover"
            />
          </div>
        )}

        <button className="flex gap-2 rounded-full px-4 py-2 text-sm font-bold text-[var(--color-basic)] hover:bg-[var(--color-basic-background)]">
          <RiEarthFill className="text-xl" />
          <span>Everyone can reply</span>
        </button>
        <div className="flex w-full flex-1 border-t border-t-gray-200 pt-2">
          <PostButtonBar onSelectImage={setImage} className="flex w-full flex-1"></PostButtonBar>
          <button
            onClick={handlePost}
            className="text-md rounded-full bg-neutral-800 px-4 py-2 font-bold text-white hover:bg-neutral-600"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTweetForm;
