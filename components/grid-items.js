import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const WorkItem = ({ children, id, title, thumbnail }) => {
  return (
    <div className="w-full px-5 lg:px-0 py-10">
      <Link href={`/works/${id}`} passHref scroll={false}>
        <div className="cursor-pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="rounded-3xl w-full lg:h-[400px]"
            placeholder="blur"
          />
          <h1 className="mt-2 text-[24px]">{title}</h1>
          <p className="text-[14px] font-poppins">{children}</p>
        </div>
      </Link>
    </div>
  );
};
