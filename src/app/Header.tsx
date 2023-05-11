import 'server-only';

import Image from 'next/image';
import logo from 'public/logo-emr.svg';

export function Header() {
  return (
    <div className='p- p- flex w-full justify-between bg-green-dark000 px-11 py-4'>
      <Image {...logo} alt='logo emr' />
    </div>
  );
}
