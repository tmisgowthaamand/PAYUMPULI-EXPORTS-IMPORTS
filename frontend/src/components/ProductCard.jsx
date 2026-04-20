import { useState } from 'react';
import { ShoppingCart, Check, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCard({ product }) {
  const [grams, setGrams] = useState(100);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleGramChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) {
      setGrams(val);
      setIsAdded(false);
    } else if (e.target.value === '') {
      setGrams('');
      setIsAdded(false);
    }
  };

  const totalPrice = (grams || 0) * product.pricePerGram;

  return (
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="card" 
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image Section */}
      <Link to={`/product/${product.id}`} style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem', background: 'var(--bg-secondary)',
        height: '220px', overflow: 'hidden', position: 'relative'
      }}>
        <motion.img 
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        />
        {/* Arrow hint */}
        <div style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          width: '28px', height: '28px', borderRadius: 'var(--radius-full)',
          background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.7, transition: 'opacity 0.3s'
        }}>
          <ArrowUpRight size={12} />
        </div>
      </Link>
      
      {/* Content Section */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
          <Link to={`/product/${product.id}`}>
            <h3 style={{ 
              fontSize: '0.95rem', fontWeight: '700', 
              letterSpacing: '-0.01em', lineHeight: '1.3'
            }}>
              {product.name}
            </h3>
          </Link>
          <span className="badge badge-gold" style={{ flexShrink: 0, fontSize: '0.62rem', padding: '0.2rem 0.5rem' }}>
            ₹{product.pricePerGram}/g
          </span>
        </div>
        
        <p style={{ 
          fontSize: '0.8rem', color: 'var(--text-tertiary)', 
          marginBottom: '1.25rem', flexGrow: 1, lineHeight: '1.55' 
        }}>
          {product.description.substring(0, 70)}...
        </p>
        
        {/* Weight & Price Calculator */}
        <div style={{ 
          background: 'var(--bg-secondary)', padding: '0.85rem', 
          borderRadius: 'var(--radius-xl)', marginBottom: '1rem',
          border: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
            <span style={{ 
              fontSize: '0.68rem', fontWeight: '600', color: 'var(--text-muted)', 
              textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em'
            }}>
              Weight (g)
            </span>
            <input 
              type="number" 
              value={grams} 
              onChange={handleGramChange} 
              style={{ 
                width: '70px', border: '1px solid var(--border)', 
                borderRadius: 'var(--radius-md)', padding: '0.3rem', 
                textAlign: 'center', fontWeight: '700', outline: 'none',
                fontSize: '0.82rem', background: 'white',
                fontFamily: 'var(--font-display)'
              }}
              min="0"
              step="50"
            />
          </div>
          <div style={{ 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: '0.65rem', borderTop: '1px dashed var(--border)'
          }}>
            <span style={{ 
              fontSize: '0.72rem', fontWeight: '600', color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)', letterSpacing: '0.02em', textTransform: 'uppercase'
            }}>
              Total
            </span>
            <span style={{ 
              fontSize: '1.1rem', fontWeight: '800', 
              fontFamily: 'var(--font-display)', letterSpacing: '-0.02em'
            }}>
              ₹{totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button 
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.015 }}
          className="btn btn-primary" 
          style={{ 
            width: '100%', borderRadius: 'var(--radius-xl)', 
            height: '2.75rem', fontSize: '0.82rem' 
          }} 
          onClick={() => {
            addToCart(product, grams || 0, totalPrice);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
          }}
        >
          <AnimatePresence mode='wait'>
            {isAdded ? (
              <motion.span 
                key="added"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Check size={15} /> Added  ✓
              </motion.span>
            ) : (
              <motion.span 
                key="add"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <ShoppingCart size={15} /> Add to Manifest
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}
