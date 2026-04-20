import { Link } from 'react-router-dom';
import { ArrowLeft, Gavel } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '4rem', borderRadius: '32px', boxShadow: 'var(--shadow-md)', marginBottom: '5rem', border: '1px solid var(--border-color)' }}>
      <Link to="/" className="btn" style={{ marginBottom: '3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', color: 'var(--primary-color)', boxShadow: 'none' }}>
        <ArrowLeft size={16} /> Dashboard
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Gavel size={32} color="var(--primary-color)" />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)' }}>Terms of Service</h1>
      </div>
      
      <p style={{ fontWeight: '600', fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--secondary-hover)' }}>Commercial Governance & Legal Framework</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.9', color: '#1e293b' }}>
        <p style={{ fontSize: '1.1rem' }}>By accessing this trade portal or initiating a commercial allotment, you agree to be bound by the statutory terms governing <strong>PAYUMPULI EXPORTS & IMPORTS</strong>. These terms ensure transparency and legal integrity for both the exporter and the global recipient.</p>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Governing Scope</h3>
          <p>These terms apply to all digital transactions, physical allotments, and commercial inquiries managed by the entity controlled by <strong>Saravanapandian</strong> based in Ramanathapuram, Tamil Nadu.</p>
        </section>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Commercial Pricing</h3>
          <p>Prices are subject to market fluctuations inherent to agricultural exports. Final pricing recorded at the time of order confirmation and invoicing is binding.</p>
        </section>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Legal Jurisdiction</h3>
          <p>All trade disputes or legal inquiries are subject to the exclusive jurisdiction of the courts located in <strong>Ramanathapuram</strong>, Tamil Nadu, India.</p>
        </section>

        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)', fontWeight: '800' }}>Compliance Desk</h3>
          <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: '600', color: 'var(--primary-color)' }}>
            <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
            📞 +91 89402 11958<br/>
            📍 7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi, Ramanathapuram - 623701
          </address>
        </div>

        <p style={{ marginTop: '3rem', color: 'var(--text-gray)', fontSize: '0.9rem', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '2rem' }}>
          Last Updated: 2026<br/>
          © 2026 PAYUMPULI EXPORTS & IMPORTS. Authentic Indian Origins.
        </p>
      </div>
    </motion.div>
  );
}
