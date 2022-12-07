import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

export function Slider() {
  const slideText = [
    'Optimisation de Wordpress',
    'E-Commerce',
    'Site vitrine',
    'Solution métier',
    'Intégration',
    'Maquettage',
    'Application mobile',
    'Pro du bug',
  ];

  return (
    <div className="border-t-[1px] border-b-[1px] border-dark py-10 my-20">
      {/*<Marquee direction="left" speed={60} gradient={false} className="w-full">*/}
      {/*  {slideText.map((text, index) => {*/}
      {/*    return (*/}
      {/*      <React.Fragment key={index}>*/}
      {/*        <p className="text-2xl mx-16">{text}</p>*/}
      {/*        <BsCircleFill className="text-dark opacity-20" />*/}
      {/*      </React.Fragment>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</Marquee>*/}
    </div>
  );
}
