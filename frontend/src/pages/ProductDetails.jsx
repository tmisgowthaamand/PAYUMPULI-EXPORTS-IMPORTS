import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data.js';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, ChevronRight, Star, Package, Minus, Plus, Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

import Reveal from '../components/Reveal';
import FloatingOrb from '../components/FloatingOrb';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [grams, setGrams] = useState(100);
  const [isAdded, setIsAdded] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  const quickWeights = [50, 100, 250, 500, 1000];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Get related products
  const relatedProducts = products
    .filter(p => p.id !== parseInt(id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
        <div style={{
          width: '60px', height: '60px', borderRadius: 'var(--radius-2xl)',
          background: 'var(--bg-secondary)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.5rem'
        }}>
          <Package size={24} style={{ color: 'var(--text-muted)' }} />
        </div>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Product Not Found</h2>
        <p style={{ color: 'var(--text-tertiary)', marginBottom: '2rem' }}>This product may no longer be available.</p>
        <Link to="/products" className="btn btn-primary">Return to Catalog</Link>
      </div>
    );
  }

  const totalPrice = (grams || 0) * product.pricePerGram;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="page-wrapper"
      data-page="products"
      style={{ paddingTop: '1rem' }}
    >
      {/* ── Breadcrumb ── */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        style={{ 
          display: 'flex', alignItems: 'center', gap: '0.5rem', 
          marginBottom: '2.5rem', fontSize: '0.82rem' 
        }}
      >
        <Link to="/products" style={{ 
          color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem',
          transition: 'color 0.2s'
        }}>
          <ArrowLeft size={14} /> Collection
        </Link>
        <ChevronRight size={12} color="var(--text-muted)" />
        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{product.name}</span>
      </motion.div>
      
      {/* ── Product Layout ── */}
      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
        gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'start',
        marginBottom: 'clamp(4rem, 8vw, 6rem)'
      }}>
        
        {/* Left — Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
          className="card"
          style={{ 
            padding: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center',
            position: 'sticky', top: '120px', minHeight: '450px',
            background: 'var(--bg-secondary)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-3xl)', overflow: 'hidden'
          }}
        >
          {/* Dot pattern overlay */}
          <FloatingOrb size="400px" color="rgba(0,0,0,0.04)" top="-50%" left="-50%" />
          
          <motion.img 
            animate={{ scale: imageHover ? 1.06 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            src={product.image} 
            alt={product.name} 
            style={{ 
              width: '100%', maxHeight: '450px', objectFit: 'contain', 
              cursor: 'zoom-in', position: 'relative', zIndex: 1 
            }} 
          />
          
          {/* Grade badge */}
          <div style={{
            position: 'absolute', top: '1.5rem', left: '1.5rem',
            zIndex: 2
          }}>
            <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>
              <ShieldCheck size={10} /> Grade A
            </span>
          </div>
        </motion.div>

        {/* Right — Details */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Title Section */}
          <div style={{ marginBottom: '2rem' }}>
            <span className="badge" style={{ 
              marginBottom: '1rem', display: 'inline-flex', fontSize: '0.65rem'
            }}>
              Certified Export Product
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: '1.1', 
              marginBottom: '1rem', fontWeight: '800',
              letterSpacing: '-0.035em'
            }}>
              {product.name}
            </h1>
            <p style={{ 
              color: 'var(--text-tertiary)', fontSize: '1rem', lineHeight: '1.75' 
            }}>
              {product.description}
            </p>
          </div>
          
          {/* Pricing & Quantity Card */}
          <div style={{ 
            background: 'white', padding: '2rem', borderRadius: 'var(--radius-3xl)', 
            border: '1px solid var(--border)', marginBottom: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {/* Price */}
            <div style={{ 
              display: 'flex', alignItems: 'baseline', gap: '0.5rem', 
              marginBottom: '1.75rem', paddingBottom: '1.75rem',
              borderBottom: '1px solid var(--border)'
            }}>
              <span style={{ 
                fontSize: '2.25rem', fontWeight: '800', letterSpacing: '-0.03em',
                fontFamily: 'var(--font-display)'
              }}>
                ₹{product.pricePerGram.toFixed(2)}
              </span>
              <span style={{ 
                fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' 
              }}>
                per gram
              </span>
            </div>

            {/* Quick Weight Selection */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ 
                display: 'block', marginBottom: '0.75rem', fontWeight: '600', 
                fontSize: '0.78rem', textTransform: 'uppercase', 
                letterSpacing: '0.06em', color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)'
              }}>
                Quick Select
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {quickWeights.map(w => (
                  <motion.button
                    key={w}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setGrams(w); setIsAdded(false); }}
                    style={{
                      padding: '0.45rem 0.9rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid',
                      borderColor: grams === w ? 'var(--text-primary)' : 'var(--border)',
                      background: grams === w ? 'var(--text-primary)' : 'transparent',
                      color: grams === w ? 'var(--text-inverse)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {w}g
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Custom Quantity */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ 
                display: 'block', marginBottom: '0.75rem', fontWeight: '600', 
                fontSize: '0.78rem', textTransform: 'uppercase', 
                letterSpacing: '0.06em', color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)'
              }}>
                Custom Quantity (grams)
              </label>
              <div style={{ 
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                background: 'var(--bg-secondary)', padding: '0.5rem',
                borderRadius: 'var(--radius-xl)', border: '1px solid var(--border)'
              }}>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { setGrams(Math.max(0, grams - 50)); setIsAdded(false); }}
                  style={{
                    width: '40px', height: '40px', borderRadius: 'var(--radius-lg)',
                    background: 'white', border: '1px solid var(--border)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <Minus size={16} />
                </motion.button>
                <input 
                  type="number" 
                  value={grams} 
                  onChange={(e) => { setGrams(Math.max(0, parseInt(e.target.value) || 0)); setIsAdded(false); }} 
                  style={{ 
                    width: '100%', textAlign: 'center', border: 'none', 
                    background: 'transparent', fontWeight: '700', fontSize: '1.15rem',
                    outline: 'none', fontFamily: 'var(--font-display)'
                  }}
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { setGrams(grams + 50); setIsAdded(false); }}
                  style={{
                    width: '40px', height: '40px', borderRadius: 'var(--radius-lg)',
                    background: 'white', border: '1px solid var(--border)',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  <Plus size={16} />
                </motion.button>
              </div>
            </div>
            
            {/* Total */}
            <div style={{ 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
              padding: '1.25rem 0', borderTop: '1px dashed var(--border)',
              borderBottom: '1px dashed var(--border)', marginBottom: '1.75rem'
            }}>
              <span style={{ 
                fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase'
              }}>
                Estimated Total
              </span>
              <span style={{ 
                fontSize: '1.75rem', fontWeight: '800', 
                fontFamily: 'var(--font-display)', letterSpacing: '-0.03em',
                color: 'var(--text-primary)'
              }}>
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>
            
            {/* Add to Cart Button */}
            <motion.button 
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="btn btn-primary btn-xl" 
              style={{ 
                width: '100%', borderRadius: 'var(--radius-xl)', height: '3.5rem',
                fontSize: '0.95rem'
              }} 
              onClick={() => {
                addToCart(product, grams, totalPrice);
                setIsAdded(true);
              }}
            >
              <AnimatePresence mode='wait'>
                {isAdded ? (
                  <motion.span 
                    key="added"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Check size={18} /> Added to Manifest
                  </motion.span>
                ) : (
                  <motion.span 
                    key="add"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <ShoppingCart size={18} /> Add to Manifest
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Trust Signals */}
          <div style={{ 
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'
          }}>
            {[
              { 
                icon: ShieldCheck, 
                title: 'Quality Inspected', 
                desc: 'Batch: GRADE-A-EXP', 
                bg: 'var(--emerald-surface)', color: 'var(--emerald)' 
              },
              { 
                icon: Truck, 
                title: 'Export Secure', 
                desc: 'Transit insured', 
                bg: 'var(--sapphire-surface)', color: 'var(--sapphire)' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -3 }}
                className="card"
                style={{ padding: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}
              >
                <div style={{ 
                  background: item.bg, color: item.color, 
                  padding: '0.6rem', borderRadius: 'var(--radius-lg)', flexShrink: 0 
                }}>
                  <item.icon size={18} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '700', fontSize: '0.82rem', marginBottom: '0.1rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>


      {/* ── Related Products ── */}
      <section style={{ marginBottom: '2rem' }}>
        <Reveal>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
              Related <span className="font-serif" style={{ color: 'var(--emerald)' }}>Products</span>
            </h2>
          </div>
        </Reveal>
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
          gap: '1rem'
        }}>
          {relatedProducts.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Link to={`/product/${p.id}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card"
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    height: '160px', background: 'var(--bg-secondary)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1rem'
                  }}>
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: '700', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                      {p.name}
                    </h4>
                    <div style={{ 
                      fontFamily: 'var(--font-mono)', fontSize: '0.78rem', 
                      fontWeight: '600', color: 'var(--text-secondary)'
                    }}>
                      ₹{p.pricePerGram}/g
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
