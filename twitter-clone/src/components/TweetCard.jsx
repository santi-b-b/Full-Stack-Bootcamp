"use client";

import Image from "next/image";
import RoundButton from "./RoundButton";
import ButtonBar from "./ButtonsBar";
import { PiSealCheckFill } from "react-icons/pi";

const TweetCard = ({ data }) => {
  return (
    <div className="flex flex-row border-x border-b border-gray-100 p-4 pt-3 items-start gap-4 text-gray-900">
      <Image
        src="/assets/mockImage.jpg"
        alt="Logo"
        width={40}
        height={40}
        className="rounded-xs object-contain"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-start gap-1 items-center relative">
          <p className="font-bold">Santi</p>
          <PiSealCheckFill className="text-[30px] text-amber-400"/>
          <p className="w-full text-neutral-500">@santi_b_b · 9h</p>
          <RoundButton
            icon="RxDotsHorizontal"
            hoverColor={"blue-400"}
            className="absolute top-0.5 right-0"
          />
        </div>

        <p className="font-sans text-[16px]">{data.body}</p>

        <ButtonBar></ButtonBar>
      </div>
    </div>
  );
};

export default TweetCard;