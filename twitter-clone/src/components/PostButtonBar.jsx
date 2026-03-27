'use client';

import { useRef } from 'react';
import RoundButton from './RoundButton';

const PostButtonBar = ({ onSelectImage }) => {
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onSelectImage(file); // se lo pasas al padre
    e.target.value = '';
  };

  return (
    <div className="flex w-full flex-1 flex-row justify-start gap-3">
      {/* Image Button */}
      <RoundButton
        icon="image"
        hoverColor={'basic'}
        className="text-[var(--color-basic)]"
        onClick={handleClick}
      />

      {/* Hidden Input */}
      <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleFileChange} />

      {/* Other buttons */}
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
