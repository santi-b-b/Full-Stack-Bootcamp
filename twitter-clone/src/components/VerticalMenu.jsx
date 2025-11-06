import { GoHomeFill } from 'react-icons/go';
import { FiSearch, FiMail } from 'react-icons/fi';
import { GrNotification } from 'react-icons/gr';
import { PiPlanetBold } from 'react-icons/pi';
import { TbDotsCircleHorizontal } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { RxDotsHorizontal } from 'react-icons/rx';
import Image from 'next/image';
import MenuButton from './MenuButton';

const VerticalMenu = ({}) => {
  return (
    <div className="sticky top-0 z-50 flex flex-col">
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
        Premium
      </button>

      <MenuButton link={'/'} text={'Profile'} icon={'IoPersonOutline'}></MenuButton>
      <MenuButton link={'/'} text={'More'} icon={'TbDotsCircleHorizontal'}></MenuButton>

      <button className="mt-2 flex w-56 items-center justify-center gap-3 rounded-full bg-black p-3 font-sans text-lg font-bold text-white hover:bg-neutral-800">
        Post
      </button>
      <button className="mt-3 flex items-center gap-3 rounded-full p-3 font-sans text-xl hover:bg-neutral-200">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-800">
          <p className="text-2xl text-white">S</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-bold">Santiago Benitez B...</p>
          <p className="text-sm text-neutral-400">@santi_b_b</p>
        </div>
        <RxDotsHorizontal></RxDotsHorizontal>
      </button>
    </div>
  );
};

export default VerticalMenu;
