import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-img-wrapper" style={{ display: 'block' }}>
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = 'var(--primary-color)'}>{product.name}</h3>
        </Link>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', marginBottom: '1rem', flexGrow: 1 }}>{product.description}</p>
        
        <div className="pricing-controls">
          <div className="price-row">
            <span className="price-rate">Price: ₹{product.pricePerGram}/g</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input 
                type="number" 
                value={grams} 
                onChange={handleGramChange} 
                className="gram-input"
                min="0"
                step="50"
              />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-gray)', fontWeight: '500' }}>g</span>
            </div>
          </div>
          
          <div className="price-row" style={{ marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem' }}>Total:</span>
            <span className="price-total">₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button className="btn" style={{ width: '100%', marginTop: '1rem' }} onClick={() => addToCart(product, grams || 0, totalPrice)}>
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
