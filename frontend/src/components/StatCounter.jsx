import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Animated stat counter with label.
 * Used in Home hero stats, About stats, and Contact panel.
 */
export default function StatCounter({ value, suffix = '', label, icon: Icon, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: 'center' }}
    >
      {Icon && (
        <div style={{
          width: '40px', height: '40px', borderRadius: 'var(--radius-lg)',
          background: color ? `${color}10` : 'var(--bg-secondary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1rem',
        }}>
          <Icon size={18} style={{ color: color || 'var(--text-primary)' }} />
        </div>
      )}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
        fontWeight: '800',
        letterSpacing: '-0.03em',
        lineHeight: 1,
        marginBottom: '0.4rem',
      }}>
        {value}{suffix}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        fontWeight: '500',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
      }}>
        {label}
      </div>
    </motion.div>
  );
}
