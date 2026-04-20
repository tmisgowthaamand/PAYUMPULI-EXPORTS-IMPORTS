import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

/**
 * Cinematic dark CTA banner with animated gradient mesh background.
 * Reusable across pages as a call-to-action section.
 */
export default function CTABanner({
  title = 'Ready to Source',
  titleAccent = 'Premium?',
  description = 'Connect with our trade desk for bulk orders, custom grading, and international logistics support.',
  primaryLink = '/contact',
  primaryLabel = 'Start a Dialogue',
  secondaryLink = '/products',
  secondaryLabel = 'Browse Products',
}) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <Reveal>
        <div style={{
          background: 'var(--bg-dark)', borderRadius: 'var(--radius-3xl)',
          padding: 'clamp(3rem, 6vw, 5rem)', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Animated gradient mesh */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', top: '-60%', left: '30%',
              width: '500px', height: '500px',
              background: 'conic-gradient(from 0deg, rgba(212,160,23,0.15), transparent, rgba(5,150,105,0.1), transparent, rgba(37,99,235,0.05), transparent)',
              borderRadius: '50%', pointerEvents: 'none', filter: 'blur(60px)',
            }}
          />
          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.03,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px', pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem', letterSpacing: '-0.03em',
            }}>
              {title}{' '}
              <span className="font-serif" style={{ color: 'var(--gold)' }}>{titleAccent}</span>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem',
              maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: '1.7',
            }}>
              {description}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to={primaryLink} className="btn btn-secondary btn-lg">
                  {primaryLabel} <ArrowRight size={18} />
                </Link>
              </motion.div>
              {secondaryLink && (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link to={secondaryLink} className="btn btn-lg" style={{
                    background: 'rgba(255,255,255,0.06)', color: 'white',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                  }}>
                    {secondaryLabel}
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
