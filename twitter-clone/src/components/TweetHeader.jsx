import Link from 'next/link';
import RoundButton from './RoundButton';
import { RiArrowLeftLine } from 'react-icons/ri';

const TweetHeader = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-start gap-2 border-x border-gray-100 bg-white/80 px-1 py-2 backdrop-blur-md">
      <Link href="/" className="inline-flex">
        <RoundButton icon="RiArrowLeftLine" hoverColor={'neutral'} />
      </Link>
      <Link href="/" className="ml-2">
        <p className="items-start justify-start text-xl font-bold">Post</p>
      </Link>
    </header>
  );
};

export default TweetHeader;
