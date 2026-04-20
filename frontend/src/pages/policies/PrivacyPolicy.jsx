import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
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
          borderBottom: '1px solid var(--border)'
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
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.92rem', lineHeight: '1.6' }}>
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

export default function PrivacyPolicy() {
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
          <Shield size={18} style={{ color: 'var(--sapphire)' }} />
        </div>
        <span className="badge" style={{ fontSize: '0.65rem' }}>Legal Document</span>
      </div>

      <h1 style={{ 
        fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem',
        letterSpacing: '-0.04em'
      }}>
        Privacy <span className="font-serif" style={{ color: 'var(--sapphire)' }}>Policy</span>
      </h1>
      <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.7' }}>
        Your Privacy, Our Global Responsibility
      </p>

      <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-3xl)' }}>
        <Reveal>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            At <strong>PAYUMPULI EXPORTS & IMPORTS</strong>, we respect your trust and are committed to protecting your personal information. As a premier agricultural exporter, we ensure that all customer data is collected, stored, and used responsibly—aligned with the Indian IT Act and international data protection principles.
          </p>
        </Reveal>

        <PolicySection title="Information We Collect">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>When you interact with our trade portal or submit inquiries, we may process:</p>
          <PolicyList items={[
            'Entity/Individual Name',
            'Commercial Contact (Phone/Email)',
            'Export Billing & Logistics Addresses',
            'Transactional Order Data',
            'Digital Metadata for Site Analytics'
          ]} />
        </PolicySection>

        <PolicySection title="Data Integrity & Protection">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>We implement professional-grade safeguards to ensure your data is protected:</p>
          <PolicyList items={[
            'End-to-End SSL Encryption for all trade dialogues',
            'Secure Third-party Payment Gateways (No local card storage)',
            'Restricted cloud access for authorized export personnel only'
          ]} />
        </PolicySection>

        <Reveal>
          <div style={{ 
            background: 'var(--bg-secondary)', padding: '2rem', 
            borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border)',
            marginTop: '1rem'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>Inquiry & Concerns</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>For any data-related queries, please reach out:</p>
            <address style={{ 
              fontStyle: 'normal', fontSize: '0.85rem', lineHeight: '1.8',
              color: 'var(--text-secondary)', fontWeight: '500'
            }}>
              <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
              7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi<br/>
              📞 +91 89402 11958 · 📧 payumpuli79@gmail.com
            </address>
          </div>
        </Reveal>

        <p style={{ 
          marginTop: '2.5rem', color: 'var(--text-muted)', fontSize: '0.78rem', 
          textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.5rem',
          fontFamily: 'var(--font-mono)', letterSpacing: '0.02em'
        }}>
          Last Revised: August 2026 · © 2026 PAYUMPULI EXPORTS & IMPORTS
        </p>
      </div>
    </motion.div>
  );
}
