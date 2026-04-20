import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function ShippingPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="animate-fade" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
      <Link to="/" className="btn" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-main)', color: 'var(--text-dark)' }}>
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Shipping Policy</h1>
      <p style={{ fontWeight: '500', marginBottom: '2rem', color: 'var(--text-gray)' }}>Safe, Reliable, and On-Time Delivery of Your Exports</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8' }}>
        <p>At <strong>PAYUMPULI EXPORTS & IMPORTS</strong>, we are committed to delivering your products securely and within the promised time frame. This Shipping Policy outlines our procedures for order processing, delivery, charges, and customer support.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Order Processing Time</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Orders are processed within 2–4 business days after payment confirmation.</li>
          <li>Orders placed on Sundays or public holidays are processed on the next working day.</li>
          <li>In the case of high-demand or out-of-stock products, customers will be notified with revised timelines or offered alternatives.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Shipping Destinations & Delivery Timelines</h3>
        <h4 style={{ color: 'var(--text-dark)' }}>Domestic Shipping (India)</h4>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Metro Cities: 3–7 business days after dispatch</li>
          <li>Non-Metro Cities: 5–10 business days after dispatch</li>
          <li>Remote/Rural Areas: 7–12 business days after dispatch</li>
        </ul>
        <h4 style={{ color: 'var(--text-dark)' }}>International Shipping</h4>
        <p>At present, international shipping is dependent on bulk inquiry. Please contact us directly for specific international freight timelines and charges.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Shipping Charges</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Shipping charges vary based on product category, weight, dimensions, and destination.</li>
          <li>Large bulk exports may incur special handling charges due to size and logistics.</li>
          <li>Free shipping offers may be available during promotions or for orders above a certain value.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Packaging & Handling</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>All products are packed in industry-approved packaging to ensure safe transit.</li>
          <li>Fragile items are double-cushioned and clearly labeled.</li>
          <li>Customers are advised to check packaging at the time of delivery. If tampering or damage is visible, the delivery should be reported immediately.</li>
        </ul>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Tracking Your Order</h3>
        <p>Once dispatched, you will receive:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>A tracking number via SMS/email</li>
          <li>A tracking link for real-time shipment updates</li>
        </ul>
        <p>Please allow 24–48 hours for tracking details to update after dispatch.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Delays & Exceptions</h3>
        <p>While we strive for prompt delivery, delays may occur due to:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: 'var(--text-gray)' }}>
          <li>Courier/logistics disruptions</li>
          <li>Regional holidays or strikes</li>
          <li>Extreme weather or natural calamities</li>
          <li>Customer unavailability at the time of delivery</li>
        </ul>
        <p>In such cases, our support team will keep you informed and assist with rescheduling.</p>

        <h3 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Need Help With Shipping?</h3>
        <p>For shipping-related questions, please contact:</p>
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
