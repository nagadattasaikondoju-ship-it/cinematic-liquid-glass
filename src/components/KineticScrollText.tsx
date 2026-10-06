import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface KineticScrollTextProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export const KineticScrollText: React.FC<KineticScrollTextProps> = ({
  text,
  direction = 'left',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const distance = direction === 'left' ? [-100, 100] : [100, -100];
  const x = useTransform(scrollYProgress, [0, 1], distance);

  // Duplicate text 4 times for seamless continuous running line
  const repeatedText = `${text} • ${text} • ${text} • ${text}`;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-4 select-none pointer-events-none"
    >
      <motion.div
        style={{ x }}
        className={`whitespace-nowrap flex items-center gap-8 ${className}`}
      >
        <span className="inline-block tracking-tighter opacity-80">{repeatedText}</span>
      </motion.div>
    </div>
  );
};
