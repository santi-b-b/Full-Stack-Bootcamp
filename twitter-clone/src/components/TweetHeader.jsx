import Link from "next/link";
import RoundButton from "./RoundButton";
import { RiArrowLeftLine } from "react-icons/ri";

const TweetHeader = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-start px-1 py-2 bg-white/80 backdrop-blur-md border-x border-gray-100 gap-2">
      <Link href="/" className="inline-flex">
        <RoundButton icon="RiArrowLeftLine" hoverColor={"neutral"} />
      </Link>
      <Link href="/" className="ml-2">
        <p className="text-xl font-bold items-start justify-start">Post</p>
      </Link>
    </header>
  );
};

export default TweetHeader;