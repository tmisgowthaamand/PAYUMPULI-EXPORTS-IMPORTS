import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ShoppingCart, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <span style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}><Mail size={11} /> payumpuliexportsimports079@gmail.com</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo.jpeg" 
            alt="Payumpuli Logo" 
            style={{ 
              height: '45px', 
              width: 'auto', 
              marginRight: '0.75rem', 
              borderRadius: '50%',
              border: '2px solid var(--gold-light)'
            }} 
          />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
            <span style={{ position: 'relative' }}>
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
          </div>
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
            
            if (label === 'Products') {
              return (
                <div
                  key={label}
                  onMouseEnter={() => !mobileOpen && setDropdownOpen(true)}
                  onMouseLeave={() => !mobileOpen && setDropdownOpen(false)}
                  style={{ position: 'relative' }}
                >
                  <Link
                    to={path}
                    className={isActive ? 'active nav-dropdown-trigger' : 'nav-dropdown-trigger'}
                    onClick={() => {
                      if (mobileOpen) {
                        // On mobile, just toggle the drawer links or do normal navigation
                      } else {
                        setDropdownOpen(false);
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      ...(mobileOpen ? { fontSize: '1.25rem', padding: '0.75rem 1.5rem' } : {})
                    }}
                  >
                    {label}
                    <ChevronDown size={12} style={{
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }} />
                    {isActive && !dropdownOpen && (
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

                  {/* Dropdown Menu (Desktop) */}
                  {!mobileOpen && (
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'rgba(250, 250, 249, 0.95)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-xl)',
                            padding: '0.5rem',
                            minWidth: '210px',
                            boxShadow: 'var(--shadow-lg)',
                            zIndex: 1000,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.15rem',
                            marginTop: '0.5rem'
                          }}
                        >
                          <Link
                            to="/products"
                            onClick={() => setDropdownOpen(false)}
                            style={{
                              padding: '0.5rem 0.75rem',
                              borderRadius: 'var(--radius-md)',
                              color: 'var(--text-secondary)',
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              transition: 'all 0.2s',
                              textDecoration: 'none'
                            }}
                            className="dropdown-item"
                          >
                            All Products
                          </Link>
                          <Link
                            to="/products?category=agriculture"
                            onClick={() => setDropdownOpen(false)}
                            style={{
                              padding: '0.5rem 0.75rem',
                              borderRadius: 'var(--radius-md)',
                              color: 'var(--text-secondary)',
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              transition: 'all 0.2s',
                              textDecoration: 'none'
                            }}
                            className="dropdown-item"
                          >
                            Agricultural Exports
                          </Link>
                          <Link
                            to="/products?category=dress"
                            onClick={() => setDropdownOpen(false)}
                            style={{
                              padding: '0.5rem 0.75rem',
                              borderRadius: 'var(--radius-md)',
                              color: 'var(--text-secondary)',
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              transition: 'all 0.2s',
                              textDecoration: 'none'
                            }}
                            className="dropdown-item"
                          >
                            Dress & Apparel
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Dropdown Links (Mobile) */}
                  {mobileOpen && (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                      paddingLeft: '1rem',
                      borderLeft: '2px solid var(--border)',
                      marginTop: '0.25rem',
                      marginBottom: '0.5rem',
                      alignItems: 'center'
                    }}>
                      <Link
                        to="/products"
                        onClick={() => setMobileOpen(false)}
                        style={{ fontSize: '1rem', padding: '0.4rem 1rem', color: 'var(--text-secondary)' }}
                      >
                        All Products
                      </Link>
                      <Link
                        to="/products?category=agriculture"
                        onClick={() => setMobileOpen(false)}
                        style={{ fontSize: '1rem', padding: '0.4rem 1rem', color: 'var(--text-secondary)' }}
                      >
                        Agricultural Exports
                      </Link>
                      <Link
                        to="/products?category=dress"
                        onClick={() => setMobileOpen(false)}
                        style={{ fontSize: '1rem', padding: '0.4rem 1rem', color: 'var(--text-secondary)' }}
                      >
                        Dress & Apparel
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

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
