'use client';
import { useRouter } from 'next/navigation';
import RoundButton from './RoundButton';
import Header from './Header';

const TweetHeader = ({ text, children }) => {
  const router = useRouter();
  return (
    <Header>
      <RoundButton
        icon="arrow"
        hoverColor={'neutral'}
        onClick={() => router.back()}
        className="ml-3"
      />
      <div className="ml-2 flex items-end justify-center gap-1">
        <p className="text-xl font-bold">{text}</p>
        {children}
      </div>
    </Header>
  );
};

export default TweetHeader;
