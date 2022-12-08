import React, { useState, useRef } from 'react';
import { ImArrowUpRight2 } from 'react-icons/im';
import {
  FaLinkedinIn,
  FaGithub,
  FaPlus,
  FaReact,
  FaPhp,
  FaSymfony,
  FaPython,
  FaLinux,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiMongodb,
  SiNuxtdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import Image from 'next/image';

import { useVariants, spring } from '../libs/cursor';
import { Banner } from '../components/banner';
import { Section } from '../components/section';
import { Button } from '../components/button';
import { Commit, Repos } from '../components/github';
import { WorkItem } from '../components/grid-items';
import passwordCLI from '../public/Password CLI.png';
import freelanceCRM from '../public/Freelance CRM.png';
import profile from '../public/profile.png';
import Main from '../components/layouts/main';

export default function Home() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const ref = useRef(null);
  const variants = useVariants(ref);

  const resetCursor = () => {
    setCursorText('');
    setCursorVariant('default');
  };

  const meCursor = () => {
    setCursorText(
      <Image
        src={profile}
        alt="This is a test"
        className="rounded-full h-[130px] w-[130px]"
      />
    );
    setCursorVariant('avatar');
  };

  const devCursor = () => {
    setCursorText('💻');
    setCursorVariant('dev');
  };

  const projectCursor = () => {
    setCursorText('🚀');
    setCursorVariant('project');
  };

  const networkCursor = () => {
    setCursorText('🔗');
    setCursorVariant('network');
  };

  const githubCursor = () => {
    setCursorText(<FaGithub className="text-[54px]" />);
    setCursorVariant('github');
  };

  return (
    <Main title="Home">
      <div className="flex flex-col items-center" ref={ref}>
        {/* Cursor */}
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>

        {/* Presentation block */}
        <Section direction="flex-row" margin="mt-28" delay={0.1}>
          <div className="flex flex-col lg:items-start items-center lg:p-9 pt-3.5 lg:mr-14">
            <h1
              className="md:text-[98px] text-[54px] font-extrabold"
              onMouseEnter={meCursor}
              onMouseLeave={resetCursor}
            >
              Ugolin Ollé
            </h1>
            <h2
              className="text-4xl md:text-center"
              onMouseEnter={devCursor}
              onMouseLeave={resetCursor}
            >
              Developer Full Stack
            </h2>
          </div>
          <div className="flex flex-col lg:justify-center md:items-center justify-around pt-8 lg:ml-14">
            <p className="md:w-[530px] text-justify p-6 font-poppins">
              Hello! Je suis développeur Full Stack depuis pratiquement 2 ans
              maintenant. Je suis actuellement localisé en Colombie (et oui ça
              fait loin ahah). En tant que freelance, je vous donne la solution
              à vos projet.
            </p>
            <div className="flex flex-col md:flex-row lg:justify-between md:justify-around w-full">
              <Button mouseOver={projectCursor} mouseLeave={resetCursor}>
                Lancer votre projet
                <div className="pl-2">
                  <ImArrowUpRight2 />
                </div>
              </Button>
              <ul className="flex items-center justify-around sm:pd">
                <li
                  className="rounded-full p-3 text-[20px] md:text-[28px] border-2 border-[#23272a] lg:mr-3 md:mr-5 text-black dark:border-white dark:text-white"
                  onMouseEnter={networkCursor}
                  onMouseLeave={resetCursor}
                >
                  <a
                    href="https://www.linkedin.com/in/ugolin-oll%C3%A9-5b6430221/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li
                  className="rounded-full p-3 text-[20px] md:text-[28px] border-2 border-[#23272a] lg:mr-3 md:mr-5 text-black dark:border-white dark:text-white"
                  onMouseEnter={githubCursor}
                  onMouseLeave={resetCursor}
                >
                  <a
                    href="https://github.com/UgolinOlle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li
                  className="rounded-full p-3 text-[20px] md:text-[28px] border-2 border-[#23272a] lg:mr-3 md:mr-5 text-black dark:border-white dark:text-white"
                  onMouseEnter={networkCursor}
                  onMouseLeave={resetCursor}
                >
                  <FaLinkedinIn />
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Banner */}
        <Banner />

        {/* Stats block */}
        <Section direction="flex-col" margin="mb-20" delay={1}>
          <div className="flex flex-col lg:flex-row justify-around lg:my-10 lg:mx-10">
            <div className="rounded-3xl shadow-2xl lg:w-1/2 px-10 py-20 mb-10 md:mb-0 dark:bg-sdark bg-cover">
              <h1 className="md:text-[48px] text-4xl font-extrabold text-center dark:text-white">
                En quelques chiffres
              </h1>
              <div className="flex flex-col pt-5 lg:py-16">
                <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-6 mb-7">
                  <Commit />
                  <Repos />
                </div>
                <div className="flex item-center flex-col justify-center relative bg-yellow dark:text-white p-9 rounded-3xl shadow-xl hover:scale-110 transition-all bg-[url(../public/mesh-3.png)] bg-no-repeat">
                  <FaPlus className="text-[26px] absolute right-7 top-3" />
                  <p className="text-8xl text-bold text-center">9/10</p>
                  <h2 className="text-bold text-2xl text-center font-poppins">
                    Avis client
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between lg:ml-10 sm:mt-10 lg:mt-0">
              <div className="rounded-3xl shadow-2xl h-2/3 text-black p-16 w-full dark:bg-sdark mb-10">
                <h1 className="md:text-[48px] text-[54px] font-extrabold text-center dark:text-white">
                  Stacks
                </h1>
                <ul className="flex flex-wrap py-9 text-[50px] dark:text-white">
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-blue transition-all">
                    <FaReact />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-blue transition-all">
                    <FaPhp />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-blue transition-all">
                    <FaSymfony />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-green transition-all">
                    <SiNuxtdotjs />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-blue transition-all">
                    <SiTailwindcss />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-yellow transition-all">
                    <SiJavascript />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-blue transition-all">
                    <SiTypescript />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-yellow transition-all">
                    <FaPython />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-yellow transition-all">
                    <FaLinux />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-red transition-all">
                    <DiGit />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-green transition-all">
                    <SiMongodb />
                  </li>
                  <li className="flex items-center justify-center flex-[23%] my-5 hover:text-blue transition-all">
                    <SiPostgresql />
                  </li>
                </ul>
              </div>
              <div className="rounded-full shadow-2xl h-1/4 text-black lg:p-16 p-12 md:mt-10 lg:mt-0 w-full bg-[url(../public/mesh-2.png)] dark:bg-[url(../public/mesh.png)] hover:bg-[url(../public/mesh.png)] dark:hover:bg-[url(../public/mesh-2.png)] bg-no-repeat bg-cover dark:shadow-blue-500/50 transition-all" />
            </div>
          </div>
        </Section>

        {/* About block */}
        <Section direction="flex-col" margin="mb-20" delay={2}>
          <div className="flex lg:flex-row flex-col items-center justify-between w-full mb-15 lg:px-10">
            <h2 className="text-6xl font-bold lg:w-1/4 mb-5">Qui je suis ?</h2>
            <div className="rounded-full md:hidden lg:block shadow-2xl lg:h-[70px] h-[20px] text-black w-2/3 bg-[url(../public/mesh-2.png)] dark:bg-[url(../public/mesh.png)] hover:bg-[url(../public/mesh.png)] dark:hover:bg-[url(../public/mesh-2.png)] bg-no-repeat bg-cover dark:shadow-blue-500/50 transition-all" />
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-20 my-20 flex flex-col px-5 lg:px-10">
            <p className="text-justify mb-5 font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vitae tempus eros, at interdum risus. Sed risus sapien, tincidunt
              quis imperdiet eu, lobortis eget libero. Mauris commodo id purus
              id sodales.
            </p>
            <p className="text-justify mb-5 font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vitae tempus eros, at interdum risus. Sed risus sapien, tincidunt
              quis imperdiet eu, lobortis eget libero. Mauris commodo id purus
              id sodales.
            </p>
            <p className="text-justify mb-5 font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vitae tempus eros, at interdum risus. Sed risus sapien, tincidunt
              quis imperdiet eu, lobortis eget libero. Mauris commodo id purus
              id sodales.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <h2 className="lg:text-7xl text-3xl w-full font-bold lg:px-0 px-5 text-center lg:w-2/3">
              Let&apos;s go ? On va discuter de votre projet ?
            </h2>
            <Image
              src={profile}
              alt="Photo de profile"
              className="lg:w-1/4 w-2/4 lg:mt-0 mt-10"
            />
          </div>
          <Button link="mailto:ugolin@olle.pro" text="On tchat ?" />
        </Section>

        {/* Works block */}
        <Section margin="lg:mt-0 mt-20 mb-20" direction="flex-col" delay={3}>
          <h3 className="text-dark dark:text-white text-6xl font-bold lg:mb-10">
            Mes travaux
          </h3>
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col justify-around mt-10 md:mx-10 lg:mx-0">
            <WorkItem
              id="password-cli"
              title="Password CLI"
              thumbnail={passwordCLI}
            >
              Simple application react qui permet de générer des mots de passe
              complet.
            </WorkItem>
            <WorkItem
              id="freelance-crm"
              title="Freelance CRM"
              thumbnail={freelanceCRM}
            >
              Création d&apos;une application CRM pour freelance pour gérer son
              entreprise.
            </WorkItem>
          </div>
        </Section>
      </div>
    </Main>
  );
}
