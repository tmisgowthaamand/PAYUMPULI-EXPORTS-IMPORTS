import { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Trash2, CheckCircle2, CreditCard, Wallet, Truck, ShoppingBag, Package, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';

/* ── Reveal ── */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Checkout() {
  const { cart, cartTotal, removeFromCart, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsOrdered(true);
    clearCart();
  };

  /* ── Success State ── */
  if (isOrdered) {
    return (
      <div className="page-wrapper" data-page="checkout" style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        minHeight: '60vh', paddingTop: '4rem' 
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} 
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ 
            textAlign: 'center', padding: 'clamp(3rem, 6vw, 5rem)',
            background: 'white', borderRadius: 'var(--radius-3xl)',
            border: '1px solid var(--border)', boxShadow: 'var(--shadow-xl)',
            maxWidth: '600px', width: '100%', position: 'relative', overflow: 'hidden'
          }}
        >
          {/* Confetti gradient */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)',
              width: '400px', height: '400px',
              background: 'conic-gradient(from 0deg, rgba(5,150,105,0.08), transparent, rgba(212,160,23,0.06), transparent)',
              borderRadius: '50%', pointerEvents: 'none', filter: 'blur(40px)'
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
              style={{ 
                width: '80px', height: '80px', 
                background: 'var(--emerald-surface)', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                margin: '0 auto 2rem', border: '2px solid rgba(5,150,105,0.2)' 
              }}
            >
              <CheckCircle2 size={40} style={{ color: 'var(--emerald)' }} />
            </motion.div>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem',
              letterSpacing: '-0.035em' 
            }}>
              Order <span className="font-serif" style={{ color: 'var(--emerald)' }}>Confirmed!</span>
            </h1>
            <p style={{ 
              color: 'var(--text-tertiary)', fontSize: '1rem', marginBottom: '2.5rem', 
              maxWidth: '400px', margin: '0 auto 2.5rem', lineHeight: '1.7' 
            }}>
              Thank you for choosing PAYUMPULI EXPORTS & IMPORTS. An executive will contact you shortly to coordinate logistics.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/" className="btn btn-primary btn-lg" style={{ borderRadius: 'var(--radius-xl)' }}>
                Return to Dashboard <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="page-wrapper" data-page="checkout" style={{ paddingTop: '2rem' }}>
      
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: 'var(--radius-lg)',
            background: 'var(--gold-surface)', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>
            <ShoppingBag size={18} style={{ color: 'var(--gold)' }} />
          </div>
          <span className="badge badge-gold" style={{ fontSize: '0.68rem' }}>
            <Sparkles size={10} /> Secure Checkout
          </span>
        </div>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', 
          letterSpacing: '-0.04em', marginBottom: '0.5rem' 
        }}>
          Finalize <span className="font-serif" style={{ color: 'var(--gold)' }}>Transfer</span>
        </h1>
        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem' }}>
          Secure your international export allotment below.
        </p>
      </motion.div>

      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
        gap: '2rem', alignItems: 'start' 
      }}>
        
        {/* ══ Checkout Form ══ */}
        <Reveal>
          <div className="card" style={{ 
            padding: 'clamp(2rem, 3vw, 2.5rem)', borderRadius: 'var(--radius-3xl)' 
          }}>
            {/* Logistics Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ 
                width: '36px', height: '36px', background: 'var(--bg-secondary)', 
                borderRadius: 'var(--radius-lg)', display: 'flex', 
                alignItems: 'center', justifyContent: 'center' 
              }}>
                <Truck size={16} style={{ color: 'var(--text-secondary)' }} />
              </div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '-0.02em' }}>Logistics Details</h2>
            </div>
            
            <form id="checkout-form" onSubmit={handleCheckout}>
              <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2rem' }}>
                <div>
                  <label style={{ 
                    display: 'block', fontSize: '0.72rem', fontWeight: '600',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: 'var(--text-muted)', marginBottom: '0.6rem',
                    fontFamily: 'var(--font-mono)'
                  }}>Recipient Name</label>
                  <input 
                    type="text" placeholder="Individual or Entity Name" required 
                    className="input input-lg"
                    style={{ borderRadius: 'var(--radius-xl)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', fontSize: '0.72rem', fontWeight: '600',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      color: 'var(--text-muted)', marginBottom: '0.6rem',
                      fontFamily: 'var(--font-mono)'
                    }}>Phone</label>
                    <input 
                      type="tel" placeholder="+91" required 
                      className="input input-lg"
                      style={{ borderRadius: 'var(--radius-xl)' }}
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', fontSize: '0.72rem', fontWeight: '600',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      color: 'var(--text-muted)', marginBottom: '0.6rem',
                      fontFamily: 'var(--font-mono)'
                    }}>Corporate Email</label>
                    <input 
                      type="email" placeholder="name@domain.com" required 
                      className="input input-lg"
                      style={{ borderRadius: 'var(--radius-xl)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', fontSize: '0.72rem', fontWeight: '600',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: 'var(--text-muted)', marginBottom: '0.6rem',
                    fontFamily: 'var(--font-mono)'
                  }}>Destination Address</label>
                  <textarea 
                    rows="3" placeholder="Full postal address and port of entry..." required 
                    className="textarea"
                    style={{ borderRadius: 'var(--radius-xl)', padding: '1rem 1.25rem' }}
                  />
                </div>
              </div>

              {/* Payment Section */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '36px', height: '36px', background: 'var(--bg-secondary)', 
                  borderRadius: 'var(--radius-lg)', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center' 
                }}>
                  <Wallet size={16} style={{ color: 'var(--text-secondary)' }} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.02em' }}>Payment Mode</h3>
              </div>

              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {[
                  { id: 'upi', label: 'Digital Transfer (UPI/Bank)', icon: CreditCard, desc: 'Instant confirmation' },
                  { id: 'card', label: 'International/Domestic Card', icon: CreditCard, desc: 'Visa, Mastercard, RuPay' },
                  { id: 'cod', label: 'Commercial Invoice (COD)', icon: Truck, desc: 'Pay on delivery' }
                ].map((method) => (
                  <motion.label 
                    key={method.id} 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '1rem', 
                      padding: '1rem 1.25rem', 
                      background: selectedPayment === method.id ? 'var(--bg-secondary)' : 'white',
                      border: '1px solid', 
                      borderColor: selectedPayment === method.id ? 'var(--text-primary)' : 'var(--border)',
                      borderRadius: 'var(--radius-xl)', cursor: 'pointer', 
                      transition: 'all 0.2s'
                    }}
                  >
                    <input 
                      type="radio" name="payment" value={method.id} required 
                      onChange={() => setSelectedPayment(method.id)}
                      style={{ 
                        width: '16px', height: '16px', 
                        accentColor: 'var(--text-primary)', cursor: 'pointer'
                      }} 
                    />
                    <div style={{ 
                      width: '36px', height: '36px', borderRadius: 'var(--radius-lg)',
                      background: 'var(--bg-secondary)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <method.icon size={16} style={{ color: 'var(--text-secondary)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '600', letterSpacing: '-0.01em' }}>
                        {method.label}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {method.desc}
                      </div>
                    </div>
                  </motion.label>
                ))}
              </div>
            </form>
          </div>
        </Reveal>

        {/* ══ Cart Summary — Dark Panel ══ */}
        <Reveal delay={0.15}>
          <div style={{ 
            background: 'var(--bg-dark)', color: 'white', 
            padding: 'clamp(2rem, 3vw, 2.5rem)', 
            borderRadius: 'var(--radius-3xl)',
            boxShadow: 'var(--shadow-dark)', position: 'sticky', top: '120px',
            overflow: 'hidden'
          }}>
            {/* Gradient overlay */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', top: '-40%', right: '-20%',
                width: '350px', height: '350px',
                background: 'conic-gradient(from 0deg, rgba(212,160,23,0.08), transparent, rgba(5,150,105,0.05), transparent)',
                borderRadius: '50%', pointerEvents: 'none', filter: 'blur(40px)'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <ShoppingBag size={20} color="var(--gold)" />
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white', letterSpacing: '-0.02em' }}>
                  Manifest Summary
                </h2>
                {cart.length > 0 && (
                  <span style={{
                    marginLeft: 'auto', fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.04em'
                  }}>
                    {cart.length} {cart.length === 1 ? 'ITEM' : 'ITEMS'}
                  </span>
                )}
              </div>
              
              {cart.length === 0 ? (
                <div style={{ padding: '3rem 0', textAlign: 'center' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: 'var(--radius-2xl)',
                    background: 'rgba(255,255,255,0.06)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.25rem'
                  }}>
                    <Package size={22} style={{ color: 'rgba(255,255,255,0.3)' }} />
                  </div>
                  <p style={{ opacity: 0.4, marginBottom: '1.5rem', fontSize: '0.9rem' }}>No items in current allotment.</p>
                  <Link to="/products" className="btn btn-outline" style={{ 
                    borderColor: 'rgba(255,255,255,0.15)', color: 'white',
                    borderRadius: 'var(--radius-xl)'
                  }}>
                    Browse Catalog
                  </Link>
                </div>
              ) : (
                <>
                  <div style={{ 
                    display: 'flex', flexDirection: 'column', gap: '0.75rem', 
                    marginBottom: '2rem', maxHeight: '300px', overflowY: 'auto', 
                    paddingRight: '0.25rem' 
                  }}>
                    <AnimatePresence>
                      {cart.map((item, idx) => (
                        <motion.div 
                          key={`${item.product.id}-${idx}`} 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, height: 0 }}
                          style={{ 
                            display: 'flex', gap: '0.75rem', 
                            background: 'rgba(255,255,255,0.04)', 
                            padding: '1rem', borderRadius: 'var(--radius-xl)', 
                            border: '1px solid rgba(255,255,255,0.06)', 
                            position: 'relative' 
                          }}
                        >
                          <div style={{ 
                            width: '56px', height: '56px', borderRadius: 'var(--radius-lg)', 
                            overflow: 'hidden', flexShrink: 0, background: 'white', 
                            padding: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}>
                            <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                          </div>
                          <div style={{ flexGrow: 1, minWidth: 0 }}>
                            <h4 style={{ 
                              color: 'white', fontSize: '0.85rem', marginBottom: '0.15rem', 
                              fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                            }}>
                              {item.product.name}
                            </h4>
                            <p style={{ 
                              color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', 
                              fontFamily: 'var(--font-mono)' 
                            }}>
                              {item.grams}g
                            </p>
                            <p style={{ 
                              color: 'var(--gold)', fontWeight: '700', marginTop: '0.25rem', 
                              fontSize: '0.92rem' 
                            }}>
                              ₹{item.totalPrice.toFixed(2)}
                            </p>
                          </div>
                          <motion.button 
                            whileHover={{ scale: 1.15, color: '#fca5a5' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.product.id)}
                            style={{ 
                              background: 'transparent', border: 'none', 
                              color: 'rgba(255,255,255,0.25)', cursor: 'pointer',
                              position: 'absolute', top: '0.75rem', right: '0.75rem',
                              padding: '0.25rem'
                            }}
                          >
                            <Trash2 size={14} />
                          </motion.button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div style={{ 
                    borderTop: '1px solid rgba(255,255,255,0.06)', 
                    paddingTop: '1.5rem' 
                  }}>
                    <div style={{ 
                      display: 'flex', justifyContent: 'space-between', 
                      marginBottom: '0.5rem', fontSize: '0.88rem', 
                      color: 'rgba(255,255,255,0.5)' 
                    }}>
                      <span>Subtotal</span>
                      <span>₹{cartTotal.toFixed(2)}</span>
                    </div>
                    <div style={{ 
                      display: 'flex', justifyContent: 'space-between', 
                      marginBottom: '1.5rem', fontSize: '0.82rem', 
                      color: 'rgba(255,255,255,0.35)' 
                    }}>
                      <span>Shipping & Duties</span>
                      <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
                        Pending Grading
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                      paddingTop: '1.25rem', borderTop: '1px dashed rgba(255,255,255,0.08)' 
                    }}>
                      <span style={{ 
                        fontSize: '0.78rem', fontWeight: '700', 
                        fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
                        textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' 
                      }}>
                        Total
                      </span>
                      <span style={{ 
                        fontSize: '1.75rem', fontWeight: '800', color: 'var(--gold)',
                        fontFamily: 'var(--font-display)', letterSpacing: '-0.03em'
                      }}>
                        ₹{cartTotal.toFixed(2)}
                      </span>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-gold)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      form="checkout-form" 
                      className="btn btn-secondary btn-xl" 
                      style={{ 
                        width: '100%', marginTop: '2rem', 
                        borderRadius: 'var(--radius-xl)', height: '3.5rem',
                        fontSize: '0.95rem'
                      }}
                    >
                      Authorize Order
                    </motion.button>
                    <p style={{ 
                      textAlign: 'center', marginTop: '1rem', fontSize: '0.68rem', 
                      color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.06em', textTransform: 'uppercase'
                    }}>
                      Secure End-to-End Encrypted
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
