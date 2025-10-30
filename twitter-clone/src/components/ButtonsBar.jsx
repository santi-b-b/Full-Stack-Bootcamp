"use client";

import Image from "next/image";
import RoundButton from "./RoundButton";

const ButtonBar = ({}) => {
  return (
    <div className="flex flex-1 flex-row">
        <div className="flex w-full justify-start">
          <RoundButton icon="RiChat1Line" hoverColor={"blue-400"} text={"100"} className="flex-1" />
          <RoundButton icon="LiaSyncAltSolid" hoverColor={"green-400"} text={"100"} className="flex-1" />
          <RoundButton icon="RiHeart3Line" hoverColor={"pink-400"} text={"100"} className="flex-1" />
          <RoundButton icon="IoStatsChartSharp" hoverColor={"blue-400"} text={"100"} className="flex-1" />
          
        </div>

        <div className="flex flex-row justify-center gap-1">
            <RoundButton icon="FiBookmark" hoverColor={"blue-400"} />
            <RoundButton icon="FiShare" hoverColor={"blue-400"} />
        </div>


    </div>
  );
};

export default ButtonBar;