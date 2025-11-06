'use client';

import Image from 'next/image';
import RoundButton from './RoundButton';

const ButtonBar = ({}) => {
  return (
    <div className="flex flex-1 flex-row">
      <div className="flex w-full justify-start">
        <RoundButton
          icon="RiChat1Line"
          hoverColor={'basic'}
          text={'100'}
          className="flex-1 text-gray-500"
        />
        <RoundButton
          icon="LiaSyncAltSolid"
          hoverColor={'repost'}
          text={'100'}
          className="flex-1 text-gray-500"
        />
        <RoundButton
          icon="RiHeart3Line"
          hoverColor={'like'}
          text={'100'}
          className="flex-1 text-gray-500"
        />
        <RoundButton
          icon="IoStatsChartSharp"
          hoverColor={'basic'}
          text={'100'}
          className="flex-1 text-gray-500"
        />
      </div>

      <div className="flex flex-row justify-center gap-1">
        <RoundButton icon="FiBookmark" hoverColor={'basic'} className="text-gray-500" />
        <RoundButton icon="FiShare" hoverColor={'basic'} className="text-gray-500" />
      </div>
    </div>
  );
};

export default ButtonBar;
