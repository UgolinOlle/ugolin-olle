import React, { useRef, useState } from 'react';
import { spring, useVariants } from '../libs/cursor';
import { motion } from 'framer-motion';
import { Section } from '../components/section';
import { Button } from '../components/button';

export default function Services() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const ref = useRef(null);
  const variants = useVariants(ref);

  const resetCursor = () => {
    setCursorText('');
    setCursorVariant('default');
  };

  const mailCursor = () => {
    setCursorText('✉️');
    setCursorVariant('network');
  };

  return <div className='flex flex-col items-center w-full h-full' ref={ref}>
    {/* Cursor */}
    <motion.div
      variants={variants}
      className='circle'
      animate={cursorVariant}
      transition={spring}
    >
      <span className='cursorText'>{cursorText}</span>
    </motion.div>

    {/*  Services */}
    <Section direction='flex-col' margin='mt-10 mb-20'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-2 w-screen h-screen px-5'>
        <div
          className='flex flex-col items-center justify-center w-full h-full bg-[url(../public/mesh-5.png)] bg-no-repeat bg-cover rounded-[50px]'>
          <h2 className='text-6xl font-bold'>🚀 Site sur mesure <br /> ⚙️ Solution métier</h2>
          <p className='py-5 text-[22px] font-poppins'>Blogs - Site vitrine sur mesure - E-commerce.</p>
          <Button link='mailto:ugolin@olle.pro?subject=Site ou Solution sur mesure - [NOM ENTREPRISE]' text='Go !'
                  mouseOver={mailCursor} mouseLeave={resetCursor} />
        </div>
        <div className='w-full h-full lg:grid grid-cols-2 lg:gap-2'>
          <div
            className='flex flex-col items-center justify-center col-span-2 bg-[url(../public/mesh-4.png)] bg-no-repeat bg-cover rounded-[50px]'>
            <h2 className='text-5xl font-bold'>📱 Application mobile</h2>
            <p className='py-5 text-[22px] font-poppins'>Réalisation d&apos;application mobile sur iOs et Android.</p>
            <Button link='mailto:ugolin@olle.pro?subject=Application mobile - [NOM ENTREPRISE]' text='Go !'
                    mouseOver={mailCursor} mouseLeave={resetCursor} />
          </div>
          <div
            className='flex flex-col items-center justify-center bg-[url(../public/mesh-2.png)] bg-no-repeat bg-cover rounded-[50px]'>
            <h2 className='text-4xl font-bold'>🧱 Intégration web</h2>
            <p className='py-5 text-[18px] font-poppins px-5 text-center'>Intégration de maquette web pour votre site ou
              application.</p>
            <Button link='mailto:ugolin@olle.pro?Subject=Intégration web - [NOM ENTREPRISE]' text='Go !'
                    mouseOver={mailCursor} mouseLeave={resetCursor} />
          </div>
          <div
            className='flex flex-col items-center justify-center bg-[url(../public/mesh.png)] bg-no-repeat bg-cover rounded-[50px]'>
            <h2 className='text-4xl font-bold'>🐛 Autres</h2>
            <p className='py-5 text-[18px] font-poppins px-5 text-center'>Fixation de bugs sur vos sites ou
              maintenances.</p>
            <Button link='mailto:ugolin@olle.pro?Subject=Autres - [NOM ENTREPRISE]' text='Go !' mouseOver={mailCursor}
                    mouseLeave={resetCursor} />
          </div>
        </div>
      </div>
    </Section>
  </div>;
}
