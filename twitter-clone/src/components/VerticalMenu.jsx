import { GoHomeFill } from "react-icons/go";
import { FiSearch, FiMail  } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { PiPlanetBold } from "react-icons/pi";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import Image from "next/image";

const VerticalMenu = ({}) => {
  return (
    <div className=" flex-col">
      
      <Image
                    src="/assets/mockImage.jpg"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="rounded-full object-contain  filter invert hover:backdrop-opacity-50"
      />      
      <button className=" flex items-center text-xl font-bold gap-3 rounded-full p-3 pr-8 font-sans hover:bg-neutral-200">
        <div className="w-10">
          <GoHomeFill className="text-3xl"></GoHomeFill>
        </div>
        
        Home
      </button>
      <button className=" flex items-center text-xl gap-3 rounded-full p-3 pr-8 font-sans hover:bg-neutral-200">
        <div className="w-10">
          <FiSearch className="text-2xl"></FiSearch>
        </div>
        Explore
      </button>
      <button className=" flex items-center text-xl gap-3 rounded-full p-3 pr-8 font-sans hover:bg-neutral-200">
        <div className="w-10">
          <GrNotification className="text-2xl"></GrNotification>
        </div>
        Notifications
      </button>
      <button className=" flex items-center text-xl gap-3 rounded-full p-3 pr-8 font-sans hover:bg-neutral-200">
        <div className="w-10">
          <FiMail className="text-2xl"></FiMail>
        </div>
        Messages
      </button>
      <button className=" flex items-center text-xl gap-3 rounded-full p-3 pr-8 font-sans hover:bg-neutral-200">
        <div className="w-10">
          <PiPlanetBold className="text-2xl"></PiPlanetBold>
        </div>
        Grok
      </button>
      <button className=" flex items-center text-xl gap-3 rounded-full p-3 pr-8 font-sans hover:bg-neutral-200">
        <div className="w-10">
          <FiSearch className="text-2xl"></FiSearch>
        </div>
        Communities
      </button>
      <button className=" flex items-center text-xl gap-3 rounded-full pl-1 py-3 pr-8 font-sans hover:bg-neutral-200">
        <Image
                    src="/assets/mockImage.jpg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full object-contain invert"
          />  
        Premium
      </button>
      <button className=" flex items-center text-xl gap-3 rounded-full p-3 pr-8 font-sans hover:bg-neutral-200">
        <div className="w-10">
          <IoPersonOutline className="text-2xl"></IoPersonOutline>
        </div>
        Profile
      </button>
      <button className=" flex items-center text-xl gap-3 rounded-full p-3 pr-8 font-sans hover:bg-neutral-200">
        <div className="w-10">
          <TbDotsCircleHorizontal className="text-3xl"></TbDotsCircleHorizontal>
        </div>
        More
      </button>
      <button className="mt-2 w-56 flex justify-center items-center text-lg gap-3 rounded-full p-3 font-sans font-bold text-white bg-black hover:bg-neutral-800">
        Post
      </button>
    </div>
  );
};

export default VerticalMenu;