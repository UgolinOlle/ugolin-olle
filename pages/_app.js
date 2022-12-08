import React from 'react';
import { AnimatePresence } from 'framer-motion';

import '../styles/supreme.css';
import '../styles/globals.css';

function Portfolio({ Component, pageProps }) {
  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default Portfolio;
