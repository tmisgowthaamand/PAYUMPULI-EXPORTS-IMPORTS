import { Link } from 'react-router-dom';
import { ArrowLeft, Truck } from 'lucide-react';
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

export default function ShippingPolicy() {
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
          <Truck size={18} style={{ color: 'var(--sapphire)' }} />
        </div>
        <span className="badge" style={{ fontSize: '0.65rem' }}>Logistics Document</span>
      </div>

      <h1 style={{ 
        fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem',
        letterSpacing: '-0.04em'
      }}>
        Shipping <span className="font-serif" style={{ color: 'var(--sapphire)' }}>Policy</span>
      </h1>
      <p style={{ color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '3rem', lineHeight: '1.7' }}>
        Safe, Reliable, and On-Time Delivery of Your Goods
      </p>

      <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-3xl)' }}>
        <Reveal>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            At <strong>PAYUMPULI EXPORTS & IMPORTS</strong>, we are committed to delivering your agricultural exports securely and within the promised time frame. This Shipping Policy outlines our procedures for order processing, delivery, charges, and customer support.
          </p>
        </Reveal>

        <PolicySection title="Order Processing Time">
          <PolicyList items={[
            'Orders are processed within 2–4 business days after payment confirmation.',
            'Orders placed on Sundays or public holidays are processed on the next working day.',
            'In the case of high-demand or out-of-stock products, customers will be notified with revised timelines or offered alternatives.'
          ]} />
        </PolicySection>

        <PolicySection title="Shipping Destinations & Delivery Timelines">
          <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Domestic Shipping (India)</p>
          <PolicyList items={[
            'Metro Cities: 3–7 business days after dispatch',
            'Non-Metro Cities: 5–10 business days after dispatch',
            'Remote/Rural Areas: 7–12 business days after dispatch'
          ]} />
          
          <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '1.5rem', marginBottom: '0.25rem' }}>International Shipping</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Please contact our sales team directly for CIF / FOB operational timelines for global export operations. Custom export timelines and charges will apply based on destination port and freight requirements.
          </p>
        </PolicySection>

        <PolicySection title="Shipping Charges">
          <PolicyList items={[
            'Shipping and freight charges vary based on product category, weight, dimensions, and destination.',
            'Bulk export containers and pallets may incur special freight handling charges due to size and customs logistics.',
            'Discounts or custom freight quotes may be available during promotions or for large commercial orders.'
          ]} />
        </PolicySection>

        <PolicySection title="Packaging & Handling">
          <PolicyList items={[
            'All agricultural goods are packed in manufacturer-approved, export-grade packaging to ensure freshness and safe transit.',
            'Fragile or sensitive organic items are safely stored and clearly labeled.',
            'Customers are advised to check packaging at the time of delivery. If tampering or damage is visible, the logistics agent/delivery personnel should be notified immediately.'
          ]} />
        </PolicySection>

        <PolicySection title="Tracking Your Order">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>Once dispatched, you will receive:</p>
          <PolicyList items={[
            'A tracking/AWB number via SMS/email or Bill of Lading details for shipping containers',
            'A tracking link for real-time shipment updates'
          ]} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Please allow 24–48 hours for tracking details to update after dispatch.</p>
        </PolicySection>
        
        <PolicySection title="Delays & Exceptions">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>While we strive for prompt delivery, delays may occur due to:</p>
          <PolicyList items={[
            'Courier, freight, or port logistical disruptions',
            'Regional holidays, strikes, or customs compliance delays',
            'Extreme weather or natural calamities',
            'Customer/Agent unavailability at the time of delivery/arrival'
          ]} />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>In such cases, our support team will keep you informed and assist with tracking and resolving issues.</p>
        </PolicySection>

        <Reveal>
          <div style={{ 
            background: 'var(--bg-secondary)', padding: '2rem', 
            borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border)',
            marginTop: '1rem'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>Need Help With Shipping?</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>For shipping-related questions, please contact:</p>
            <address style={{ 
              fontStyle: 'normal', fontSize: '0.85rem', lineHeight: '1.8',
              color: 'var(--text-secondary)', fontWeight: '500'
            }}>
              <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
              📍 7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi, Ramanathapuram - 623701, Tamil Nadu<br/>
              📞 +91 89402 11958<br/>
              📧 Email: <span style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}>payumpuliexportsimports079@gmail.com</span><br/>
              🌐 Website: www.payumpuli.shop
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
