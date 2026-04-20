import { Mail, Phone, MapPin, Send, Building2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus(''), 3000);
      e.target.reset();
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="section-padding"
    >
      <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          style={{ fontSize: '5rem', marginBottom: '1.5rem' }}
        >
          Let's Start a <span className="font-serif" style={{ color: 'var(--secondary)' }}>Dialogue.</span>
        </motion.h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--muted-foreground)' }}>
          Whether for high-tonnage commercial deals or specific grading inquiries, our trade desk is ready.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', alignItems: 'start' }}>
        
        {/* Info Grid */}
        <div style={{ display: 'grid', gap: '4rem' }}>
          {[
            { icon: Building2, title: 'Regional Headquarters', content: '7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Ramanathapuram - 623701, Tamil Nadu' },
            { icon: Phone, title: 'Trade Lines', content: '+91 89402 11958 | +91 86820 51068' },
            { icon: Mail, title: 'Official Email', content: 'payumpuli79@gmail.com' }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ x: -20, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ delay: 0.1 * idx }}
              style={{ display: 'flex', gap: '2rem' }}
            >
              <div style={{ width: '64px', height: '64px', background: 'var(--accent)', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <item.icon size={28} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', lineHeight: '1.6' }}>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Form Card */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="card"
          style={{ padding: '4rem', background: 'var(--primary)', color: 'white', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '250px', height: '250px', background: 'var(--secondary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.1 }}></div>
          
          <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '3rem' }}>Send an Inquiry</h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)' }}>Full Name</label>
              <input required type="text" style={{ width: '100%', height: '3.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '0 1.5rem', color: 'white', outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)' }}>Email Address</label>
              <input required type="email" style={{ width: '100%', height: '3.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '0 1.5rem', color: 'white', outline: 'none' }} />
            </div>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)' }}>Manifest Requirements</label>
              <textarea required rows="5" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '1.5rem', color: 'white', outline: 'none', resize: 'none' }}></textarea>
            </div>

            <button 
              disabled={status === 'sending'}
              className="btn" 
              style={{ background: 'var(--secondary)', color: 'var(--primary)', height: '4rem', borderRadius: '1rem', width: '100%', fontSize: '1.1rem' }}
            >
              {status === 'sending' ? 'Transmitting...' : status === 'sent' ? 'Inquiry Delivered!' : 'Send Inquiry'}
              {status === '' && <Send size={20} />}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
