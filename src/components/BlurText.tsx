import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className = '', style = {} }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const words = text.split(' ').filter(Boolean);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap justify-center items-center text-center gap-x-3 gap-y-1 ${className}`}
      style={style}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-nowrap"
          initial={{ filter: 'blur(12px)', opacity: 0, y: 35 }}
          animate={
            isInView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(12px)', opacity: 0, y: 35 }
          }
          transition={{
            duration: 0.75,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
