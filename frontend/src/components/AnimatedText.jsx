import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Animated Text component for word-by-word reveal.
 * Gives a premium, Awwwards-style typographic reveal effect.
 */
export default function AnimatedText({ text, el: Wrapper = 'p', className = '', style = {}, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.25em', ...style }} className={className}>
      <motion.span
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.25em' }}
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
