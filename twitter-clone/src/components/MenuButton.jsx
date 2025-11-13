'use client';

import Link from 'next/link';
import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { FiSearch, FiMail } from 'react-icons/fi';
import { GrNotification } from 'react-icons/gr';
import { PiPlanetBold } from 'react-icons/pi';
import { TbDotsCircleHorizontal } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { RxDotsHorizontal } from 'react-icons/rx';

const ICONS = {
  GoHomeFill,
  FiSearch,
  FiMail,
  GrNotification,
  PiPlanetBold,
  TbDotsCircleHorizontal,
  IoPersonOutline,
  RxDotsHorizontal,
};

const MenuButton = ({ icon, text, link }) => {
  const IconComp = icon ? ICONS[icon] : null;

  return (
    <Link href={link} className="inline-flex">
      <button className="flex items-center gap-3 rounded-full p-3 pr-8 font-sans text-xl hover:bg-neutral-200">
        <div className="w-10">{IconComp && <IconComp className={'text-3xl'} />}</div>
        <div className="hidden md:inline">{text}</div>
      </button>
    </Link>
  );
};

export default MenuButton;
