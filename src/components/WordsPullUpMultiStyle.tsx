import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface TextSegment {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Break down segments into a flat list of individual words while preserving styles
  let globalWordIndex = 0;
  const wordTokens = segments.flatMap((seg) => {
    const rawWords = seg.text.split(' ');
    return rawWords.map((word) => ({
      word,
      className: seg.className || '',
      style: seg.style || {},
      index: globalWordIndex++,
    }));
  });

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap justify-center items-center text-center ${className}`}
    >
      {wordTokens.map((item) => (
        <motion.span
          key={item.index}
          className={`inline-block mr-[0.28em] ${item.className}`}
          style={item.style}
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 24, filter: 'blur(6px)' }
          }
          transition={{
            duration: 0.8,
            delay: item.index * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
};
