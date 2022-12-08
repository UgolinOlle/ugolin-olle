import React from 'react';
import Head from 'next/head';

import Navbar from '../navbar';
import { ThemeProvider } from '../../libs/theme';
import { GithubProvider } from '../../libs/github';
import Footer from '../footer';
import { ContactButton } from '../contact-button';

const Main = ({ children, title }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ugolin's homepage" />
        <meta name="author" content="Ugolin Ollé" />
        <meta name="author" content="ugolin-olle" />

        <link
          rel="shortcut icon"
          href="../public/favicon.ico"
          type="image/x-icon"
        />

        <title>{title} - Ugolin Ollé</title>
      </Head>

      <ThemeProvider>
        <GithubProvider>
          <Navbar />
          <ContactButton />

          <div className="bg-white text-dark dark:bg-dark dark:text-white transition-all w-full pt-[68px]">
            {children}
          </div>

          <Footer />
        </GithubProvider>
      </ThemeProvider>
    </div>
  );
};

export default Main;
