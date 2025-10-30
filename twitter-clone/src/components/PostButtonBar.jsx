"use client";

import Image from "next/image";
import RoundButton from "./RoundButton";

const PostButtonBar = ({}) => {
  return (
    <div className="flex flex-1 w-full flex-row justify-start gap-3">
      <RoundButton icon="LuImage" hoverColor={"blue-400"} className="text-sky-600"/>
      <RoundButton icon="MdOutlineGifBox" hoverColor={"blue-400"} className="text-sky-600"/>
      <RoundButton icon="PiPlanetBold" hoverColor={"blue-400"} className="text-sky-600"/>
      <RoundButton icon="RiListRadio" hoverColor={"blue-400"} className="text-sky-600 hidden"/>
      <RoundButton icon="FiSmile" hoverColor={"blue-400"} className="text-sky-600"/>
      <RoundButton icon="RiCalendarScheduleLine" hoverColor={"blue-400"} className="text-sky-600 hidden"/>
      <RoundButton icon="GrLocation" hoverColor={"blue-400"} className="text-sky-600"/>
    </div>
  );
};

export default PostButtonBar;