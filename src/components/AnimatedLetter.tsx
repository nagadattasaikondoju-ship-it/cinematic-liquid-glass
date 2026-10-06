import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ProgressiveTextProps {
  text: string;
  className?: string;
}

interface SingleCharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const SingleChar: React.FC<SingleCharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ['#6b6960', '#F3F1E2']);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline transition-colors duration-75"
    >
      {char}
    </motion.span>
  );
};

export const ProgressiveTextReveal: React.FC<ProgressiveTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`${className} select-none`}>
      {text.split('').map((char, index) => {
        const charProgress = index / totalChars;
        const start = Math.max(0, charProgress - 0.05);
        const end = Math.min(1, charProgress + 0.04);

        return (
          <SingleChar
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
