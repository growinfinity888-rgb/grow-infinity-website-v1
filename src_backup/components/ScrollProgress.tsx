import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(currentProgress);
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-11 h-11 bg-white border border-slate-150 rounded-full flex items-center justify-center shadow-premium hover:border-[#0F4CFF]/30 transition-colors z-50 group active:scale-95"
          id="back-to-top-progress-ring"
        >
          {/* Radial progress ring */}
          <svg className="absolute w-full h-full transform -rotate-90">
            <circle
              cx="22"
              cy="22"
              r="18"
              stroke="#E2E8F0"
              strokeWidth="2"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              stroke="#0F4CFF"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 18}
              strokeDashoffset={2 * Math.PI * 18 * (1 - progress / 100)}
            />
          </svg>
          <ArrowUp className="w-4 h-4 text-slate-700 group-hover:text-[#0F4CFF] transition-colors relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
