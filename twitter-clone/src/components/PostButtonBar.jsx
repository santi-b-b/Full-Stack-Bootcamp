'use client';

import Image from 'next/image';
import RoundButton from './RoundButton';

const PostButtonBar = ({}) => {
  return (
    <div className="flex w-full flex-1 flex-row justify-start gap-3">
      <RoundButton icon="image" hoverColor={'basic'} className="text-[var(--color-basic)]" />
      <RoundButton icon="gif" hoverColor={'basic'} className="text-[var(--color-basic)]" />
      <RoundButton icon="planet" hoverColor={'basic'} className="text-[var(--color-basic)]" />
      <RoundButton
        icon="list"
        hoverColor={'basic'}
        className="hidden text-[var(--color-basic)] md:inline-flex"
      />
      <RoundButton icon="smile" hoverColor={'basic'} className="text-[var(--color-basic)]" />
      <RoundButton
        icon="calendar"
        hoverColor={'basic'}
        className="hidden text-[var(--color-basic)] md:inline-flex"
      />
      <RoundButton icon="location" hoverColor={'basic'} className="text-[var(--color-basic)]" />
    </div>
  );
};

export default PostButtonBar;
