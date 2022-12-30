import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

import Navbar from '@/components/Navbar';
import { ContactButton } from '@/components/ContactButton';
import { ThemeProvider } from '@/libs/theme';
import { GithubProvider } from '@/libs/github';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function Article({ children, title }) {
  const t = `${title} - Ugolin Ollé`;

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <div>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}

        <ThemeProvider>
          <GithubProvider>
            <Navbar />
            <ContactButton />
            <div className="bg-white text-dark dark:bg-dark dark:text-white transition-all w-full pt-[92px]">
              {children}
            </div>
          </GithubProvider>
        </ThemeProvider>
      </div>
    </motion.article>
  );
}
