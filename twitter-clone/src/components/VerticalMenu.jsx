'use client';
import { RxDotsHorizontal } from 'react-icons/rx';
import Image from 'next/image';
import MenuButton from './MenuButton';
import { useUser } from '@/contexts/userContext';

const VerticalMenu = ({}) => {
  const { user, authless } = useUser();

  if (authless) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="h-6 w-6 animate-spin rounded-full border-[3.5px] border-[var(--color-basic-background)] border-t-[var(--color-brand-generic)]"></div>
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

        <MenuButton link={'/'} text={'Profile'} icon={'IoPersonOutline'}></MenuButton>
        <MenuButton link={'/'} text={'More'} icon={'TbDotsCircleHorizontal'}></MenuButton>

        <button className="hidden items-center justify-center gap-3 rounded-full bg-black p-2 font-sans text-lg font-bold text-white not-first:mt-2 hover:bg-neutral-800 md:inline md:w-56">
          <div className="hidden md:inline">Post</div>
        </button>
        <button className="mt-3 flex items-center gap-3 rounded-full p-3 font-sans text-xl hover:bg-neutral-200 md:w-56">
          <img
            src={user.image}
            alt="user avatar"
            onError={(e) => (e.target.src = '/assets/default-avatar.png')}
            className="h-10 w-10 rounded-full bg-neutral-200 object-cover"
          />
          <div className="flex flex-col items-start">
            <p className="hidden text-sm font-bold md:inline">{user.name}</p>
            <p className="hidden text-sm text-neutral-400 md:inline">@{user.name}</p>
          </div>
          <RxDotsHorizontal className="absolute right-4 hidden md:inline"></RxDotsHorizontal>
        </button>
      </div>
    </div>
  );
};

export default VerticalMenu;
