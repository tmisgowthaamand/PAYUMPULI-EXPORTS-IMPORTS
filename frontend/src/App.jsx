import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Search, ArrowUp, ShoppingCart } from 'lucide-react';
import { useCart } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import ShippingPolicy from './pages/policies/ShippingPolicy';
import RefundPolicy from './pages/policies/RefundPolicy';
import TermsConditions from './pages/policies/TermsConditions';

function Navigation() {
  const location = useLocation();
  const { cartItemsCount } = useCart();
  
  return (
    <header className="header">
      <div className="header-top">
        <div style={{ flex: 1 }}>GSTIN: 33BZEPS1817H2ZE</div>
        <div className="header-top-info">
          <span><Phone size={14} /> +91 8940211958</span>
          <span><Mail size={14} /> payumpuli79@gmail.com</span>
        </div>
      </div>
      <div className="header-main">
        <div className="logo">PAYUMPULI EXPORTS & IMPORTS</div>
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link to="/checkout" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--secondary-color)', color: 'var(--primary-color)', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 'bold' }}>
            <ShoppingCart size={18} />
            Cart {cartItemsCount > 0 && <span style={{ background: 'var(--primary-color)', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>{cartItemsCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer animate-fade">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>PAYUMPULI EXPORTS & IMPORTS</h2>
          <p style={{ fontWeight: 'bold', color: 'white' }}>Legal Name: Saravanapandian</p>
          <p>We supply top-tier Indian exports globally while maintaining fair trade practices and sustainability.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <MapPin className="icon" size={18} />
              <span>7/138-5, 1st floor, Eswaran Kovil North Street,<br/>Nainarkovil Road, Emaneswaram (Po),<br/>Paramakudi (Tk), Ramanathapuram - 623701,<br/>Tamil Nadu, South India</span>
            </li>
            <li>
              <Phone className="icon" size={18} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>+91 89402 11958</span>
                <span>+91 86820 51068</span>
              </div>
            </li>
            <li>
              <Mail className="icon" size={18} />
              <span>payumpuli79@gmail.com</span>
            </li>
            <li>
              <Search className="icon" size={18} />
              <span>www.payumpuliexports.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 PAYUMPULI EXPORTS & IMPORTS. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/refund-policy">Cancellation & Refund Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToTop} 
      className="scroll-to-top-btn"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
