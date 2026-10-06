import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-[#DEDBC8] via-white to-[#DEDBC8] origin-left shadow-[0_0_12px_rgba(222,219,200,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};
