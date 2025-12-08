'use client';
import RoundButton from './RoundButton';
import { PiSealCheckFill } from 'react-icons/pi';
import { memo } from 'react';
import FollowButton from './FollowButton';
import { useUser } from '@/contexts/userContext';
import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

const UserCard = ({ profileUser }) => {
  const { user } = useUser();

  console.log(user);
  console.log(profileUser);
  //const [following, setFollowing] = useState(user?.following?.includes(profileUser._id) ?? false);

  const checkColors = {
    basic: 'text-[var(--color-basic)]',
  };

  if (!profileUser || !user) {
    return <LoadingScreen></LoadingScreen>;
  }

  const following = user?.following?.includes(profileUser._id) ?? false;
  return (
    <div className="relative">
      <img src={'/assets/mockImage.jpg'} className="h-48 w-full bg-black object-cover" />
      <img
        src={profileUser.image}
        className="absolute top-28 left-4 h-36 w-36 rounded-full border-4 border-white bg-neutral-100 object-cover"
      />
      <div className="w-full border-x border-gray-100 p-4">
        <div className="flex h-9 justify-end gap-3">
          <RoundButton
            borderColor={'neutral-200'}
            hoverColor={'neutral-200'}
            icon={'dots'}
          ></RoundButton>
          <RoundButton
            borderColor={'neutral-200'}
            hoverColor={'neutral-200'}
            icon={'bell'}
          ></RoundButton>
          {user.id !== profileUser._id && (
            <FollowButton
              targetUserId={profileUser._id}
              initialIsFollowing={following}
            ></FollowButton>
          )}
        </div>
        <div className="flex h-12 items-end">
          <p className="text-xl font-bold">{profileUser.name}</p>
          <PiSealCheckFill className={`mb-0.5 text-[20px] ${checkColors.basic}`}></PiSealCheckFill>
        </div>
        <p className="mb-4 text-base text-neutral-500">@{profileUser.userName}</p>
        <p className="mb-4 text-base">
          Aquí iría la descripción del usuario o un pequeño texto, tengo que agregarlo al modelo de
          datos.
        </p>
        <p className="mb-4 text-base text-neutral-500">
          Media & News CompanyChileelmostrador.cl Joined January 2008 270 Following 1.8M Followers
          Not followed by anyone you’re following
        </p>
      </div>
    </div>
  );
};

export default UserCard;
