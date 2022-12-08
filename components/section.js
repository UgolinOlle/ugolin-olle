import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({
  children,
  direction = 'flex-row',
  margin = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <section
        className={`flex lg:${direction} flex-col justify-between items-center w-full ${margin} dark:bg-[#23272a]`}
      >
        {children}
      </section>
    </motion.div>
  );
};
