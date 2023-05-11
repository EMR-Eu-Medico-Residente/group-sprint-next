'use client';

import { Avatar } from 'design-system-medclub';
import { DeveloperCardProps } from './types';

export function DeveloperCard({ name, avatarUrl }: DeveloperCardProps) {
  console.log(avatarUrl);
  return (
    <div className='w-xs flex items-center gap-2 rounded bg-gray-100 p-2'>
      {/* <img src={avatar} alt='ᓚᘏᗢ' className='h-10 w-10 rounded-full' /> */}
      <Avatar name={name} src={avatarUrl} size={'base'} />
      <span>{name}</span>
    </div>
  );
}
