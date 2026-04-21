import { Mail, MapPin, Send, Building2, Clock, MessageSquare, Sparkles, PhoneCall, Headphones, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import FloatingOrb from '../components/FloatingOrb';
import SectionHeader from '../components/SectionHeader';
import AnimatedText from '../components/AnimatedText';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus(''), 4000);
      e.target.reset();
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Building2,
      title: 'Global Headquarters',
      content: '7/138-5, 1st floor, Eswaran Kovil North Street, Emaneswaram, Ramanathapuram - 623701, Tamil Nadu, India',
      color: 'var(--rose)'
    },
    {
      icon: PhoneCall,
      title: 'Trade & Logistics',
      content: '+91 89402 11958 \n +91 86820 51068',
      color: 'var(--emerald)'
    },
    {
      icon: Mail,
      title: 'Export Operations Desk',
      content: 'payumpuliexportsimports079@gmail.com',
      color: 'var(--sapphire)'
    },
    {
      icon: Clock,
      title: 'Operational Hours',
      content: 'Mon - Sun: 9:00 AM - 6:00 PM IST \n 24/7 Support for Active Shipments',
      color: 'var(--gold)'
    }
  ];

  const inputStyle = (field) => ({
    width: '100%',
    height: '3.5rem',
    padding: '0 1.5rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid',
    borderColor: focusedField === field ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)',
    borderRadius: 'var(--radius-xl)',
    color: 'white',
    outline: 'none',
    fontSize: '1rem',
    fontFamily: 'var(--font-body)',
    transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    boxShadow: focusedField === field ? '0 0 0 4px rgba(255,255,255,0.05)' : 'none'
  });

  return (
    <div className="page-wrapper" data-page="contact" style={{ paddingTop: '2rem' }}>

      {/* ════════════════════════════════════
          HERO — Cinematic 
          ════════════════════════════════════ */}
      <section style={{ textAlign: 'center', marginBottom: 'clamp(5rem, 10vw, 8rem)', position: 'relative' }}>
        <FloatingOrb size="400px" color="rgba(225,29,72,0.15)" top="-20%" left="20%" />
        <FloatingOrb size="350px" color="rgba(212,160,23,0.1)" top="30%" right="15%" delay={2} />

        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <motion.div whileHover={{ scale: 1.05 }} className="badge badge-glow" style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem', background: 'var(--bg-secondary)', color: 'var(--rose)' }}>
              <MessageSquare size={14} style={{ marginRight: '0.5rem' }} /> Establish Trade Dialogue
            </motion.div>
          </div>
        </Reveal>

        <h1 style={{
          fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
          lineHeight: '0.9',
          letterSpacing: '-0.05em',
          marginBottom: '2rem',
          fontWeight: 900,
          textTransform: 'uppercase'
        }}>
          <Reveal delay={0.1}>Architect Your</Reveal>
          <Reveal delay={0.2}><span className="font-serif" style={{ color: 'var(--rose)', textTransform: 'none' }}>Supply Chain.</span></Reveal>
        </h1>

        <Reveal delay={0.3}>
          <AnimatedText 
            text="Connect with our global export desk for bulk commercial inquiries, custom phytosanitary requirements, or international logistics coordination."
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'var(--text-tertiary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
            delay={0.4}
          />
        </Reveal>
      </section>

      {/* ════════════════════════════════════
          FORM SECTION — Monolithic Dark UI
          ════════════════════════════════════ */}
      <section style={{ marginBottom: 'clamp(5rem, 10vw, 8rem)' }}>
        <Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '0', borderRadius: 'var(--radius-3xl)', overflow: 'hidden',
            border: '1px solid var(--border)', boxShadow: 'var(--shadow-2xl)'
          }}>

            {/* Left — Impact Panel */}
            <div style={{
              background: 'var(--bg-secondary)', padding: 'clamp(3rem, 5vw, 5rem)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden'
            }}>
              {/* Grid overlay */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.4,
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px', pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.04em',
                  fontWeight: 900
                }}>
                  Transmit<br />
                  <span className="font-serif" style={{ color: 'var(--rose)', fontWeight: 400 }}>Requirements</span>
                </h2>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem', maxWidth: '400px' }}>
                  Detail your volume needs, destination port, and grading parameters. Our logistics architects will dispatch a comprehensive quote within 24 hours.
                </p>

                {/* Quick Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                  {[
                    { num: '< 24h', label: 'Response Target' },
                    { num: 'Global', label: 'CIF / FOB Operations' },
                    { num: 'LCL/FCL', label: 'Freight Scalability' },
                    { num: '100%', label: 'Traceability' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: '1.8rem',
                        fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '0.2rem',
                        color: 'var(--text-primary)'
                      }}>
                        {stat.num}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                        color: 'var(--text-muted)', letterSpacing: '0.08em',
                        textTransform: 'uppercase', fontWeight: 600
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Info */}
              <motion.div whileHover={{ scale: 1.02 }} style={{ 
                marginTop: '4rem', padding: '1.5rem', background: 'white', 
                borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border)',
                position: 'relative', zIndex: 1, display: 'flex', gap: '1.25rem', alignItems: 'center' 
              }}>
                 <div style={{ padding: '0.75rem', background: 'var(--rose-surface)', borderRadius: 'var(--radius-xl)' }}>
                    <Headphones size={24} color="var(--rose)" />
                 </div>
                 <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Trade Line</div>
                    <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>+91 89402 11958</div>
                 </div>
              </motion.div>
            </div>

            {/* Right — Dark Premium Form */}
            <div style={{
              background: 'var(--bg-dark)', padding: 'clamp(3rem, 5vw, 5rem)',
              position: 'relative', overflow: 'hidden'
            }}>
              <FloatingOrb size="500px" color="rgba(225,29,72,0.15)" top="-30%" right="-30%" />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>Entity / Company</label>
                      <input required type="text" placeholder="Global Trade Corp" style={inputStyle('company')} onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>Official Communication</label>
                      <input required type="email" placeholder="procurement@entity.com" style={inputStyle('email')} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>Contact Node</label>
                      <input type="tel" placeholder="+1 (INT) XXX-XXXX" style={inputStyle('phone')} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>Destination Port</label>
                      <input required type="text" placeholder="e.g. Jebel Ali, UAE" style={inputStyle('destination')} onFocus={() => setFocusedField('destination')} onBlur={() => setFocusedField(null)} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>Trade Manifest & Inquiry</label>
                    <textarea required rows="6" placeholder="Specify SKU volume (Metric Tons / KGs), target INCORTERMS (CIF/FOB), and phytosanitary requirements..." style={{ ...inputStyle('message'), height: 'auto', padding: '1.25rem 1.5rem', resize: 'none' }} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(225,29,72,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'sending'}
                    className="btn btn-secondary btn-xl"
                    style={{
                      width: '100%', marginTop: '1rem',
                      borderRadius: 'var(--radius-xl)',
                      height: '4rem', fontSize: '1rem',
                      background: 'white', color: 'var(--bg-dark)'
                    }}
                  >
                    <AnimatePresence mode='wait'>
                      {status === 'sending' ? (
                        <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          Transmitting Protocol...
                        </motion.span>
                      ) : status === 'sent' ? (
                        <motion.span key="sent" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} style={{ color: 'var(--emerald)' }}>
                          ✓ Inquiry Registered
                        </motion.span>
                      ) : (
                        <motion.span key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800 }}>
                          Initialize Transmission <Send size={18} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════
          CONTACT INFO CARDS — Glassmorphism Grid
          ════════════════════════════════════ */}
      <section style={{ marginBottom: 'clamp(5rem, 10vw, 8rem)' }}>
        <SectionHeader 
          align="center"
          title="Global"
          titleAccent="Infrastructure"
          subtitle="Physical command centers and communication nodes for global trade operations."
        />
        
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem', marginTop: '3rem'
        }}>
          {contactInfo.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: 'var(--shadow-2xl)' }}
                className="card glass"
                style={{ padding: '2.5rem', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-3xl)' }}
              >
                <div style={{
                  position: 'absolute', top: '-20px', right: '-20px',
                  width: '100px', height: '100px',
                  background: `radial-gradient(circle, ${item.color}20 0%, transparent 70%)`,
                  pointerEvents: 'none'
                }} />
                <div style={{
                  width: '56px', height: '56px', borderRadius: 'var(--radius-2xl)',
                  background: `${item.color}15`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'
                }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  {item.title}
                </h4>
                <p style={{
                  color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: '1.7', 
                  whiteSpace: 'pre-line', overflowWrap: 'anywhere', wordBreak: 'break-word'
                }}>
                  {item.content}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
