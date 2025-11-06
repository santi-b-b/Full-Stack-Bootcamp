'use client';

import Image from 'next/image';
import PostButtonBar from './PostButtonBar';
import { RiEarthFill } from 'react-icons/ri';

const NewTweetForm = ({}) => {
  return (
    <div className="relative flex w-full flex-1 items-start justify-start gap-3 border-x border-b border-gray-100 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-800">
        <p className="text-2xl text-white">S</p>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-3">
        <input
          type="text"
          placeholder="What's happening?"
          className="p-2 text-xl focus:ring-0 focus:outline-none"
        />
        <button className="flex gap-2 rounded-full px-4 py-2 text-sm font-bold text-[var(--color-basic)] hover:bg-[var(--color-basic-background)]">
          <RiEarthFill className="text-xl" />
          <span>Everyone can reply</span>
        </button>
        <div className="flex w-full flex-1 border-t border-t-gray-200 pt-2">
          <PostButtonBar className="flex w-full flex-1"></PostButtonBar>
          <button className="text-md rounded-full bg-neutral-500 px-4 py-2 text-white">Post</button>
        </div>
      </div>
    </div>
  );
};

export default NewTweetForm;
