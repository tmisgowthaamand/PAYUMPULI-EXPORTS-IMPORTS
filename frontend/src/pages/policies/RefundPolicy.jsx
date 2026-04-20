import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCcw } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '4rem', borderRadius: '32px', boxShadow: 'var(--shadow-md)', marginBottom: '5rem', border: '1px solid var(--border-color)' }}>
      <Link to="/" className="btn" style={{ marginBottom: '3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', color: 'var(--primary-color)', boxShadow: 'none' }}>
        <ArrowLeft size={16} /> Dashboard
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <RefreshCcw size={32} color="var(--primary-color)" />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)' }}>Returns & Refunds</h1>
      </div>
      
      <p style={{ fontWeight: '600', fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--secondary-hover)' }}>Commitment to Commercial Quality</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.9', color: '#1e293b' }}>
        <p style={{ fontSize: '1.1rem' }}>As an international export entity, <strong>PAYUMPULI EXPORTS & IMPORTS</strong> maintains rigorous grading standards. We strive for absolute satisfaction, but our refund protocols are dictated by the nature of perishable and commercial-grade agricultural products.</p>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Eligibility for Claims</h3>
          <p>Refunds or replacements are evaluated strictly under the following conditions:</p>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '0', marginTop: '1rem' }}>
            {['Damaged upon arrival (Photographic evidence required)', 'Incorrect product/grade dispatched compared to manifest', 'Significant weight discrepancies exceeding standard moisture loss margins'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--secondary-color)', borderRadius: '50%' }}></div>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Processing Protocol</h3>
          <p>All claims must be initiated within <strong>48 hours</strong> of physical receipt at the destination port or address. Our QA team will audit the shipment logs and grading certificates before authorizing a credit or replacement.</p>
        </section>

        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)', fontWeight: '800' }}>Initiate a Claim</h3>
          <p style={{ marginBottom: '1.5rem', fontWeight: '500' }}>Please provide your order ID and proof of damage to:</p>
          <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: '600', color: 'var(--primary-color)' }}>
            📧 <strong>payumpuli79@gmail.com</strong><br/>
            📞 +91 89402 11958
          </address>
        </div>

        <p style={{ marginTop: '3rem', color: 'var(--text-gray)', fontSize: '0.9rem', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '2rem' }}>
          © 2026 PAYUMPULI EXPORTS & IMPORTS. Precision Commercial Grading.
        </p>
      </div>
    </motion.div>
  );
}
