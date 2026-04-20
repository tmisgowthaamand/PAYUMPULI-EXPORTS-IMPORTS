import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data.js';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [grams, setGrams] = useState(100);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Product Allotment Not Found</h2>
        <Link to="/products" className="btn">Return to Catalog</Link>
      </div>
    );
  }

  const totalPrice = (grams || 0) * product.pricePerGram;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Breadcrumb Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', fontSize: '0.95rem' }}>
        <Link to="/products" style={{ color: 'var(--text-gray)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Collection</Link>
        <ChevronRight size={14} color="var(--text-gray)" />
        <span style={{ color: 'var(--primary-color)', fontWeight: '700' }}>{product.name}</span>
      </div>
      
      <div className="product-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'start' }}>
        
        {/* Left Side: Cinematic Presentation */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          style={{ background: 'white', padding: '3rem', borderRadius: '32px', boxShadow: 'var(--shadow-md)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--border-color)', position: 'sticky', top: '120px' }}
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', maxHeight: '550px', objectFit: 'contain', cursor: 'zoom-in' }} 
          />
        </motion.div>

        {/* Right Side: Specification & Control */}
        <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(15, 23, 42, 0.05)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Grade A Certified Export
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: '800', color: 'var(--primary-color)' }}>{product.name}</h1>
            <p style={{ color: '#1e293b', fontSize: '1.15rem', lineHeight: '1.8', fontWeight: '500' }}>{product.description}</p>
          </div>
          
          <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '32px', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.1rem', color: 'var(--text-gray)', fontWeight: '600' }}>Rate:</span>
              <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary-color)' }}>₹{product.pricePerGram.toFixed(2)}<span style={{ fontSize: '1.1rem', color: 'var(--text-gray)', fontWeight: '500' }}>/gram</span></span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '700', color: 'var(--primary-color)', fontSize: '0.95rem' }}>CUSTOM QUANTITY (GRAMS)</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input 
                  type="number" 
                  value={grams} 
                  onChange={(e) => setGrams(Math.max(0, parseInt(e.target.value) || 0))} 
                  style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', borderRadius: '16px', border: '2px solid #e2e8f0', background: 'white', outline: 'none', fontWeight: '700', transition: 'border-color 0.2s' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 0', borderTop: '2px dashed #e2e8f0', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-color)' }}>ESTIMATED TOTAL:</span>
              <span style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--secondary-hover)' }}>₹{totalPrice.toFixed(2)}</span>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary" 
              style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem', borderRadius: '16px' }} 
              onClick={() => {
                addToCart(product, grams, totalPrice);
                setIsAdded(true);
              }}
            >
              <ShoppingCart size={22} /> {isAdded ? 'Added to Manifest ✓' : 'Add to Manifest'}
            </motion.button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: '#dcfce7', color: '#15803d', padding: '0.8rem', borderRadius: '12px' }}><ShieldCheck size={28} /></div>
              <div><h4 style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--primary-color)' }}>Quality Inspected</h4><p style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>Batch: GRADE-A-EXP</p></div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: '#dbeafe', color: '#1e40af', padding: '0.8rem', borderRadius: '12px' }}><Truck size={28} /></div>
              <div><h4 style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--primary-color)' }}>Export Secure</h4><p style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>Transit insured</p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
