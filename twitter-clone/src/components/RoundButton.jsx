'use client';

import ICONS from '@/icons/ICONS';
import React from 'react';
import clsx from 'clsx';

const RoundButton = ({ icon, active, text, onClick, hoverColor, className = '' }) => {
  // Define the hover classes as string literals so Tailwind's scanner
  // can see them at build time and generate the corresponding CSS.
  const hoverClasses = {
    basic: {
      text: 'text-[var(--color-basic)]',
      hoverText: 'group-hover:text-[var(--color-basic)]',
      bg: 'group-hover:bg-[var(--color-basic-background)]',
    },
    like: {
      text: 'text-[var(--color-like)]',
      hoverText: 'group-hover:text-[var(--color-like)]',
      bg: 'group-hover:bg-[var(--color-like-background)]',
    },
    repost: {
      text: 'text-[var(--color-repost)]',
      hoverText: 'group-hover:text-[var(--color-repost)]',
      bg: 'group-hover:bg-[var(--color-repost-background)]',
    },
    'neutral-200': {
      text: 'text-[var(--color-neutral-200)]',
      hoverText: 'group-hover:text-[var(--color-neutral-200)]',
      bg: 'group-hover:bg-[var(--color-neutral-200-background)]',
    },
  };

  // Use a safe fallback to a predefined key so hoverClass is always defined
  const hoverClass = hoverClasses[hoverColor] || hoverClasses.basic;
  const IconComp = icon
    ? ICONS[icon]?.active && active
      ? ICONS[icon].active
      : ICONS[icon]?.default || null
    : null;
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center gap-1 pl-2 transition-colors duration-200 ${className}`}
    >
      {IconComp && (
        <IconComp
          className={clsx(
            `z-1 h-4.5 w-4.5 transition-colors duration-200`,
            active ? `${hoverClass.text}` : `${hoverClass.hoverText}`
          )}
        />
      )}

      <span
        className={clsx(
          `z-1 text-xs transition-colors duration-200`,
          active ? `${hoverClass.text}` : `${hoverClass.hoverText}`
        )}
      >
        {text}
      </span>
      <div
        className={`absolute -left-0.5 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${hoverClass.bg}`}
      ></div>
    </button>
  );
};

export default RoundButton;
