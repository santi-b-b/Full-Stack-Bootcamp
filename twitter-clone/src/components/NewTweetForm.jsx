"use client";

import Image from "next/image";
import PostButtonBar from "./PostButtonBar";
import { RiEarthFill } from "react-icons/ri";

const NewTweetForm = ({}) => {


  return (
    <div className="flex flex-1 items-start justify-start border-x border-b border-gray-100 relative p-4 gap-3 w-full">
      <Image
              src="/assets/mockImage.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-contain"
      />
      <div className="flex flex-1 flex-col gap-3 justify-center items-start">
        <input type="text" placeholder="What's happening?" className="p-2 text-xl focus:outline-none focus:ring-0"/>
        <button className="flex text-[var(--color-basic)] font-bold text-sm hover:bg-[var(--color-basic-background)] px-4 py-2 rounded-full  gap-2">
          <RiEarthFill className="text-xl" />
          <span>Everyone can reply</span>
        </button>
        <div className="flex flex-1 w-full border-t pt-2 border-t-gray-200">
          <PostButtonBar className ="flex flex-1 w-full"></PostButtonBar>
          <button className="bg-neutral-500 text-white text-md px-4 py-2 rounded-full">
            Post
          </button>
        </div>
      </div>

    </div>
  )
}

export default NewTweetForm