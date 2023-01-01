import React from 'react';
import Image from 'next/image';

import Article from '@/components/layouts/Article';
import { Section } from '@/components/Section';
import passwordCli from '../../public/Password CLI.png';
import { Paragraph } from '@/components/Paragraph';

export default function Work() {
  return (
    <Article title="Password CLI">
      <Section direction="flex-col">
        <div className="flex flex-col justify-center items-center w-6/12">
          <h1 className="text-6xl">Password CLI</h1>
        </div>
        <Image
          src={passwordCli}
          alt="Project password-cli Banner"
          className="w-[820px] h-[520px] rounded-3xl my-10"
        />
        <Paragraph></Paragraph>
      </Section>
    </Article>
  );
}
