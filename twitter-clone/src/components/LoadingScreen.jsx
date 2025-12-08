'use client';
import { useUser } from '@/contexts/userContext';

const LoadingScreen = ({}) => {
  const { authless } = useUser();

  if (!authless) return null;

  return (
    <div className="absolute bottom-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black">
      <img src={'/assets/mockImage.jpg'} className="h-20" />
    </div>
  );
};
export default LoadingScreen;
