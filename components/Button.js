import React from 'react';
import Link from 'next/link';

export const Button = ({
  link = '',
  text,
  children,
  mouseOver,
  mouseLeave,
}) => {
  return (
    <Link
      href={link}
      passHref
      scroll={false}
      className="flex items-center justify-center"
    >
      <button
        className="flex items-center justify-center p-4 m-8 md:m-6 rounded-full border-2 border-dark text-dark dark:border-white dark:text-white hover:bg-dark hover:text-white  md:text-[20px] transition-all font-poppins"
        onMouseEnter={mouseOver}
        onMouseLeave={mouseLeave}
      >
        {text}
        {children}
      </button>
    </Link>
  );
};
