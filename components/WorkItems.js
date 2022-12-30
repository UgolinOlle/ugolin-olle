import React from 'react';
import NextLink from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

export const Title = ({ children }) => {
  return (
    <div className="flex flex-col">
      <NextLink href="/works" passHref>
        <h2>Works</h2>
      </NextLink>
      <span>
        {' '}
        <BiChevronRight />{' '}
      </span>
      <div className="inline-flex text-[20px] mb-4">{children}</div>
    </div>
  );
};

export const WorkImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} className="rounded-3xl mr-2" />;
};

export const Meta = ({ children }) => {
  return <div className="bg-green opacity-30 mr-2">{children}</div>;
};
