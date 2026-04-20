import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ShoppingCart, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Glassmorphism navigation with micro-interactions.
 * Features: top info bar, animated nav indicator, mobile drawer, cart badge.
 */
export default function Header() {
  const location = useLocation();
  const { cartItemsCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderBottomColor: scrolled ? 'var(--border)' : 'transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.04)' : 'none',
      }}
    >
      {/* Top Bar — Cinematic thin strip */}
      <div className="header-top">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={10} style={{ color: 'var(--gold)' }} />
          <span style={{ fontWeight: 800, color: 'var(--gold-light)' }}>GSTIN: 33BZEPS1817H2ZE</span>
        </div>
        <div className="header-top-info">
          <span><Phone size={11} /> +91 89402 11958</span>
          <span><Mail size={11} /> payumpuli79@gmail.com</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <Link to="/" className="logo">
          <span style={{ position: 'relative', marginRight: '0.35rem' }}>
            PAYUMPULI
            <motion.span
              style={{
                position: 'absolute', bottom: '-2px', left: 0, right: 0,
                height: '2px', background: 'var(--gold)',
                borderRadius: 'var(--radius-full)', opacity: 0.5,
              }}
              layoutId="logo-underline"
            />
          </span>
          <span className="logo-accent">EXPORTS & IMPORTS</span>
        </Link>

        <nav className="nav-links" style={{
          ...(mobileOpen ? {
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(250,250,249,0.97)', backdropFilter: 'blur(24px)',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            gap: '0.5rem', zIndex: 999,
          } : {}),
        }}>
          {mobileOpen && (
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: 'none', border: 'none', padding: '0.5rem',
              }}
            >
              <X size={24} />
            </motion.button>
          )}

          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={isActive ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
                style={mobileOpen ? { fontSize: '1.25rem', padding: '0.75rem 1.5rem' } : {}}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute', bottom: '2px', left: '0.875rem', right: '0.875rem',
                      height: '2px',
                      background: 'var(--text-primary)',
                      borderRadius: 'var(--radius-full)',
                    }}
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}

          <Link to="/checkout" className="cart-btn" onClick={() => setMobileOpen(false)}>
            <ShoppingCart size={15} />
            <span>Cart</span>
            {cartItemsCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                className="cart-count"
              >
                {cartItemsCount}
              </motion.span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="btn-ghost btn-icon mobile-menu-toggle"
          aria-label="Open Menu"
        >
          <Menu size={22} />
        </button>
      </div>
    </motion.header>
  );
}
