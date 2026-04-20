import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Trash2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart, cartTotal, removeFromCart, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="animate-fade" style={{ textAlign: 'center', padding: '6rem 2rem', background: 'white', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
        <CheckCircle2 size={80} color="var(--primary-color)" style={{ margin: '0 auto 1.5rem' }} />
        <h1 style={{ marginBottom: '1rem' }}>Order Placed Successfully!</h1>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '2rem' }}>Thank you for choosing PAYUMPULI EXPORTS & IMPORTS. Our team will contact you shortly to confirm logistics.</p>
        <Link to="/" className="btn btn-primary">Return to Store</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade">
      <div className="page-header">
        <h1>Secure Checkout</h1>
        <p style={{ color: 'var(--text-gray)' }}>Complete your export order details below.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(350px, 400px)', gap: '3rem', alignItems: 'start' }}>
        
        {/* Checkout Form */}
        <div style={{ background: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>Billing & Delivery Details</h2>
          
          <form id="checkout-form" className="contact-form" onSubmit={handleCheckout}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Your Name" required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="+91" required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="name@domain.com" required />
              </div>
            </div>

            <div className="form-group">
              <label>Full Delivery Address *</label>
              <textarea rows="3" placeholder="Enter complete address, state, and pin code..." required></textarea>
            </div>

            <h3 style={{ margin: '1.5rem 0 1rem', fontSize: '1.2rem', color: 'var(--primary-color)' }}>Payment Method *</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '1.05rem' }}>
                <input type="radio" name="payment" value="upi" required style={{ width: 'auto' }} />
                UPI Payment (Google Pay, PhonePe, Paytm)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '1.05rem' }}>
                <input type="radio" name="payment" value="credit" required style={{ width: 'auto' }} />
                Credit / Debit Card
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '1.05rem' }}>
                <input type="radio" name="payment" value="cod" required style={{ width: 'auto' }} />
                Cash On Delivery (COD)
              </label>
            </div>
          </form>
        </div>

        {/* Cart Summary */}
        <div style={{ background: 'var(--primary-color)', color: 'white', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }}>
          <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Order Summary</h2>
          
          {cart.length === 0 ? (
            <div style={{ padding: '2rem 0', textAlign: 'center', color: '#e2e8f0' }}>
              <p>Your cart is currently empty.</p>
              <Link to="/products" className="btn" style={{ marginTop: '1rem' }}>Browse Products</Link>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                {cart.map((item, idx) => (
                  <div key={`${item.product.id}-${idx}`} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0, background: 'white' }}>
                      <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{item.product.name}</h4>
                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>Qty: {item.grams}g</p>
                      <p style={{ color: 'var(--secondary-color)', fontWeight: 'bold', marginTop: '0.2rem' }}>₹{item.totalPrice.toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer', position: 'absolute', top: '1rem', right: '1rem' }}
                      title="Remove Item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '1rem', color: '#e2e8f0' }}>
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1rem', color: '#e2e8f0' }}>
                  <span>Shipping</span>
                  <span>Calculated later</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '2px dashed rgba(255,255,255,0.2)' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>₹{cartTotal.toFixed(2)}</span>
                </div>

                <button type="submit" form="checkout-form" className="btn" style={{ width: '100%', marginTop: '2rem', padding: '1rem', fontSize: '1.1rem' }}>
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
