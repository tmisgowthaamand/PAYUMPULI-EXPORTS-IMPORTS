import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, ArrowUp, ShoppingCart, ShieldCheck } from 'lucide-react';
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
import { motion, AnimatePresence } from 'framer-motion';

function Navigation() {
  const location = useLocation();
  const { cartItemsCount } = useCart();
  
  return (
    <header className="header" style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}>
      <div className="header-top" style={{ padding: '0.6rem 5%', background: '#020617', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ flex: 1, fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.7 }}>GSTIN ID: 33BZEPS1817H2ZE</div>
        <div className="header-top-info" style={{ fontWeight: '600' }}>
          <motion.span whileHover={{ color: 'var(--secondary-color)' }}><Phone size={13} color="var(--secondary-color)" /> +91 89402 11958</motion.span>
          <motion.span whileHover={{ color: 'var(--secondary-color)' }}><Mail size={13} color="var(--secondary-color)" /> payumpuli79@gmail.com</motion.span>
        </div>
      </div>
      <div className="header-main" style={{ backdropFilter: 'blur(10px)', background: 'rgba(15, 23, 42, 0.95)' }}>
        <Link to="/" className="logo" style={{ fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
          <span style={{ color: 'white' }}>PAYUMPULI</span> <span style={{ color: 'var(--secondary-color)' }}>EXPORTS</span>
        </Link>
        <nav className="nav-links" style={{ alignItems: 'center' }}>
          {['Home', 'Products', 'About', 'Contact'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link key={item} to={path} className={isActive ? 'active' : ''} style={{ fontSize: '0.95rem' }}>
                {item}
                {isActive && (
                  <motion.div layoutId="nav-underline" style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: 'var(--secondary-color)' }} />
                )}
              </Link>
            );
          })}
          <Link to="/checkout" style={{ marginLeft: '1rem' }}>
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-glow)' }} 
              whileTap={{ scale: 0.95 }} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'var(--secondary-color)', color: 'var(--primary-color)', padding: '0.6rem 1.2rem', borderRadius: '50px', fontWeight: '800', fontSize: '0.9rem' }}
            >
              <ShoppingCart size={18} />
              <span style={{ borderLeft: '1px solid rgba(15, 23, 42, 0.1)', paddingLeft: '0.6rem' }}>{cartItemsCount} Items</span>
            </motion.div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer" style={{ padding: '6rem 5% 3rem', background: '#020617' }}>
      <div className="footer-grid" style={{ gap: '5rem' }}>
        <div className="footer-brand" style={{ maxWidth: '400px' }}>
          <h2 style={{ fontSize: '1.8rem', letterSpacing: '-1px', marginBottom: '1.5rem' }}>
            <span style={{ color: 'white' }}>PAYUMPULI</span> <span style={{ color: 'var(--secondary-color)' }}>EXPORTS & IMPORTS</span>
          </h2>
          <p style={{ color: '#cbd5e1', lineHeight: '1.8', marginBottom: '1.5rem', borderLeft: '3px solid var(--secondary-color)', paddingLeft: '1.5rem' }}>
            A premier global enterprise specializing in uncompromised agricultural grading and ethically sourced Indian exports.
          </p>
          <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>
            OFFICIAL ENTITY: SARAVANAPANDIAN
          </div>
        </div>

        <div className="footer-links">
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '2rem' }}>Exploration</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#94a3b8', fontSize: '1rem', fontWeight: '500' }}>
            <li><motion.div whileHover={{ x: 5, color: 'white' }}><Link to="/">Home Dashboard</Link></motion.div></li>
            <li><motion.div whileHover={{ x: 5, color: 'white' }}><Link to="/products">Export Catalog</Link></motion.div></li>
            <li><motion.div whileHover={{ x: 5, color: 'white' }}><Link to="/about">Our Identity</Link></motion.div></li>
            <li><motion.div whileHover={{ x: 5, color: 'white' }}><Link to="/contact">Global Reach</Link></motion.div></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '2rem' }}>Headquarters</h3>
          <ul style={{ gap: '1.5rem' }}>
            <li style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              <MapPin className="icon" size={20} />
              <span>7/138-5, 1st floor, Eswaran Kovil North Street,<br/>Emaneswaram, Paramakudi, Ramanathapuram - 623701,<br/>Tamil Nadu, India</span>
            </li>
            <li style={{ color: '#94a3b8' }}>
              <Phone className="icon" size={18} />
              <span>+91 89402 11958</span>
            </li>
            <li style={{ color: '#94a3b8' }}>
              <Mail className="icon" size={18} />
              <span>payumpuli79@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '5rem', paddingTop: '3rem', fontWeight: '800' }}>
        <p>&copy; 2026 PAYUMPULI GLOBAL. All rights recorded.</p>
        <div className="footer-bottom-links" style={{ display: 'flex', gap: '3rem', fontWeight: '800', letterSpacing: '0.5px' }}>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/shipping-policy">Shipping</Link>
          <Link to="/refund-policy">Returns</Link>
          <Link to="/terms">Terms</Link>
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
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  if (!isVisible) return null;
  return (
    <motion.button 
      initial={{ scale: 0, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      className="scroll-to-top-btn"
      style={{ borderRadius: '16px', background: 'var(--secondary-color)', width: '55px', height: '55px' }}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <main className="container" style={{ padding: '5rem 5%' }}>
        <AnimatePresence mode='wait'>
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
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
