import { Mail, Phone, MapPin, Send, Building } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending inquiry...');
    setTimeout(() => {
      setStatus('Success! Our international trade team will contact you shortly.');
      e.target.reset();
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20 } }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, delay: 0.2 } }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring' }} style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: "'Inter', sans-serif", fontWeight: '800', letterSpacing: '-1px', marginBottom: '1rem' }}>
          Open a <span style={{ color: 'var(--primary-color)' }}>Trade Dialogue</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--text-gray)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto' }}>
          We are fully prepared to fulfill your global bulk requirements. Contact our executive team today.
        </motion.p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center', marginBottom: '5rem' }}>
        
        {/* Contact Info Side */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ padding: '1rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary-color)', padding: '1.2rem', borderRadius: '20px', color: 'var(--secondary-color)', boxShadow: 'var(--shadow-md)' }}>
                <Building size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', fontWeight: '700', color: 'var(--primary-color)' }}>Address</h4>
                <p style={{ color: '#1e293b', lineHeight: '1.7', fontSize: '1.05rem', fontWeight: '500' }}>
                  7/138-5, 1st floor, Eswaran Kovil North Street,<br/>
                  Nainarkovil Road, Emaneswaram (Po),<br/>
                  Paramakudi (Tk), Ramanathapuram - 623701,<br/>
                  Tamil Nadu, South India
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary-color)', padding: '1.2rem', borderRadius: '20px', color: 'var(--secondary-color)', boxShadow: 'var(--shadow-md)' }}>
                <Phone size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', fontWeight: '700', color: 'var(--primary-color)' }}>Phone</h4>
                <p style={{ color: '#1e293b', fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: '500' }}>+91 89402 11958</p>
                <p style={{ color: '#1e293b', fontSize: '1.1rem', fontWeight: '500' }}>+91 86820 51068</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--primary-color)', padding: '1.2rem', borderRadius: '20px', color: 'var(--secondary-color)', boxShadow: 'var(--shadow-md)' }}>
                <Mail size={28} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', fontWeight: '700', color: 'var(--primary-color)' }}>Email</h4>
                <p style={{ color: '#1e293b', fontSize: '1.1rem', fontWeight: '500' }}>payumpuli79@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form Side */}
        <motion.div variants={formVariants} initial="hidden" animate="show" style={{ background: 'white', padding: '3.5rem', borderRadius: '30px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '200px', height: '200px', background: 'var(--secondary-color)', borderRadius: '50%', filter: 'blur(60px)', opacity: '0.1' }}></div>
          
          <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: '800', letterSpacing: '-0.5px' }}>Transmit Inquiry</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: '1px' }}>Executive Name</label>
              <motion.input whileFocus={{ scale: 1.01 }} type="text" placeholder="John Doe" required style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', background: 'transparent', padding: '1rem 0', outline: 'none', fontSize: '1.1rem', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = '#e2e8f0'} />
            </div>
            
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: '1px' }}>Corporate Email</label>
              <motion.input whileFocus={{ scale: 1.01 }} type="email" placeholder="john@enterprise.com" required style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', background: 'transparent', padding: '1rem 0', outline: 'none', fontSize: '1.1rem', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = '#e2e8f0'} />
            </div>

            <div className="form-group" style={{ marginBottom: '2.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: '1px' }}>Logistics Requirements</label>
              <motion.textarea whileFocus={{ scale: 1.01 }} rows="4" placeholder="Specify tonnages, port destinations, or grading..." required style={{ width: '100%', border: 'none', borderBottom: '2px solid #e2e8f0', background: 'transparent', padding: '1rem 0', outline: 'none', fontSize: '1.1rem', resize: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'} onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}></motion.textarea>
            </div>

            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', borderRadius: '16px' }}>
              <Send size={18} /> Transmit Request
            </motion.button>
            
            {status && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '1.5rem', color: status.includes('Success') ? 'var(--success)' : 'var(--primary-color)', textAlign: 'center', fontWeight: '600' }}>
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
