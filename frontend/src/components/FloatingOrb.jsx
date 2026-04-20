import { motion } from 'framer-motion';

/**
 * Decorative floating gradient orb for ambient page backgrounds.
 */
export default function FloatingOrb({ size = '200px', color, top, left, right, bottom, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(40px)',
      }}
    />
  );
}
