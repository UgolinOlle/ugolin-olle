import React from 'react';
import Image from 'next/image';
import { ImArrowUpRight2 } from 'react-icons/im';

import profile from '../public/profile.png';

export default function Footer() {
  return (
    <footer className='flex lg:flex-row flex-col justify-between w-full bg-white dark:bg-dark dark:text-white'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 flex lg:flex-row flex-col justify-between w-full'>
        <div className='flex flex-col justify-around px-10 relative'>
          <Image
            src={profile}
            alt='Photo de profile'
            className='absolute right-1 w-1/4 top-0 hidden lg:block'
          />
          <h2 className='text-6xl'>Ugolin Ollé</h2>
          <h3 className='text-3xl mt-3 relative'>
            <span className='bg-red p-4 opacity-30 absolute w-[140px] rounded-2xl h-[40px] -left-1 top-9'></span>
            Développeur <br /> Full Stack
          </h3>
          <p className='text-justify my-10 lg:w-1/2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tempus eros, at interdum risus. Sed risus sapien, tincidunt quis
            imperdiet eu, lobortis eget libero. Mauris commodo id purus id
            sodales.
          </p>
        </div>
        <div className='flex flex-col justify-around items-center'>
          <ul className='flex flex-col justify-around w-full h-full px-10'>
            <li className='flex flex-row justify-between border-b-[1px] border-b-dark dark:border-b-white text-2xl w-full lg:mb-0 mb-5'>
              Email
              <span className='flex items-center justify-center'>
                ugolin@olle.pro <ImArrowUpRight2 className='pl-2' />
              </span>
            </li>
            <li className='flex flex-row justify-between border-b-[1px] border-b-dark dark:border-b-white text-2xl w-full lg:mb-0 mb-5'>
              Email
              <span className='flex items-center justify-center'>
                ugolin@olle.pro <ImArrowUpRight2 className='pl-2' />
              </span>
            </li>
            <li className='flex flex-row justify-between border-b-[1px] border-b-dark dark:border-b-white text-2xl w-full lg:mb-0 mb-5'>
              Email
              <span className='flex items-center justify-center'>
                ugolin@olle.pro <ImArrowUpRight2 className='pl-2' />
              </span>
            </li>
            <li className='flex flex-row justify-between border-b-[1px] border-b-dark dark:border-b-white text-2xl w-full lg:mb-0 mb-5'>
              Email
              <span className='flex items-center justify-center'>
                ugolin@olle.pro <ImArrowUpRight2 className='pl-2' />
              </span>
            </li>
            <li className='flex flex-row justify-between border-b-[1px] border-b-dark dark:border-b-white text-2xl w-full lg:mb-0 mb-5'>
              Email
              <span className='flex items-center justify-center'>
                ugolin@olle.pro <ImArrowUpRight2 className='pl-2' />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
