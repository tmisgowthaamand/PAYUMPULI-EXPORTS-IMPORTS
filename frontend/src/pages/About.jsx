import { Shield, Globe, Users, Target, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="section-padding"
    >
      {/* Editorial Title */}
      <section style={{ marginBottom: '10rem' }}>
        <motion.div variants={slideIn} style={{ maxWidth: '900px' }}>
          <span style={{ color: 'var(--secondary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>
            Established Excellence Since 1979
          </span>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', marginBottom: '3rem', lineHeight: '0.9' }}>
            The Architecture of <br />
            <span className="font-serif" style={{ color: 'var(--muted-foreground)', opacity: 0.5 }}>Export Integrity.</span>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--muted-foreground)', borderLeft: '2px solid var(--border)', paddingLeft: '2rem' }}>
              Founded in the heritage-rich soils of Tamil Nadu, PAYUMPULI EXPORTS & IMPORTS represents the bridge between traditional Indian agriculture and the precision requirements of the global market.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: '500' }}>
              Led by Saravanapandian, our mission is built on the pillars of transparency, direct-to-farm sourcing, and uncompromising logistical excellence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Narrative Section 1 */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center', marginBottom: '10rem' }}>
        <motion.div 
          variants={slideIn}
          style={{ 
            aspectRatio: '4/5', 
            background: 'var(--accent)', 
            borderRadius: '2rem', 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem',
            position: 'relative'
          }}
        >
          <div style={{ position: 'absolute', top: '2rem', left: '2rem', background: 'var(--primary)', color: 'white', padding: '1rem 2rem', borderRadius: '1rem', fontWeight: '700', fontSize: '1.2rem' }}>
            EST. 1979
          </div>
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ width: '300px', height: '300px', border: '1px dashed var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Globe size={100} color="var(--primary)" style={{ opacity: 0.1 }} />
          </motion.div>
        </motion.div>

        <motion.div variants={slideIn}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem' }}>Direct Sourcing. <br/> Zero Compromise.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              { title: 'Global Compliance', desc: 'Every shipment is verified against stringent international phytosanitary and QA metrics.', icon: Shield },
              { title: 'Farmers First', desc: 'We operate without middlemen, ensuring maximum value for regional agricultural communities.', icon: Users },
              { title: 'Logistics Precision', desc: 'Real-time tracking and temperature-controlled supply chains for perishable excellence.', icon: Target }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--primary)', color: 'white', borderRadius: '12px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--muted-foreground)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Commitment Banner */}
      <motion.section 
        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
        style={{ 
          background: 'var(--primary)', 
          color: 'white', 
          padding: '5rem 4rem', 
          borderRadius: '3rem', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--secondary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.15 }}></div>
        <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>Certified to Serve the World.</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Our quality management systems are recognized by international accreditation bodies, ensuring your trade remains secure and seamless.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          {['ISO 9001', 'FSSAI Certified', 'Export Promotion Council', 'Logistics Gold'].map((badge, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '700', fontSize: '1.1rem' }}>
              <CheckCircle size={20} color="var(--secondary)" />
              {badge}
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
