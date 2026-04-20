import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Context
import { useCart } from './context/CartContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

// Policy Pages
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import ShippingPolicy from './pages/policies/ShippingPolicy';
import RefundPolicy from './pages/policies/RefundPolicy';
import TermsConditions from './pages/policies/TermsConditions';

/**
 * Animated Page Wrapper with staggered reveal blur transition.
 */
function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Scroll to top on route change.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: 'instant' }); 
  }, [pathname]);
  return null;
}

/**
 * Floating button to return to page top.
 */
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ y: -3, boxShadow: 'var(--shadow-gold)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/product/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
          
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/shipping-policy" element={<PageTransition><ShippingPolicy /></PageTransition>} />
          <Route path="/refund-policy" element={<PageTransition><RefundPolicy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><TermsConditions /></PageTransition>} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
