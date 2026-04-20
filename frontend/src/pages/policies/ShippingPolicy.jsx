import { Link } from 'react-router-dom';
import { ArrowLeft, Truck } from 'lucide-react';
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
          <div style={{ width: '5px', height: '5px', background: 'var(--emerald)', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ShippingPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Link to="/" className="btn btn-ghost" style={{ marginBottom: '2.5rem', display: 'inline-flex' }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-lg)', background: 'var(--emerald-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Truck size={18} style={{ color: 'var(--emerald)' }} />
        </div>
        <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Logistics</span>
      </div>

      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem', letterSpacing: '-0.04em' }}>
        Shipping <span className="font-serif" style={{ color: 'var(--emerald)' }}>Policy</span>
      </h1>
      <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.7' }}>
        Global logistics with precision and care.
      </p>

      <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-3xl)' }}>
        <Reveal>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            PAYUMPULI EXPORTS & IMPORTS is committed to delivering your agricultural products safely, on time, and in optimal condition across the globe. Our logistics infrastructure spans major ports and transit corridors.
          </p>
        </Reveal>

        <PolicySection title="Domestic Shipping">
          <PolicyList items={[
            'Orders dispatched within 3–5 business days post-confirmation',
            'Pan-India delivery via premium courier partners',
            'Real-time tracking provided for all shipments',
            'Free shipping on orders above ₹5,000'
          ]} />
        </PolicySection>

        <PolicySection title="International Shipping">
          <PolicyList items={[
            'Export shipments processed within 7–14 business days',
            'Full compliance with destination country import regulations',
            'Phytosanitary certificates included with all consignments',
            'Customs duties and import taxes are buyer\'s responsibility'
          ]} />
        </PolicySection>

        <PolicySection title="Packaging Standards">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', lineHeight: '1.7' }}>
            All products are sealed in food-grade, moisture-resistant packaging designed for long-haul transit. Temperature-sensitive items receive insulated container packaging.
          </p>
        </PolicySection>

        <p style={{ marginTop: '2.5rem', color: 'var(--text-muted)', fontSize: '0.78rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
          Last Revised: August 2026 · © 2026 PAYUMPULI EXPORTS & IMPORTS
        </p>
      </div>
    </motion.div>
  );
}
