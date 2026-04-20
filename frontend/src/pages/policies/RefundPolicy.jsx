import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="animate-fade" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
      <Link to="/" className="btn" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-main)', color: 'var(--text-dark)' }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Cancellation & Refund Policy</h1>
      <p style={{ fontWeight: '500', marginBottom: '2rem', color: 'var(--text-gray)' }}>Fair, Transparent, and Customer-Friendly</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8' }}>
        <p>At <strong>PAYUMPULI EXPORTS & IMPORTS</strong>, customer satisfaction is our priority. While we strive to deliver high-quality products and services, we understand that cancellations or refunds may occasionally be required. This policy outlines how we handle such requests in a clear and transparent manner.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Order Cancellations</h3>
        <p><strong>Cancellation Window:</strong><br/>
        Orders can be cancelled within 2 hours of purchase, provided they have not yet been processed, packed, or dispatched.</p>
        <p>Once an order has been shipped or handed over to the courier, cancellations are no longer possible.</p>
        <p>To cancel an order, customers must contact our support team with their Order ID.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Returns & Replacements</h3>
        <p>We accept returns or offer replacements in the following situations:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Product received is damaged in transit.</li>
          <li>Wrong item delivered.</li>
          <li>Verified manufacturing/quality defects.</li>
        </ul>
        <p><strong>Conditions for Returns:</strong></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Return requests must be raised within 48 hours of delivery.</li>
          <li>The product must be unused, with all original packaging and invoices intact.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Non-Returnable Items</h3>
        <p>We cannot accept returns/refunds for:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Products damaged due to customer misuse, negligence, or improper storage.</li>
          <li>Items without original packaging or invoice.</li>
          <li>Opened bulk packages or consumables.</li>
          <li>Custom orders or special bulk requests.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Refund Process</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Once approved, refunds are initiated within 3–5 business days.</li>
          <li>Refunds are processed via the original payment method (UPI, bank transfer, card, etc.).</li>
          <li>Depending on the payment provider, refunds may take 5–10 business days to reflect in your account.</li>
          <li>In certain cases, refunds may be issued as store credit or replacement based on customer preference.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Exceptions</h3>
        <p>Refunds/cancellations are not applicable in cases of:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Delays caused by logistics/courier providers beyond our control.</li>
          <li>Customer unavailability during scheduled delivery.</li>
          <li>Price fluctuations after order placement.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Need Help?</h3>
        <p>For cancellation, return, or refund assistance, please contact:</p>
        <div style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius)', marginTop: '0.5rem' }}>
          <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
          📍 7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi, Ramanathapuram, Tamil Nadu - 623701<br/>
          📞 +91 89402 11958<br/>
          📧 Email: payumpuli79@gmail.com<br/>
          🌐 Website: www.payumpuliexports.com
        </div>
        <p style={{ marginTop: '1rem', color: 'var(--text-gray)', fontSize: '0.9rem' }}>Our team is available Mon–Sat, 10 AM – 7 PM IST.</p>
      </div>
    </div>
  );
}
