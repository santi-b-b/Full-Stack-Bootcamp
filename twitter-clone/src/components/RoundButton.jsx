'use client';

import ICONS from '@/icons/ICONS';
import React from 'react';
import clsx from 'clsx';

const RoundButton = ({ borderColor, icon, active, text, onClick, hoverColor, className = '' }) => {
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
      text: 'text-neutral-800',
      hoverText: 'group-hover:text-neutral-800',
      bg: 'group-hover:bg-neutral-200',
    },
  };

  const borderClasses = {
    'neutral-200': 'border-neutral-200',
    'red-500': 'border-red-500',
    'blue-400': 'border-blue-400',
  };

  // Use a safe fallback to a predefined key so hoverClass is always defined
  const hoverClass = hoverClasses[hoverColor] || hoverClasses.basic;
  const borderClass = borderClasses[borderColor];

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
          `z-2 text-xs transition-colors duration-200`,

          active ? `${hoverClass.text}` : `${hoverClass.hoverText}`
        )}
      >
        {text}
      </span>
      <div
        className={clsx(
          `absolute -left-0.5 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${hoverClass.bg}`,
          borderColor ? `border-1 ${borderClass}` : ''
        )}
      ></div>
    </button>
  );
};

export default RoundButton;
