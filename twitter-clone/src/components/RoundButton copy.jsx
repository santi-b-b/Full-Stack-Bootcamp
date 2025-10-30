"use client";

import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { RiChat1Line, RiHeart3Line, RiArrowLeftLine } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
import { LiaSyncAltSolid } from "react-icons/lia";
import { FiShare, FiBookmark } from "react-icons/fi";

const ICONS = {
  RxDotsHorizontal,
  RiChat1Line,
  RiHeart3Line,
  IoStatsChartSharp,
  LiaSyncAltSolid,
  FiShare,
  FiBookmark,
  RiArrowLeftLine,
};

const RoundButton = ({ icon, text, onClick, hoverColor = "neutral-200", className = "" }) => {
  const hoverClasses = {
    "cyan-400": "group-hover:text-cyan-400 group-hover:bg-cyan-50",
    "green-400": "group-hover:text-green-600 group-hover:bg-green-100",
    "pink-400": "group-hover:text-pink-600 group-hover:bg-pink-100",
    "blue-400": "group-hover:text-sky-600 group-hover:bg-sky-100",
    "neutral-200": "group-hover:text-gray-400 group-hover:bg-neutral-50",
  };

  const hoverClass = hoverClasses[hoverColor] || hoverClasses["neutral-200"];
  const IconComp = icon ? ICONS[icon] : null;

  const sizeClass = text
    ? "w-14"      // si hay texto → botón más ancho
    : "w-9";        // si no hay texto → círculo perfecto


  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 text-gray-500 relative transition-colors duration-200 ${sizeClass} ${className}`}
    >
      {/* Círculo del ícono */}
      <div
        className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 ${hoverClass}`}
      >
        {IconComp && <IconComp className="w-4.5 h-4.5" />}
      </div>

      {/* Texto fuera del círculo */}
      {text && (
        <span
          className={`text-xs transition-colors duration-200 absolute right-2 ${hoverClass.split(" ")[0]}`}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default RoundButton;
