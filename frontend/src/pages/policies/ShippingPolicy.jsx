import { Link } from 'react-router-dom';
import { ArrowLeft, Truck } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ShippingPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '4rem', borderRadius: '32px', boxShadow: 'var(--shadow-md)', marginBottom: '5rem', border: '1px solid var(--border-color)' }}>
      <Link to="/" className="btn" style={{ marginBottom: '3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', color: 'var(--primary-color)', boxShadow: 'none' }}>
        <ArrowLeft size={16} /> Dashboard
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Truck size={32} color="var(--primary-color)" />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)' }}>Logistics & Shipping</h1>
      </div>
      
      <p style={{ fontWeight: '600', fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--secondary-hover)' }}>Streamlined Global Distribution</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.9', color: '#1e293b' }}>
        <p style={{ fontSize: '1.1rem' }}><strong>PAYUMPULI EXPORTS & IMPORTS</strong> leverages a robust supply chain network to ensure that our premium Indian produce reaches the global market in peak condition. We specialize in both domestic wholesale and international bulk logistics.</p>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Timeline & Dispatch</h3>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '0', marginTop: '1rem' }}>
            {['In-Stock Processing: Within 48 business hours', 'Custom Grading/Milling: 3-5 business days', 'International Transit: Dependent on carrier and port logistics'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '500' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--secondary-color)', borderRadius: '50%' }}></div>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.8rem', marginBottom: '1.2rem', fontWeight: '800' }}>Customs & Compliance</h3>
          <p>We provide all necessary phytosanitary certificates, GSTIN invoices, and grading manifests to ensure smooth customs clearance. Buyers are responsible for applicable import duties specific to their respective territories.</p>
        </section>

        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)', fontWeight: '800' }}>Track Shipment</h3>
          <p style={{ marginBottom: '1.5rem', fontWeight: '500' }}>To get the current status of your export allotment, please reach out with your Transaction ID:</p>
          <address style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: '600', color: 'var(--primary-color)' }}>
            📞 +91 89402 11958<br/>
            📍 7/138-5, 1st floor, Eswaran Kovil North Street, Ramanathapuram - 623701
          </address>
        </div>

        <p style={{ marginTop: '3rem', color: 'var(--text-gray)', fontSize: '0.9rem', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '2rem' }}>
          © 2026 PAYUMPULI EXPORTS & IMPORTS. Certified Global Supply Chain.
        </p>
      </div>
    </motion.div>
  );
}
