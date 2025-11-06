'use client';

import React from 'react';
import { RxDotsHorizontal } from 'react-icons/rx';
import {
  RiChat1Line,
  RiHeart3Line,
  RiArrowLeftLine,
  RiListRadio,
  RiCalendarScheduleLine,
} from 'react-icons/ri';
import { IoStatsChartSharp } from 'react-icons/io5';
import { LiaSyncAltSolid } from 'react-icons/lia';
import { FiShare, FiBookmark, FiSmile } from 'react-icons/fi';
import { LuImage } from 'react-icons/lu';
import { MdOutlineGifBox } from 'react-icons/md';
import { PiPlanetBold } from 'react-icons/pi';
import { GrLocation } from 'react-icons/gr';

const ICONS = {
  RxDotsHorizontal,
  RiChat1Line,
  RiHeart3Line,
  IoStatsChartSharp,
  LiaSyncAltSolid,
  FiShare,
  FiBookmark,
  RiArrowLeftLine,
  LuImage,
  MdOutlineGifBox,
  PiPlanetBold,
  RiListRadio,
  FiSmile,
  RiCalendarScheduleLine,
  GrLocation,
};

const RoundButton = ({ icon, text, onClick, hoverColor = 'neutral-200', className = '' }) => {
  const hoverClasses = {
    basic: 'group-hover:text-[var(--color-basic)] group-hover:bg-[var(--color-basic-background)]',
    like: 'group-hover:text-[var(--color-like)] group-hover:bg-[var(--color-like-background)]',
    repost:
      'group-hover:text-[var(--color-repost)] group-hover:bg-[var(--color-repost-background)]',
    'green-400': 'group-hover:text-green-600 group-hover:bg-green-100',
    'pink-400': 'group-hover:text-pink-600 group-hover:bg-pink-100',
    'blue-400': 'group-hover:text-sky-600 group-hover:bg-sky-100',
    'neutral-200': 'group-hover:text-neutral-500 group-hover:bg-neutral-200',
  };

  const hoverClass = hoverClasses[hoverColor] || hoverClasses['neutral-200'];
  const IconComp = icon ? ICONS[icon] : null;

  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-1 pl-2 transition-colors duration-200 ${hoverClass} ${className}`}
    >
      {IconComp && (
        <IconComp
          className={`z-10 h-4.5 w-4.5 transition-colors duration-200 ${hoverClass.split(' ')[0]}`}
        />
      )}

      {text && (
        <span className={`z-10 text-xs transition-colors duration-200 ${hoverClass.split(' ')[0]}`}>
          {text}
        </span>
      )}
      <div
        className={`absolute left-0 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${hoverClass}`}
      ></div>
    </button>
  );
};

export default RoundButton;
