'use client';

import Image from 'next/image';
import RoundButton from './RoundButton';
import ButtonBar from './ButtonsBar';
import { PiSealCheckFill } from 'react-icons/pi';

const TweetCard = ({ data }) => {
  return (
    <div className="flex w-full flex-row items-start gap-4 border-x border-b border-gray-100 p-4 pt-3 text-gray-900">
      <Image
        src="/assets/mockImage.jpg"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-xs object-contain"
      />
      <div className="flex w-full flex-col gap-4">
        <div className="relative flex flex-row items-center justify-start gap-1">
          <p className="font-bold">Santi</p>
          <PiSealCheckFill className="text-[30px] text-amber-400" />
          <p className="w-full text-neutral-500">@santi_b_b · 9h</p>
          <RoundButton icon="dots" hoverColor={'basic'} className="absolute top-0.5 right-0" />
        </div>

        <p className="font-sans text-[16px]">{data.body}</p>

        <ButtonBar></ButtonBar>
      </div>
    </div>
  );
};

export default TweetCard;
