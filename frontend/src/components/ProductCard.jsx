import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  const [grams, setGrams] = useState(100);
  const { addToCart } = useCart();

  const handleGramChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) {
      setGrams(val);
    } else if (e.target.value === '') {
      setGrams('');
    }
  };

  const totalPrice = (grams || 0) * product.pricePerGram;

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'white' }}>
      <Link to={`/product/${product.id}`} style={{ 
        display: 'block', 
        padding: '1.5rem', 
        background: 'var(--accent)', 
        height: '240px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        />
      </Link>
      
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <Link to={`/product/${product.id}`}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '800' }}>{product.name}</h3>
          </Link>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted-foreground)' }}>₹{product.pricePerGram}/g</span>
        </div>
        
        <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.5' }}>
          {product.description.substring(0, 70)}...
        </p>
        
        <div style={{ background: 'var(--accent)', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--muted-foreground)', textTransform: 'uppercase' }}>Weight (g)</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="number" 
                value={grams} 
                onChange={handleGramChange} 
                style={{ width: '80px', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.4rem', textAlign: 'center', fontWeight: '700', outline: 'none' }}
                min="0"
                step="50"
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Total Cost</span>
            <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary)' }}>₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="btn btn-primary" 
          style={{ width: '100%', borderRadius: '0.75rem' }} 
          onClick={() => addToCart(product, grams || 0, totalPrice)}
        >
          <ShoppingCart size={18} /> Add to Manifest
        </motion.button>
      </div>
    </div>
  );
}
