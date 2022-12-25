import React from 'react';

export const Label = ({ text }) => {
  return (
    <div className="bg-green px-5 py-2 rounded-3xl">
      <p className="text-[14px] dark:text-white text-dark">{text}</p>
    </div>
  );
};
