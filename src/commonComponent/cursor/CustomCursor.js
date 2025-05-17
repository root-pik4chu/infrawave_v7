'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
  className="fixed top-0 left-0 w-3 h-3 bg-[#d7d7d7] rounded-full pointer-events-none z-[9999] mix-blend-difference"
  style={{
    translateX: springX,
    translateY: springY,
  }}
/>

  );
}
