import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';

const Header = () => {
  return (
    <section className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
      <div className='flex'>
        <HeaderIcon Icon={HomeIcon} title='HOME' />
        <HeaderIcon Icon={UserIcon} title='ACCOUNT' />
        <HeaderIcon Icon={PhoneIcon} title='CONTACT' />
        <HeaderIcon Icon={InformationCircleIcon} title='ABOUT' />
      </div>
      <Image
        src='data:image/png;base64,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'
        width={100}
        height={50}
        className='cursor-pointer active:brightness-110'
      />
    </section>
  );
};

export default Header;
