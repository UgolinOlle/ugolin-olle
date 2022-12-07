import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Main from '../components/layouts/main';
import '../styles/supreme.css';
import '../styles/globals.css';

function Portfolio({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </AnimatePresence>
  );
}

export default Portfolio;
