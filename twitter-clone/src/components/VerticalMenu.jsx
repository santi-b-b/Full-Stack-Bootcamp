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
        <div className="hidden md:inline">Premium</div>
      </button>

      <MenuButton link={'/'} text={'Profile'} icon={'IoPersonOutline'}></MenuButton>
      <MenuButton link={'/'} text={'More'} icon={'TbDotsCircleHorizontal'}></MenuButton>

      <button className="hidden w-56 items-center justify-center gap-3 rounded-full bg-black p-3 font-sans text-lg font-bold text-white not-first:mt-2 hover:bg-neutral-800 md:inline">
        <div className="hidden md:inline">Post</div>
      </button>
      <button className="mt-3 flex items-center gap-3 rounded-full p-3 font-sans text-xl hover:bg-neutral-200">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-800">
          <p className="text-2xl text-white">S</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="hidden text-sm font-bold md:inline">Santiago Benitez B...</p>
          <p className="hidden text-sm text-neutral-400 md:inline">@santi_b_b</p>
        </div>
        <RxDotsHorizontal className="hidden md:inline"></RxDotsHorizontal>
      </button>
    </div>
  );
};

export default VerticalMenu;
