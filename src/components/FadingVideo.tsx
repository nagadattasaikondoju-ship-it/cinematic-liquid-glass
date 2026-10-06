import React, { useRef, useEffect, useState, useCallback } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
  shiftY?: string;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({
  src,
  className = '',
  style = {},
  shiftY
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const opacityRef = useRef(0);
  opacityRef.current = opacity;

  const animFrameIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const sources = Array.isArray(src) ? src : [src];
  const currentSrc = sources[currentSrcIndex] || sources[0];

  // Helper to animate opacity smoothly with requestAnimationFrame
  const animateOpacity = useCallback((targetOpacity: number, duration: number, onComplete?: () => void) => {
    if (animFrameIdRef.current !== null) {
      cancelAnimationFrame(animFrameIdRef.current);
      animFrameIdRef.current = null;
    }

    const startOpacity = opacityRef.current;
    const startTime = performance.now();

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth linear interpolation from current opacity
      const nextOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      setOpacity(nextOpacity);

      if (progress < 1) {
        animFrameIdRef.current = requestAnimationFrame(frame);
      } else {
        setOpacity(targetOpacity);
        animFrameIdRef.current = null;
        if (onComplete) onComplete();
      }
    };

    animFrameIdRef.current = requestAnimationFrame(frame);
  }, []);

  // Fade In (500ms)
  const fadeIn = useCallback(() => {
    fadingOutRef.current = false;
    animateOpacity(1, 500);
  }, [animateOpacity]);

  // Fade Out (550ms)
  const fadeOut = useCallback((onComplete?: () => void) => {
    fadingOutRef.current = true;
    animateOpacity(0, 550, onComplete);
  }, [animateOpacity]);

  // Event handlers
  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      fadeIn();
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const remainingTime = video.duration - video.currentTime;

    // When 0.55 seconds or less remain before video ends
    if (remainingTime <= 0.55 && !fadingOutRef.current) {
      fadeOut();
    }
  };

  const handleEnded = () => {
    setOpacity(0);
    fadingOutRef.current = false;

    setTimeout(() => {
      if (sources.length > 1) {
        setCurrentSrcIndex((prev) => (prev + 1) % sources.length);
      } else if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
        fadeIn();
      }
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  const combinedStyles: React.CSSProperties = {
    ...style,
    opacity,
    transform: shiftY ? `translateY(${shiftY})` : style.transform,
    transition: 'none' // Custom RAF system only
  };

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={`select-none pointer-events-none ${className}`}
      style={combinedStyles}
      autoPlay
      muted
      loop={sources.length === 1 && false} // Handled via onEnded logic
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};
