import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { spring, useVariants } from '@/libs/cursor';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import Layout from '@/components/layouts/Main';

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

  return (
    <Layout title="Services">
      <div className="flex flex-col items-center w-full h-full" ref={ref}>
        {/* Cursor */}
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>

        {/* Services */}
        <Section direction="flex-col" margin="mt-20 mb-20" delay={0.1}>
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col justify-around items-center w-full h-full px-5">
            <div
              className="flex flex-col items-center justify-center w-full h-full bg-no-repeat bg-cover rounded-[50px]"
              style={{ backgroundImage: `url(/mesh-5.png)` }}
            >
              <h2 className="lg:text-6xl text-4xl font-bold pt-5 lg:pt-0">
                🚀 Site sur mesure <br /> ⚙️ Solution métier
              </h2>
              <p className="py-5 px-5 lg:px-0 lg:text-[22px] font-poppins">
                Blogs - Site vitrine sur mesure - E-commerce.
              </p>
              <Button
                link="mailto:ugolin@olle.pro?subject=Site ou Solution sur mesure - [NOM ENTREPRISE]"
                text="Go !"
                mouseOver={mailCursor}
                mouseLeave={resetCursor}
              />
            </div>
            <div className="w-full h-full flex flex-col justify-around items-center lg:grid lg:grid-cols-2 lg:gap-10 mt-10 lg:mt-0">
              <div
                className="flex flex-col items-center justify-center lg:mb-0 mb-8 lg:col-span-2 bg-no-repeat bg-cover rounded-[50px] w-full"
                style={{ backgroundImage: `url(/mesh-4.png)` }}
              >
                <h2 className="lg:text-5xl text-4xl font-bold pt-5 text-center">
                  📱 Application mobile
                </h2>
                <p className="py-5 px-5 lg:px-0 lg:text-[22px] font-poppins">
                  Réalisation d&apos;application mobile sur iOs et Android.
                </p>
                <Button
                  link="mailto:ugolin@olle.pro?subject=Application mobile - [NOM ENTREPRISE]"
                  text="Go !"
                  mouseOver={mailCursor}
                  mouseLeave={resetCursor}
                />
              </div>
              <div
                className="flex flex-col items-center justify-center lg:mb-0 mb-8 bg-no-repeat bg-cover rounded-[50px]"
                style={{ backgroundImage: `url(/mesh-2.png)` }}
              >
                <h2 className="text-4xl font-bold pt-5 px-2 text-center">
                  🧱 Intégration web
                </h2>
                <p className="py-5 text-[18px] font-poppins px-5 text-center">
                  Intégration de maquette web pour votre site ou application.
                </p>
                <Button
                  link="mailto:ugolin@olle.pro?Subject=Intégration web - [NOM ENTREPRISE]"
                  text="Go !"
                  mouseOver={mailCursor}
                  mouseLeave={resetCursor}
                />
              </div>
              <div
                className="flex flex-col items-center justify-center bg-no-repeat bg-cover rounded-[50px] w-full"
                style={{ backgroundImage: `url(/mesh.png)` }}
              >
                <h2 className="text-4xl font-bold pt-5">🐛 Autres</h2>
                <p className="py-5 text-[18px] font-poppins px-5 text-center">
                  Fixation de bugs sur vos sites ou maintenances.
                </p>
                <Button
                  link="mailto:ugolin@olle.pro?Subject=Autres - [NOM ENTREPRISE]"
                  text="Go !"
                  mouseOver={mailCursor}
                  mouseLeave={resetCursor}
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
