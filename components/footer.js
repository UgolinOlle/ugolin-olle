import React from 'react';
import Image from 'next/image';
import { ImArrowUpRight2 } from 'react-icons/im';

import profile from '../public/profile.png';

export default function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col justify-between w-full bg-white dark:bg-dark dark:text-white border-t-dark border-t-[1px]">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 flex lg:flex-row flex-col justify-between w-full pt-5">
        <div className="flex flex-col justify-around px-10 relative">
          <Image
            src={profile}
            alt="Photo de profile"
            className="absolute right-1 w-1/4 top-0 hidden lg:block"
          />
          <h2 className="text-6xl">Ugolin Ollé</h2>
          <h3 className="text-3xl mt-3 relative">
            <span className="bg-red p-4 opacity-30 absolute w-[140px] rounded-2xl h-[40px] -left-1 top-9"></span>
            Développeur <br /> Full Stack
          </h3>
          <p className="text-justify my-10 lg:w-2/3">
            Hello! Je suis développeur Full Stack depuis pratiquement 2 ans
            maintenant. Je suis actuellement localisé en Colombie (et oui ça
            fait loin ahah). En tant que freelance, je vous donne la solution à
            vos projet. Je vous guide tout au long de notre collaboration et
            vous aide à faire vos choix. Je n’impose pas mon idée, j’améliore la
            votre!
          </p>
        </div>
        <div className="flex flex-col justify-around items-center">
          <ul className="flex flex-col justify-start w-full h-full px-10">
            <li className="flex flex-row justify-between border-b-[1px] border-b-dark dark:border-b-white text-2xl w-full mb-10">
              Email
              <a href="mailto:ugolin@olle.pro">
                <span className="flex items-center justify-center">
                  ugolin@olle.pro <ImArrowUpRight2 className="pl-2" />
                </span>
              </a>
            </li>
            <li className="flex flex-row justify-between border-b-[1px] border-b-dark dark:border-b-white text-2xl w-full lg:mb-0 mb-5">
              Linkedin
              <a
                href="https://www.linkedin.com/in/ugolin-oll%C3%A9-5b6430221/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center justify-center">
                  @Ugolin Ollé
                  <ImArrowUpRight2 className="pl-2" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
