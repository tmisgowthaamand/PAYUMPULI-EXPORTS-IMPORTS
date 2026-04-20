import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function PolicySection({ title, children }) {
  return (
    <Reveal>
      <section style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.02em', paddingBottom: '0.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)' }}>{title}</h3>
        {children}
      </section>
    </Reveal>
  );
}

function PolicyList({ items }) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', lineHeight: '1.6' }}>
          <div style={{ width: '5px', height: '5px', background: 'var(--rose)', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function RefundPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Link to="/" className="btn btn-ghost" style={{ marginBottom: '2.5rem', display: 'inline-flex' }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-lg)', background: 'rgba(225,29,72,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <RotateCcw size={18} style={{ color: 'var(--rose)' }} />
        </div>
        <span className="badge" style={{ background: 'rgba(225,29,72,0.06)', borderColor: 'rgba(225,29,72,0.15)', color: 'var(--rose)', fontSize: '0.65rem' }}>Returns</span>
      </div>

      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem', letterSpacing: '-0.04em' }}>
        Refund <span className="font-serif" style={{ color: 'var(--rose)' }}>Policy</span>
      </h1>
      <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.7' }}>
        Fair returns for your peace of mind.
      </p>

      <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-3xl)' }}>
        <Reveal>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            We at PAYUMPULI EXPORTS & IMPORTS stand behind the quality of every product. If a product doesn't meet the assured export grade standards, we provide a transparent and fair resolution process.
          </p>
        </Reveal>

        <PolicySection title="Eligibility for Refund">
          <PolicyList items={[
            'Product received is damaged, spoiled, or not as described',
            'Claim must be initiated within 48 hours of delivery receipt',
            'Photographic evidence of the issue is required',
            'Original packaging must be retained for inspection'
          ]} />
        </PolicySection>

        <PolicySection title="Refund Process">
          <PolicyList items={[
            'Contact our trade desk via email or phone within 48 hours',
            'Our quality assurance team will review within 3 business days',
            'Approved refunds are processed within 7–10 business days',
            'Refund is issued to the original payment method'
          ]} />
        </PolicySection>

        <PolicySection title="Non-Refundable Items">
          <PolicyList items={[
            'Custom-graded bulk export orders (above 50kg)',
            'Products altered or mishandled post-delivery',
            'Items beyond the 48-hour claim window'
          ]} />
        </PolicySection>

        <p style={{ marginTop: '2.5rem', color: 'var(--text-muted)', fontSize: '0.78rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
          Last Revised: August 2026 · © 2026 PAYUMPULI EXPORTS & IMPORTS
        </p>
      </div>
    </motion.div>
  );
}
