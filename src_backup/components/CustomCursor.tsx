import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerSpringConfig = { damping: 15, stiffness: 300 };
  const cursorXInnerSpring = useSpring(cursorX, innerSpringConfig);
  const cursorYInnerSpring = useSpring(cursorY, innerSpringConfig);

  useEffect(() => {
    // Disable cursor on touch/mobile devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#0F4CFF]/30 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#0F4CFF] pointer-events-none z-[9999]"
        style={{
          x: cursorXInnerSpring,
          y: cursorYInnerSpring,
          translateX: 13,
          translateY: 13,
        }}
      />
    </>
  );
}
