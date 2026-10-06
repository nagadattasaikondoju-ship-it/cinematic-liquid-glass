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
  containerClassName?: string;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
  containerClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  let wordIndex = 0;

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-y-2 ${className} ${containerClassName}`}
    >
      {segments.map((seg, segIdx) => {
        const words = seg.text.split(' ').filter(Boolean);

        return (
          <div
            key={segIdx}
            className={`flex flex-wrap justify-center items-center text-center gap-x-2 gap-y-1 ${seg.className || ''}`}
            style={seg.style}
          >
            {words.map((word, wIdx) => {
              const currentIdx = wordIndex++;
              return (
                <motion.span
                  key={wIdx}
                  className="inline-block whitespace-nowrap"
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                      : { opacity: 0, y: 20, filter: 'blur(8px)' }
                  }
                  transition={{
                    duration: 0.7,
                    delay: currentIdx * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
