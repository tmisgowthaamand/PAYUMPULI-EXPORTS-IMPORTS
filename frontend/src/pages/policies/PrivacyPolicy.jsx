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
        Your Privacy, Our Responsibility
      </p>

      <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-3xl)' }}>
        <Reveal>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            At <strong>PAYUMPULI EXPORTS & IMPORTS</strong>, we respect your trust and are committed to protecting your personal information. As a global exporter and supplier of premium agricultural goods, we ensure that all customer data is collected, stored, and used responsibly—aligned with the Indian IT Act and international data protection principles such as GDPR.
            <br /><br />
            This Privacy Policy explains what data we collect, how we use it, how we safeguard it, and your rights as a valued customer.
          </p>
        </Reveal>

        <PolicySection title="Information We Collect">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>When you interact with us (online store, specific requests, or queries), we may collect:</p>
          <PolicyList items={[
            'Full Name & Entity Information',
            'Contact Information (phone number, email address)',
            'Billing & Shipping Address',
            'Order & Payment Details (via secure third-party gateways)',
            'Export Requests & Certifications Information',
            'Device & Browser Data (for website analytics)',
            'Cookies & Tracking Data (for personalized experiences)'
          ]} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>We collect only the information necessary to provide reliable products and services.</p>
        </PolicySection>

        <PolicySection title="Why We Collect Your Information">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>Your data is used for legitimate business purposes, including:</p>
          <PolicyList items={[
            'Processing orders and managing global deliveries',
            'Handling customs, certification, and export-related requests',
            'Providing updates on purchases and logistical tracking queries',
            'Sending optional promotional offers and product launches (with your consent)',
            'Improving our website, products, and customer experience',
            'Meeting legal, tax, and regulatory compliance obligations'
          ]} />
        </PolicySection>

        <PolicySection title="How We Protect Your Information">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>We implement strong safeguards to ensure your data is protected at all times:</p>
          <PolicyList items={[
            'SSL Encryption for all online interactions and transactions',
            'Secure Payment Gateways – we never store card or UPI details locally',
            'Firewall & Access Controls on cloud servers',
            'Restricted Data Access – only authorized staff handle sensitive trade data',
            'Periodic Audits to maintain compliance and security standards'
          ]} />
        </PolicySection>

        <PolicySection title="Your Rights & Choices">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>You have full control of your data. At any time, you may:</p>
          <PolicyList items={[
            'Request a copy of your personal data held by us',
            'Ask for updates or corrections to your information',
            'Request deletion of your data (subject to legal trade requirements)',
            'Opt out of promotional messages (email, SMS, WhatsApp)',
            'Raise concerns about data handling practices'
          ]} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>We aim to respond to verified requests within 30 days.</p>
        </PolicySection>

        <PolicySection title="Third-Party Sharing">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>We do not sell or rent your personal information. Data may be shared only with:</p>
          <PolicyList items={[
            'Courier/logistics partners (for safe delivery of goods)',
            'Authorized border, customs, and certification bodies',
            'Payment processors (for secure transactional clearance)',
            'Government/regulatory bodies (when legally required)'
          ]} />
        </PolicySection>

        <PolicySection title="Policy Updates">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            This Privacy Policy may be updated from time to time to reflect changes in our business practices, technology, or legal requirements. The revised version will always be available on our website with the updated "Last Revised" date.
          </p>
        </PolicySection>

        <Reveal>
          <div style={{ 
            background: 'var(--bg-secondary)', padding: '2rem', 
            borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border)',
            marginTop: '1rem'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>Contact Us</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>For questions, concerns, or privacy requests, please contact:</p>
            <address style={{ 
              fontStyle: 'normal', fontSize: '0.85rem', lineHeight: '1.8',
              color: 'var(--text-secondary)', fontWeight: '500'
            }}>
              <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
              📍 7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi, Ramanathapuram - 623701, Tamil Nadu<br/>
              📞 +91 89402 11958<br/>
              📧 Email: payumpuli79@gmail.com<br/>
              🌐 Website: www.payumpuli.com
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
