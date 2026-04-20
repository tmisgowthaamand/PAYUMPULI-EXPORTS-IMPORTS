import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="animate-fade" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
      <Link to="/" className="btn" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-main)', color: 'var(--text-dark)' }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Privacy Policy</h1>
      <p style={{ fontWeight: '500', marginBottom: '2rem', color: 'var(--text-gray)' }}>Your Privacy, Our Responsibility</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8' }}>
        <p>At <strong>PAYUMPULI EXPORTS & IMPORTS</strong>, we respect your trust and are committed to protecting your personal information. As a retailer and service provider of high-quality exports, we ensure that all customer data is collected, stored, and used responsibly—aligned with the Indian IT Act and international data protection principles.</p>

        <p>This Privacy Policy explains what data we collect, how we use it, how we safeguard it, and your rights as a valued customer.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Information We Collect</h3>
        <p>When you interact with us (online store, service requests, or in-store purchases), we may collect:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Full Name</li>
          <li>Contact Information (phone number, email address)</li>
          <li>Billing & Shipping Address</li>
          <li>Order & Payment Details (via secure third-party gateways)</li>
          <li>Service/Repair Requests & Warranty Information</li>
          <li>Device & Browser Data (for website analytics)</li>
          <li>Cookies & Tracking Data (for personalized experiences)</li>
        </ul>
        <p>We collect only the information necessary to provide reliable products and services.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Why We Collect Your Information</h3>
        <p>Your data is used for legitimate business purposes, including:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Processing orders and managing deliveries</li>
          <li>Handling installation, service, and warranty requests</li>
          <li>Providing updates on purchases, repairs, or support queries</li>
          <li>Sending optional promotional offers and product launches (with your consent)</li>
          <li>Improving our website, products, and customer experience</li>
          <li>Meeting legal, tax, and regulatory obligations</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>How We Protect Your Information</h3>
        <p>We implement strong safeguards to ensure your data is protected at all times:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>SSL Encryption for all online transactions</li>
          <li>Secure Payment Gateways – we never store card or UPI details</li>
          <li>Firewall & Access Controls on servers</li>
          <li>Restricted Data Access – only authorized staff handle sensitive data</li>
          <li>Periodic Audits to maintain compliance and security standards</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Your Rights & Choices</h3>
        <p>You have full control of your data. At any time, you may:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Request a copy of your personal data held by us</li>
          <li>Ask for updates or corrections to your information</li>
          <li>Request deletion of your data (subject to legal requirements)</li>
          <li>Opt out of promotional messages (email, SMS, WhatsApp)</li>
          <li>Raise concerns about data handling practices</li>
        </ul>
        <p>We aim to respond to verified requests within 30 days.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Third-Party Sharing</h3>
        <p>We do not sell or rent your personal information. Data may be shared only with:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Courier/logistics partners (for delivery of orders)</li>
          <li>Authorized service technicians (for repair & warranty)</li>
          <li>Payment processors (for secure transactions)</li>
          <li>Government/regulatory bodies (when legally required)</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Policy Updates</h3>
        <p>This Privacy Policy may be updated from time to time to reflect changes in our business practices, technology, or legal requirements. The revised version will always be available on our website with the updated “Last Revised” date.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Contact Us</h3>
        <p>For questions, concerns, or privacy requests, please contact:</p>
        <div style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius)', marginTop: '0.5rem' }}>
          <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
          📍 7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi, Ramanathapuram, Tamil Nadu - 623701<br/>
          📞 +91 89402 11958<br/>
          📧 Email: payumpuli79@gmail.com<br/>
          🌐 Website: www.payumpuliexports.com
        </div>

        <p style={{ marginTop: '2rem', color: 'var(--text-gray)', fontSize: '0.9rem' }}>
          Last Updated: August 2026<br/>
          © 2026 PAYUMPULI EXPORTS & IMPORTS. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
