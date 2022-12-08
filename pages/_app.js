import React from 'react';
import { AnimatePresence } from 'framer-motion';

import '../styles/supreme.css';
import '../styles/globals.css';

function Portfolio({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default Portfolio;
