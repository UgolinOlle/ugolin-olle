import React from 'react';
import { FiMail } from 'react-icons/fi';

export const ContactButton = () => {
  return (
    <div className="z-10 opacity-70 hover:opacity-100 transition-all flex items-center justify-center text-[34px] w-[80px] h-[80px] rounded-full fixed bottom-5 right-3 bg-dark dark:bg-white text-white dark:text-dark">
      <a href="mailto:ugolin@olle.pro">
        <FiMail />
      </a>
    </div>
  );
};
