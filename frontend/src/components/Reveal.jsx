import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Shared reveal animation component used across all pages.
 * Supports directional entrance (up, down, left, right) with blur effect.
 */
export default function Reveal({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directionMap = {
    up:    { y: 50, x: 0 },
    down:  { y: -50, x: 0 },
    left:  { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  const { y, x } = directionMap[direction] || directionMap.up;

  const variants = {
    hidden: {
      opacity: 0,
      y,
      x,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
