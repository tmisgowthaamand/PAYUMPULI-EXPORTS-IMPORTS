import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data.js';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, ArrowRightCircle } from 'lucide-react';

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
      <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Product not found</h2>
        <Link to="/products" className="btn" style={{ marginTop: '2rem' }}>Return to Products</Link>
      </div>
    );
  }

  const handleGramChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) {
      setGrams(val);
    } else if (e.target.value === '') {
      setGrams('');
    }
    setIsAdded(false);
  };

  const totalPrice = (grams || 0) * product.pricePerGram;

  const handleAdd = () => {
    addToCart(product, grams || 0, totalPrice);
    setIsAdded(true);
  };

  return (
    <div className="animate-fade" style={{ padding: '2rem 0' }}>
      <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-gray)', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Back to Collection
      </Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }} className="product-details-grid">
        
        {/* Left Side: BIG IMAGE (Amazon style) */}
        <div className="fade-in-up delay-100" style={{ position: 'sticky', top: '100px', background: 'white', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', maxHeight: '600px', objectFit: 'contain', cursor: 'zoom-in', transition: 'var(--transition-smooth)' }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        {/* Right Side: DETAILS */}
        <div className="fade-in-up delay-200" style={{ padding: '1rem 0' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>{product.name}</h1>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>{product.description}</p>
          
          <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '2rem 0', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.2rem', color: 'var(--text-gray)' }}>Export Rate:</span>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>₹{product.pricePerGram}<span style={{ fontSize: '1rem', color: 'var(--text-gray)', fontWeight: 'normal' }}>/gram</span></span>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Select Quantity (grams)</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <input 
                  type="number" 
                  value={grams} 
                  onChange={handleGramChange} 
                  style={{ padding: '0.8rem', fontSize: '1.1rem', width: '120px', borderRadius: '6px', border: '1px solid var(--primary-color)', outline: 'none' }}
                  min="0"
                  step="50"
                />
                <span style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>Grams</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderTop: '1px dashed var(--border-color)', paddingTop: '1.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>Total Custom Price:</span>
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--secondary-color)', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>₹{totalPrice.toFixed(2)}</span>
              </div>
              
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} 
                onClick={handleAdd}
              >
                <ShoppingCart size={20} /> {isAdded ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>

              {isAdded && (
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <Link to="/checkout" style={{ color: 'var(--primary-color)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    Proceed to Checkout <ArrowRightCircle size={18} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Guarantees */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <ShieldCheck color="var(--secondary-color)" size={32} />
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>100% Secure</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>Quality assured export</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Truck color="var(--secondary-color)" size={32} />
              <div>
                <h4 style={{ marginBottom: '0.2rem' }}>Fast Freight</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>Securely packaged</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
