import React from 'react';
import Textra from 'react-textra';

export const Banner = () => {
  const slideText = [
    'Trouver la solution à vos projets.',
    'Pimper votre site !',
    'Customizer votre site de A à Z.'
  ];

  return (
    <div className=" flex items-center justify-center my-20 w-full lg:w-11/12 lg:h-[220px] h-[100px] bg-[url(../public/mesh-3.png)] bg-no-repeat bg-cover rounded-full">
      <Textra
        effect="topDown"
        data={slideText}
        duration={200}
        stopduration={2000}
        className="dark:text-white lg:text-5xl text-[18px] px-2 font-poppins"
      />
    </div>
  );
};
