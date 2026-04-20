import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="animate-fade" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
      <Link to="/" className="btn" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-main)', color: 'var(--text-dark)' }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Terms & Conditions</h1>
      <p style={{ fontWeight: '500', marginBottom: '2rem', color: 'var(--text-gray)' }}>Last Updated: August 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8' }}>
        <p>Welcome to <strong>PAYUMPULI EXPORTS & IMPORTS</strong>. By accessing our website, purchasing our products, or booking our services, you agree to the following Terms & Conditions. These terms govern all sales, services, and interactions with us.</p>
        <p>If you do not agree with these terms, we recommend you discontinue use of our services.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>1. General Use of Website & Services</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>By using our services, you confirm that you are at least 18 years old or using under the supervision of a parent/guardian.</li>
          <li>You agree to provide accurate, complete details when placing orders or booking services.</li>
          <li>Any misuse, fraudulent activity, or violation of these terms may result in suspension of service.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>2. Products & Pricing</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>We offer a wide range of premium exports and agricultural produce.</li>
          <li>Product descriptions and specifications are displayed as accurately as possible. Minor differences may occur.</li>
          <li>Prices are listed in Indian Rupees (INR ₹) and may change due to market fluctuations or policy updates without prior notice.</li>
          <li>We reserve the right to correct errors in product listings, descriptions, or pricing, even after orders are placed.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>3. Orders & Payments</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Orders are confirmed only upon successful payment.</li>
          <li>We accept payments via UPI, debit/credit cards, net banking, and bank transfers.</li>
          <li>We do not store payment details; transactions are processed securely by verified third-party gateways.</li>
          <li>In case of payment errors, duplicates, or discrepancies, please contact our support team immediately.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>4. Shipping & Delivery</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>We ship products across India/Globally using trusted logistics providers.</li>
          <li>Tracking details will be shared once an order is dispatched.</li>
          <li><strong>PAYUMPULI EXPORTS & IMPORTS</strong> is not liable for delivery delays caused by third-party logistics, weather, or unforeseen events.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>5. User Responsibilities</h3>
        <p>By engaging with us, you agree not to:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Provide false or misleading order/service information</li>
          <li>Copy, reproduce, or misuse our content, branding, or trademarks</li>
          <li>Circumvent our payment or order systems for fraudulent purposes</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>6. Intellectual Property</h3>
        <p>All content on our website—including product images, descriptions, logos, and branding—is the intellectual property of <strong>PAYUMPULI EXPORTS & IMPORTS</strong>. Unauthorized reproduction or commercial use is prohibited.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>7. Limitation of Liability</h3>
        <p>We are not liable for incidental damages arising from product misuse. Our liability is specifically limited to the value of the product/service purchased.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>8. Governing Law & Jurisdiction</h3>
        <p>These Terms & Conditions are governed by the laws of India. Any disputes will fall under the jurisdiction of the courts in Ramanathapuram, Tamil Nadu.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>9. Contact Us</h3>
        <div style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius)', marginTop: '0.5rem' }}>
          <strong>PAYUMPULI EXPORTS & IMPORTS</strong><br/>
          📍 7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Paramakudi, Ramanathapuram, Tamil Nadu - 623701<br/>
          📞 +91 89402 11958<br/>
          📧 Email: payumpuli79@gmail.com<br/>
          🌐 Website: www.payumpuliexports.com
        </div>
      </div>
    </div>
  );
}
