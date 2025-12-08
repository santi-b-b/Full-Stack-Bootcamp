'use client';
import Image from 'next/image';
import MenuButton from './MenuButton';
import { useUser } from '@/contexts/userContext';
import { useState } from 'react';
import SidebarMenuPopover from './LogoutPopOver';

const VerticalMenu = ({}) => {
  const { user, authless } = useUser();
  const [logout, SetLogout] = useState(true);

  //XX Arreglar, no puede depender del authless

  if (authless) {
    return (
      <div className="sticky w-60 items-start">
        <div className="top-0 z-50 flex h-screen flex-col">
          <Image
            src="/assets/mockImage.jpg"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full object-contain invert filter hover:backdrop-opacity-50"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="sticky">
      <div className="top-0 z-50 flex h-screen flex-col">
        <Image
          src="/assets/mockImage.jpg"
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full object-contain invert filter hover:backdrop-opacity-50"
        />

        <MenuButton link={'/'} text={'Home'} icon={'GoHomeFill'}></MenuButton>
        <MenuButton link={'/'} text={'Explore'} icon={'FiSearch'}></MenuButton>
        <MenuButton link={'/'} text={'Notifications'} icon={'GrNotification'}></MenuButton>
        <MenuButton link={'/'} text={'Messages'} icon={'FiMail'}></MenuButton>
        <MenuButton link={'/'} text={'Grok'} icon={'PiPlanetBold'}></MenuButton>
        <MenuButton link={'/'} text={'Communities'} icon={'FiSearch'}></MenuButton>

        <button className="flex items-center gap-3 rounded-full py-3 pr-8 pl-1 font-sans text-xl hover:bg-neutral-200">
          <Image
            src="/assets/mockImage.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-contain invert"
          />
          <div className="hidden md:inline">Premium</div>
        </button>

        <MenuButton
          link={`/user/${user.id}`}
          text={'Profile'}
          icon={'IoPersonOutline'}
        ></MenuButton>
        <MenuButton link={'/'} text={'More'} icon={'TbDotsCircleHorizontal'}></MenuButton>

        <button className="hidden items-center justify-center gap-3 rounded-full bg-black p-2 font-sans text-lg font-bold text-white not-first:mt-2 hover:bg-neutral-800 md:inline md:w-56">
          <div className="hidden md:inline">Post</div>
        </button>
        <div className="bottom relative">
          <SidebarMenuPopover />
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
