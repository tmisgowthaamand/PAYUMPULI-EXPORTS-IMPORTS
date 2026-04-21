import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PolicySection({ title, children }) {
  return (
    <Reveal>
      <section style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ 
          fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.02em',
          paddingBottom: '0.75rem', marginBottom: '1rem',
          borderBottom: '1px solid var(--border)', color: 'var(--text-primary)'
        }}>
          {title}
        </h3>
        {children}
      </section>
    </Reveal>
  );
}

function PolicyList({ items }) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
          <div style={{ 
            width: '5px', height: '5px', background: 'var(--gold)', 
            borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' 
          }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function RefundPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      style={{ 
        maxWidth: '800px', margin: '0 auto', paddingTop: '2rem', paddingBottom: '4rem'
      }}
    >
      <Link to="/" className="btn btn-ghost" style={{ marginBottom: '2.5rem', display: 'inline-flex' }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: 'var(--radius-lg)',
          background: 'var(--sapphire-surface)', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <RefreshCw size={18} style={{ color: 'var(--sapphire)' }} />
        </div>
        <span className="badge" style={{ fontSize: '0.65rem' }}>Customer Support Matrix</span>
      </div>

      <h1 style={{ 
        fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem',
        letterSpacing: '-0.04em'
      }}>
        Cancellation & Refund <span className="font-serif" style={{ color: 'var(--sapphire)' }}>Policy</span>
      </h1>
      <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.7' }}>
        Fair, Transparent, and Customer-Friendly Process
      </p>

      <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-3xl)' }}>
        <Reveal>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            At <strong>PAYUMPULI EXPORTS & IMPORTS</strong>, customer satisfaction is our priority. While we strive to deliver high-quality goods securely sourced and transported, we understand that cancellations or refunds may occasionally be required. This policy outlines how we handle such requests in a clear and transparent manner.
          </p>
        </Reveal>

        <PolicySection title="Order Cancellations">
          <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Cancellation Window:</p>
          <PolicyList items={[
            'Orders can be cancelled within 2 hours of purchase, provided they have not yet been processed, packed, or dispatched.',
            'Once an order has been shipped or handed over to logistics, cancellations are no longer possible.',
            'To cancel an order, customers must contact our support team directly with their Order ID.'
          ]} />
        </PolicySection>

        <PolicySection title="Returns & Replacements">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>We accept returns or offer replacements in the following situations:</p>
          <PolicyList items={[
            'Product received is demonstrably damaged heavily in transit (prior to accepting delivery).',
            'Wrong items delivered.',
            'Verified quality compromises or packaging issues within operational reporting terms.'
          ]} />

          <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.25rem' }}>Conditions for Returns:</p>
          <PolicyList items={[
            'Return requests must be raised within 48 hours of delivery.',
            'The product must be unused, with all original export packaging, seals, and batch markers intact.'
          ]} />
        </PolicySection>

        <PolicySection title="Non-Returnable Items">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>We cannot accept returns or refunds for:</p>
          <PolicyList items={[
            'Products damaged due to customer misuse, negligence, or improper storage conditions post-delivery.',
            'Items without original sealed packaging or valid commercial invoice.',
            'Opened consumable bulk bags or breached seals.',
            'Custom orders, specific processing batches, or special bulk negotiated shipments.'
          ]} />
        </PolicySection>
        
        <PolicySection title="Refund Process">
          <PolicyList items={[
            'Once approved, refunds are initiated within 3–5 business days.',
            'Refunds are processed via the original payment method (Bank Transfer, Letter of Credit settlement, Card, etc.).',
            'Depending on the payment provider/bank, refunds may take 5–10 business days to reflect in your account.',
            'In certain cases, refunds may be issued as a business credit against future shipments or replacement goods based on mutual customer preference.'
          ]} />
        </PolicySection>

        <PolicySection title="Exceptions">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>Refunds/cancellations are not applicable in cases of:</p>
          <PolicyList items={[
            'Delays caused by customs, port authorities, logistics/freight providers beyond our control.',
            'Customer or agent unavailability or refusal to accept goods during scheduled delivery/port clearance.',
            'Global market commodity price fluctuations after order placement.'
          ]} />
        </PolicySection>

        <Reveal>
          <div style={{ 
            background: 'var(--bg-secondary)', padding: '2rem', 
            borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border)',
            marginTop: '1rem'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>Need Help?</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>For cancellation, return, or refund assistance, please contact:</p>
            <address style={{ 
              fontStyle: 'normal', fontSize: '0.85rem', lineHeight: '1.8',
              color: 'var(--text-secondary)', fontWeight: '500'
            }}>
              <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
              📍 7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi, Ramanathapuram - 623701, Tamil Nadu<br/>
              📞 +91 89402 11958<br/>
              📧 Email: <span style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}>payumpuliexportsimports079@gmail.com</span><br/>
              🌐 Website: www.payumpuli.shop<br/><br/>
              <em>Our team is available Mon–Sat, 10 AM – 7 PM IST.</em>
            </address>
          </div>
        </Reveal>

        <p style={{ 
          marginTop: '2.5rem', color: 'var(--text-muted)', fontSize: '0.78rem', 
          textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.5rem',
          fontFamily: 'var(--font-mono)', letterSpacing: '0.02em'
        }}>
          Last Updated: August 2026<br/>
          © 2026 PAYUMPULI EXPORTS & IMPORTS. All Rights Reserved.
        </p>
      </div>
    </motion.div>
  );
}
