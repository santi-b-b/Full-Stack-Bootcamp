'use client';

import RoundButton from './RoundButton';
import { useState, useEffect } from 'react';

const ButtonBar = ({}) => {
  const [liked, setLiked] = useState(false);

  function handleLikeClick(e) {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    setLiked((prev) => !prev);
  }

  return (
    <div className="z-10 flex flex-1 flex-row">
      <div className="flex w-full justify-start">
        <RoundButton
          icon="chat"
          hoverColor={'basic'}
          text={'100'}
          className="flex-1 text-gray-500"
        />
        <RoundButton
          icon="repost"
          hoverColor={'repost'}
          text={'100'}
          className="flex-1 text-gray-500"
        />
        <RoundButton
          icon="like"
          hoverColor={'like'}
          onClick={handleLikeClick}
          active={liked}
          text={'100'}
          className="flex-1 text-gray-500"
        />
        <RoundButton
          icon="stats"
          hoverColor={'basic'}
          text={'100'}
          className="flex-1 text-gray-500"
        />
      </div>

      <div className="flex flex-row justify-center gap-1">
        <RoundButton icon="bookmark" hoverColor={'basic'} className="text-gray-500" />
        <RoundButton icon="share" hoverColor={'basic'} className="text-gray-500" />
      </div>
    </div>
  );
};

export default ButtonBar;
