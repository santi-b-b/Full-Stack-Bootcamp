"use client";

import Image from "next/image";
import RoundButton from "./RoundButton";

const PostButtonBar = ({}) => {
  return (
    <div className="flex flex-1 w-full flex-row justify-start gap-3">
      <RoundButton icon="LuImage" hoverColor={"basic"} className="text-[var(--color-basic)]"/>
      <RoundButton icon="MdOutlineGifBox" hoverColor={"basic"} className="text-[var(--color-basic)]"/>
      <RoundButton icon="PiPlanetBold" hoverColor={"basic"} className="text-[var(--color-basic)]"/>
      <RoundButton icon="RiListRadio" hoverColor={"basic"} className="text-[var(--color-basic)]  hidden md:inline-flex"/>
      <RoundButton icon="FiSmile" hoverColor={"basic"} className="text-[var(--color-basic)]"/>
      <RoundButton icon="RiCalendarScheduleLine" hoverColor={"basic"} className="text-[var(--color-basic)]  hidden md:inline-flex"/>
      <RoundButton icon="GrLocation" hoverColor={"basic"} className="text-[var(--color-basic)]"/>
    </div>
  );
};

export default PostButtonBar;