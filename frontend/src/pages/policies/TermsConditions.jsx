import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
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
          <div style={{ width: '5px', height: '5px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsConditions() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Link to="/" className="btn btn-ghost" style={{ marginBottom: '2.5rem', display: 'inline-flex' }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-lg)', background: 'var(--gold-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FileText size={18} style={{ color: 'var(--gold)' }} />
        </div>
        <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>Legal</span>
      </div>

      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem', letterSpacing: '-0.04em' }}>
        Terms & <span className="font-serif" style={{ color: 'var(--gold)' }}>Conditions</span>
      </h1>
      <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.7' }}>
        Governing terms for international trade engagement.
      </p>

      <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-3xl)' }}>
        <Reveal>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            By engaging with PAYUMPULI EXPORTS & IMPORTS through this platform, you agree to the following terms and conditions that govern our commercial relationship and trade operations.
          </p>
        </Reveal>

        <PolicySection title="Acceptance of Terms">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', lineHeight: '1.7' }}>
            By accessing and using this trade portal, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
          </p>
        </PolicySection>

        <PolicySection title="Product Information">
          <PolicyList items={[
            'Product images are representative and may vary in color and texture',
            'Prices are subject to market fluctuations and may change without prior notice',
            'All weights and measurements are approximate and within trade tolerance',
            'Grade certifications are subject to batch-level verification'
          ]} />
        </PolicySection>

        <PolicySection title="Order & Payment">
          <PolicyList items={[
            'Orders are confirmed only upon successful payment verification',
            'We reserve the right to cancel orders due to stock unavailability',
            'Bulk orders may require advance payment or letter of credit',
            'All prices are in Indian Rupees (INR) unless otherwise specified'
          ]} />
        </PolicySection>

        <PolicySection title="Limitation of Liability">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', lineHeight: '1.7' }}>
            PAYUMPULI EXPORTS & IMPORTS shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services beyond the value of the specific transaction.
          </p>
        </PolicySection>

        <PolicySection title="Governing Law">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', lineHeight: '1.7' }}>
            These terms are governed by the laws of India, with jurisdiction in the courts of Ramanathapuram, Tamil Nadu.
          </p>
        </PolicySection>

        <p style={{ marginTop: '2.5rem', color: 'var(--text-muted)', fontSize: '0.78rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
          Last Revised: August 2026 · © 2026 PAYUMPULI EXPORTS & IMPORTS
        </p>
      </div>
    </motion.div>
  );
}
