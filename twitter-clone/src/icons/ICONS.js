// import {
//   RxDotsHorizontal,
//   RiChat1Line,
//   RiHeart3Line,
//   IoStatsChartSharp,
//   LiaSyncAltSolid,
//   FiShare,
//   FiBookmark,
//   RiArrowLeftLine,
//   LuImage,
//   MdOutlineGifBox,
//   PiPlanetBold,
//   RiListRadio,
//   FiSmile,
//   RiCalendarScheduleLine,
//   GrLocation,

// } from 'react-icons/all'; // ajusta según tus imports

import { RxDotsHorizontal } from 'react-icons/rx';
import {
  RiChat1Line,
  RiHeart3Line,
  RiHeart3Fill,
  RiArrowLeftLine,
  RiListRadio,
  RiCalendarScheduleLine,
} from 'react-icons/ri';
import { IoStatsChartSharp } from 'react-icons/io5';
import { LiaSyncAltSolid } from 'react-icons/lia';
import { FiShare, FiBookmark, FiSmile } from 'react-icons/fi';
import { LuImage } from 'react-icons/lu';
import { MdOutlineGifBox } from 'react-icons/md';
import { PiPlanetBold } from 'react-icons/pi';
import { GrLocation } from 'react-icons/gr';

const ICONS = {
  dots: { default: RxDotsHorizontal, active: RxDotsHorizontal },
  chat: { default: RiChat1Line, active: RiChat1Line },
  like: { default: RiHeart3Line, active: RiHeart3Fill },
  stats: { default: IoStatsChartSharp, active: IoStatsChartSharp },
  repost: { default: LiaSyncAltSolid, active: LiaSyncAltSolid },
  share: { default: FiShare, active: FiShare },
  bookmark: { default: FiBookmark, active: FiBookmark },
  arrow: { default: RiArrowLeftLine, active: RiArrowLeftLine },
  image: { default: LuImage, active: LuImage },
  gif: { default: MdOutlineGifBox, active: MdOutlineGifBox },
  planet: { default: PiPlanetBold, active: PiPlanetBold },
  list: { default: RiListRadio, active: RiListRadio },
  smile: { default: FiSmile, active: FiSmile },
  calendar: { default: RiCalendarScheduleLine, active: RiCalendarScheduleLine },
  location: { default: GrLocation, active: GrLocation },
};

export default ICONS;
