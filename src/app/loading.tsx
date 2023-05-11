'use client';

import { Spinner } from 'design-system-medclub';

export default function Loading() {
  return (
    <div className='flex h-full w-screen items-center justify-center'>
      <div className='h-10 w-10'>
        <Spinner />
      </div>
    </div>
  );
}
