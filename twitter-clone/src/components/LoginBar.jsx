'use client';
import Link from 'next/link';
import { useUser } from '@/contexts/userContext';

const LoginBar = ({}) => {
  const { authless } = useUser();

  if (!authless) return null;

  return (
    <div className="absolute bottom-0 left-0 z-50 flex h-18 w-full items-center justify-between bg-[var(--color-basic)] px-4 pr-30 pl-80 text-white shadow-[0_1px_20px_rgba(0,0,0,0.25)]">
      <div>
        <p className="text-xl font-bold">No te pierdas lo que esta pasando</p>
        <p>Las personas en X son las primeras en enterarse.</p>
      </div>
      <div className="text-md flex gap-2 font-bold">
        <Link href={'/login'} className="inline-flex">
          <button className="w-48 rounded-full border-1 border-blue-400 bg-none py-2 text-white hover:bg-[var(--color-basic-hover)]">
            Log in
          </button>
        </Link>
        <Link href={'/register'} className="inline-flex">
          <button className="w-48 rounded-full bg-white py-2 text-black hover:bg-neutral-200">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginBar;
