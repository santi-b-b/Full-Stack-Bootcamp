'use client';
import { RxDotsHorizontal } from 'react-icons/rx';
import { useUser } from '@/contexts/userContext';
import * as Popover from '@radix-ui/react-popover';
import { useRouter } from 'next/navigation';

export default function SidebarMenuPopover({ userName }) {
  const { user, setUser, setAuthless } = useUser();
  const router = useRouter();
  async function handleLogoutClick() {
    try {
      await fetch(`/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (err) {
      console.error('handleLikeClick error:', err);
    } finally {
      setAuthless(true);
      setUser(null);
      router.push('/login');
    }
  }

  console.log();
  return (
    <Popover.Root>
      <Popover.Trigger className="mt-3 flex items-center gap-3 rounded-full p-3 font-sans text-xl hover:bg-neutral-200 md:w-56">
        <img
          src={user.image}
          alt="user avatar"
          onError={(e) => (e.target.src = '/assets/default-avatar.png')}
          className="h-10 w-10 rounded-full bg-neutral-200 object-cover"
        />
        <div className="flex flex-col items-start">
          <p className="hidden text-sm font-bold md:inline">{user.name}</p>
          <p className="hidden text-sm text-neutral-400 md:inline">@{user.name}</p>
        </div>
        <RxDotsHorizontal className="absolute right-4 hidden md:inline"></RxDotsHorizontal>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="top"
          sideOffset={8}
          className="text-md w-72 rounded-xl bg-white py-3 font-bold shadow-[0_1px_20px_rgba(0,0,0,0.25)]"
        >
          <div className="p-3 hover:bg-neutral-100">
            <p className="h-full">Add an existing account</p>
          </div>
          <div onClick={handleLogoutClick} className="p-3 hover:bg-neutral-100">
            <p className="h-full hover:bg-neutral-100">Log out @{userName}</p>
          </div>

          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
