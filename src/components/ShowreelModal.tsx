import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden liquid-glass border border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.1)] bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 p-6 z-20 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <span className="liquid-glass px-3 py-1 rounded-full text-xs font-mono text-primary uppercase tracking-widest">
                  4K Showreel 2026
                </span>
                <span className="text-white text-sm font-light hidden sm:inline">
                  Cinematic Direction & Visual Art
                </span>
              </div>

              <button
                onClick={onClose}
                className="liquid-glass rounded-full p-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Video */}
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                loop
                playsInline
                onClick={togglePlay}
              />
            </div>

            {/* Bottom Controls Bar */}
            <div className="p-4 sm:p-6 bg-[#0a0a0a] flex items-center justify-between border-t border-white/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="liquid-glass rounded-full p-3 text-white hover:scale-105 transition-all"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  onClick={toggleMute}
                  className="liquid-glass rounded-full p-3 text-white hover:scale-105 transition-all"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <div className="text-xs text-white/60 font-mono hidden sm:block">
                  Stereo Spatial Mix &bull; Mastered at 48kHz
                </div>
              </div>

              <button
                onClick={toggleFullscreen}
                className="liquid-glass rounded-full p-3 text-white hover:scale-105 transition-all"
                title="Fullscreen"
              >
                <Maximize2 size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
