import React from 'react';
import { Section } from '../components/section';
import { Button } from '../components/button';

export default function Error() {
  return (
    <Section direction='flex-col'>
      <div className='w-screen h-screen'>
        <h1 className='text-9xl mt-20 text-center'>404</h1>
        <h3 className='lg:text-5xl text-3xl px-5 text-center'>
          Il me semble que vous vous êtes perdu non ?
        </h3>
        <Button link='/'>Hop hop hop à la page d&apos;accueil</Button>
      </div>
    </Section>
  );
}
