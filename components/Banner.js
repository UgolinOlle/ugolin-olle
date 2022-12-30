import React from 'react';
import Textra from 'react-textra';

export const Banner = () => {
  const slideText = [
    'Trouvez la solution à vos projets.',
    'pimpez votre site !',
    'Customisez votre site de A à Z.',
  ];

  return (
    <div
      className="flex items-center justify-center my-20 w-full lg:h-[220px] h-[100px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(/mesh-3.png)` }}
    >
      <Textra
        effect="topDown"
        data={slideText}
        duration={200}
        stopduration={2000}
        className="dark:text-white lg:text-4xl text-[18px] px-2 font-poppins"
      />
    </div>
  );
};
