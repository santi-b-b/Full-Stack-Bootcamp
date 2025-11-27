import Link from 'next/link';
import RoundButton from './RoundButton';
import { RiArrowLeftLine } from 'react-icons/ri';
import Header from './Header';

const TweetHeader = ({ text, children }) => {
  return (
    <Header>
      <Link href="/" className="mr-6 ml-2 inline-flex">
        <RoundButton icon="arrow" hoverColor={'neutral'} />
      </Link>
      <Link href="/" className="ml-2 flex items-center justify-center gap-2">
        <p className="items-start justify-start text-xl font-bold">{text}</p>
        {children}
      </Link>
    </Header>
  );
};

export default TweetHeader;
