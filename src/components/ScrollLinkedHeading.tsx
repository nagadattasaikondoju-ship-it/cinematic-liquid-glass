import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isItalic?: boolean;
}

const ScrollWord: React.FC<ScrollWordProps> = ({ word, progress, range, isItalic = false }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ['#4a4842', isItalic ? '#DEDBC8' : '#FFFFFF']);
  const y = useTransform(progress, range, [15, 0]);

  return (
    <motion.span
      style={{ opacity, color, y }}
      className={`inline-block mr-[0.28em] ${isItalic ? 'font-serif italic text-primary' : ''}`}
    >
      {word}
    </motion.span>
  );
};

interface ScrollLinkedHeadingProps {
  line1: string;
  line2Italic: string;
  line3: string;
  className?: string;
}

export const ScrollLinkedHeading: React.FC<ScrollLinkedHeadingProps> = ({
  line1,
  line2Italic,
  line3,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words1 = line1.split(' ');
  const words2 = line2Italic.split(' ');
  const words3 = line3.split(' ');

  const totalWords = words1.length + words2.length + words3.length;
  let wordIndex = 0;

  return (
    <div ref={containerRef} className={`w-full max-w-4xl mx-auto text-center leading-[1.05] ${className}`}>
      {/* Line 1 */}
      <div className="flex flex-wrap justify-center items-center text-center">
        {words1.map((w, idx) => {
          const current = wordIndex++;
          const start = Math.max(0, current / totalWords - 0.05);
          const end = Math.min(1, (current + 1) / totalWords + 0.05);
          return (
            <ScrollWord
              key={`l1_${idx}`}
              word={w}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </div>

      {/* Line 2 (Italic Accent) */}
      <div className="flex flex-wrap justify-center items-center text-center my-1 sm:my-2">
        {words2.map((w, idx) => {
          const current = wordIndex++;
          const start = Math.max(0, current / totalWords - 0.05);
          const end = Math.min(1, (current + 1) / totalWords + 0.05);
          return (
            <ScrollWord
              key={`l2_${idx}`}
              word={w}
              progress={scrollYProgress}
              range={[start, end]}
              isItalic={true}
            />
          );
        })}
      </div>

      {/* Line 3 */}
      <div className="flex flex-wrap justify-center items-center text-center">
        {words3.map((w, idx) => {
          const current = wordIndex++;
          const start = Math.max(0, current / totalWords - 0.05);
          const end = Math.min(1, (current + 1) / totalWords + 0.05);
          return (
            <ScrollWord
              key={`l3_${idx}`}
              word={w}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </div>
    </div>
  );
};
