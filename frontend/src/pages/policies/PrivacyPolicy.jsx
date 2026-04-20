import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '4rem', borderRadius: '32px', boxShadow: 'var(--shadow-md)', marginBottom: '5rem', border: '1px solid var(--border-color)' }}>
      <Link to="/" className="btn" style={{ marginBottom: '3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', color: 'var(--primary-color)', boxShadow: 'none' }}>
        <ArrowLeft size={16} /> Dashboard
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Shield size={32} color="var(--primary-color)" />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)' }}>Privacy Policy</h1>
      </div>
      
      <p style={{ fontWeight: '600', fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--secondary-hover)', letterSpacing: '0.5px' }}>Your Privacy, Our Global Responsibility</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.9', color: '#1e293b' }}>
        <p style={{ fontSize: '1.1rem' }}>At <strong>PAYUMPULI EXPORTS & IMPORTS</strong>, we respect your trust and are committed to protecting your personal information. As a premier agricultural exporter, we ensure that all customer data is collected, stored, and used responsibly—aligned with the Indian IT Act and international data protection principles.</p>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Information We Collect</h3>
          <p>When you interact with our trade portal or submit inquiries, we may process:</p>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '0', marginTop: '1rem' }}>
            {['Entity/Individual Name', 'Commercial Contact (Phone/Email)', 'Export Billing & Logistics Addresses', 'Transactional Order Data', 'Digital Metadata for Site Analytics'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--secondary-color)', borderRadius: '50%' }}></div>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Data Integrity & Protection</h3>
          <p>We implement professional-grade safeguards to ensure your data is protected during every commercial transaction:</p>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '0', marginTop: '1rem' }}>
            {['End-to-End SSL Encryption for all trade dialogues', 'Secure Third-party Payment Gateways (No local card storage)', 'Restricted cloud access for authorized export personnel only'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--secondary-color)', borderRadius: '50%' }}></div>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)', fontWeight: '800' }}>Inquiry & Concerns</h3>
          <p style={{ marginBottom: '1.5rem', fontWeight: '500' }}>For any data-related queries, please reach out to our team:</p>
          <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: '600', color: 'var(--primary-color)' }}>
            <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
            📍 7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi, Ramanathapuram, Tamil Nadu - 623701<br/>
            📞 +91 89402 11958<br/>
            📧 payumpuli79@gmail.com
          </address>
        </div>

        <p style={{ marginTop: '3rem', color: 'var(--text-gray)', fontSize: '0.9rem', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '2rem' }}>
          Last Revised: August 2026<br/>
          © 2026 PAYUMPULI EXPORTS & IMPORTS. Licensed International Enterprise.
        </p>
      </div>
    </motion.div>
  );
}
