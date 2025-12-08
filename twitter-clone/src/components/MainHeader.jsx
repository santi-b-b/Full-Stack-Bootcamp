'use client';
import Header from './Header';
import { useRouter } from 'next/navigation';

const MainHeather = ({ tab }) => {
  const router = useRouter();
  function handleMainClik() {
    router.push(`/`);
  }

  function handleFollowingClik() {
    router.push(`/following`);
  }
  return (
    <Header>
      <div
        onClick={handleMainClik}
        className="relative flex flex-1 items-center justify-center hover:bg-neutral-200"
      >
        <p className={tab === 'main' ? 'p-3 text-black' : 'p-3 text-neutral-400'}>For you</p>
        {tab === 'main' ? (
          <div className="absolute bottom-0.5 w-14 rounded-full border-[3px] border-[var(--color-brand-generic)]"></div>
        ) : (
          <></>
        )}
      </div>
      <div
        onClick={handleFollowingClik}
        className="relative flex h-full flex-1 items-center justify-center hover:border-neutral-200 hover:bg-neutral-200"
      >
        <p className={tab === 'following' ? 'p-3 text-black' : 'p-3 text-neutral-400'}>Following</p>
        {tab === 'following' ? (
          <div className="absolute bottom-0.5 w-14 rounded-full border-[3px] border-[var(--color-brand-generic)]"></div>
        ) : (
          <></>
        )}
      </div>
    </Header>
  );
};

export default MainHeather;
