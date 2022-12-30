import React from 'react';
import Image from 'next/image';

import Article from '@/components/layouts/Article';
import { Section } from '@/components/Section';
import { Label } from '@/components/label';
import passwordCli from '../../public/Password CLI.png';
import { Paragraph } from '@/components/Paragraph';

export default function Work() {
  return (
    <Article title="Password CLI">
      <Section direction="flex-col">
        <div className="flex flex-col justify-center items-center w-6/12">
          <h1 className="text-6xl">Password CLI</h1>
          <div className="flex flex-row justify-around items-center mt-5 w-2/3">
            <Label text="React" />
            <Label text="Ink" />
            <Label text="Typescript" />
            <Label text="In progress" />
          </div>
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
