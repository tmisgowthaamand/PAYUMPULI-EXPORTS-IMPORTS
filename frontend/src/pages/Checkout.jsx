import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Trash2, CheckCircle2, CreditCard, Wallet, Truck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '8rem 2rem', background: 'white', borderRadius: '32px', boxShadow: 'var(--shadow-lg)', maxWidth: '800px', margin: '2rem auto' }}>
        <div style={{ width: '100px', height: '100px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--success)' }}>
          <CheckCircle2 size={60} />
        </div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Order Confirmed!</h1>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
          Thank you for choosing PAYUMPULI EXPORTS & IMPORTS. An executive will contact you shortly to coordinate logistics.
        </p>
        <Link to="/" className="btn btn-primary" style={{ padding: '1rem 3rem', borderRadius: '16px' }}>Return to Dashboard</Link>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Finalize Transfer</h1>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>Secure your international export allotment below.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        
        {/* Checkout Form */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ background: 'white', padding: '3rem', borderRadius: '32px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.05)', padding: '0.8rem', borderRadius: '12px', color: 'var(--primary-color)' }}>
              <Truck size={24} />
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800' }}>Logistics Details</h2>
          </div>
          
          <form id="checkout-form" className="contact-form" onSubmit={handleCheckout}>
            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem' }}>Recipient Name</label>
              <input type="text" placeholder="Individual or Entity Name" required style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', borderRadius: '0', padding: '1rem 0', fontSize: '1.1rem', background: 'transparent' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div className="form-group">
                <label style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem' }}>Phone</label>
                <input type="tel" placeholder="+91" required style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', borderRadius: '0', padding: '1rem 0', fontSize: '1.1rem', background: 'transparent' }} />
              </div>
              <div className="form-group">
                <label style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem' }}>Corporate Email</label>
                <input type="email" placeholder="name@domain.com" required style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', borderRadius: '0', padding: '1rem 0', fontSize: '1.1rem', background: 'transparent' }} />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '3rem' }}>
              <label style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem' }}>Destination Address</label>
              <textarea rows="3" placeholder="Full postal address and port of entry if applicable..." required style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', borderRadius: '0', padding: '1rem 0', fontSize: '1.1rem', background: 'transparent', resize: 'none' }}></textarea>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.05)', padding: '0.8rem', borderRadius: '12px', color: 'var(--primary-color)' }}>
                <Wallet size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Payment Mode</h3>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { id: 'upi', label: 'Digital Transfer (UPI/Bank)', icon: <CreditCard size={18}/> },
                { id: 'card', label: 'International/Domestic Card', icon: <CreditCard size={18}/> },
                { id: 'cod', label: 'Commercial Invoice (COD)', icon: <Truck size={18}/> }
              ].map((method) => (
                <label key={method.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <input type="radio" name="payment" value={method.id} required style={{ width: '18px', height: '18px', accentColor: 'var(--primary-color)' }} />
                  <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {method.label}
                  </span>
                </label>
              ))}
            </div>
          </form>
        </motion.div>

        {/* Floating Cart Summary */}
        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ background: 'var(--primary-color)', color: 'white', padding: '3rem', borderRadius: '32px', boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.4)', position: 'sticky', top: '120px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <ShoppingBag size={28} color="var(--secondary-color)" />
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'white' }}>Manifest Summary</h2>
          </div>
          
          {cart.length === 0 ? (
            <div style={{ padding: '3rem 0', textAlign: 'center' }}>
              <p style={{ opacity: 0.6, marginBottom: '2rem' }}>No items in current allotment.</p>
              <Link to="/products" className="btn" style={{ borderRadius: '12px' }}>Browse Collective</Link>
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', maxHeight: '350px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                <AnimatePresence>
                  {cart.map((item, idx) => (
                    <motion.div 
                      key={`${item.product.id}-${idx}`} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1.2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}
                    >
                      <div style={{ width: '70px', height: '70px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, background: 'white', padding: '0.5rem' }}>
                        <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.3rem', fontWeight: '700' }}>{item.product.name}</h4>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Net Weight: {item.grams}g</p>
                        <p style={{ color: 'var(--secondary-color)', fontWeight: '800', marginTop: '0.4rem', fontSize: '1.1rem' }}>₹{item.totalPrice.toFixed(2)}</p>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.1, color: '#fca5a5' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.product.id)}
                        style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', position: 'absolute', top: '1.2rem', right: '1.2rem' }}
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span>Inventory Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>
                  <span>Shipping & Duties</span>
                  <span style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Pending Grading</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '2px dashed rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'white' }}>Total Estimate</span>
                  <span style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--secondary-color)' }}>₹{cartTotal.toFixed(2)}</span>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: 'var(--secondary-hover)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  form="checkout-form" 
                  className="btn" 
                  style={{ width: '100%', marginTop: '3rem', padding: '1.4rem', fontSize: '1.2rem', borderRadius: '20px' }}
                >
                  Authorize Order
                </motion.button>
                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px' }}>
                  SECURE END-TO-END ENCRYPTED GATEWAY
                </p>
              </div>
            </>
          )}
        </motion.div>

      </div>
    </motion.div>
  );
}
