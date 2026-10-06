import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = '',
  showAsterisk = false,
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const words = text.split(' ').filter(Boolean);

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap items-baseline justify-center gap-x-3 select-none ${className}`}
      style={style}
    >
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;

        return (
          <motion.span
            key={index}
            className="inline-block relative whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {isLastWord && showAsterisk && (
              <span className="absolute top-[-0.15em] -right-[0.35em] text-[0.45em] text-primary select-none pointer-events-none">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};
