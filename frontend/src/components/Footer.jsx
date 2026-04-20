import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

/**
 * Premium footer with ambient glow, brand info, navigation, and contact.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.25rem, 4vw, 5rem) 2rem' }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="footer-grid" style={{ position: 'relative', zIndex: 1 }}>
        {/* Brand Column */}
        <div className="footer-brand" style={{ maxWidth: '420px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800',
            letterSpacing: '-0.03em', color: 'white', marginBottom: '1.5rem',
          }}>
            PAYUMPULI <span style={{ color: 'var(--gold)' }}>EXPORTS & IMPORTS</span>
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            A premier global enterprise specializing in ethically sourced,
            premium agricultural products from the heritage soils of Tamil Nadu, India.
          </p>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: '500',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)', marginTop: '1rem',
          }}>
            Legal Entity: Saravanapandian
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Product Catalog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <h3>Headquarters</h3>
          <ul>
            <li>
              <MapPin className="icon" size={16} />
              <span>7/138-5, 1st floor, Eswaran Kovil North Street,
                Emaneswaram, Paramakudi, Ramanathapuram - 623701, Tamil Nadu</span>
            </li>
            <li>
              <Phone className="icon" size={14} />
              <span>+91 89402 11958</span>
            </li>
            <li>
              <Mail className="icon" size={14} />
              <span>payumpuli79@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ position: 'relative', zIndex: 1 }}>
        <p>&copy; {currentYear} PAYUMPULI EXPORTS & IMPORTS. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/shipping-policy">Shipping</Link>
          <Link to="/refund-policy">Returns</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
