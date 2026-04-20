import { Shield, Globe, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Editorial Header */}
      <div style={{ textAlign: 'center', padding: '6rem 2rem', marginBottom: '4rem', background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.05) 0%, transparent 70%)' }}>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--primary-color)', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif", fontWeight: '800' }}>
          Cultivating <span style={{ fontStyle: 'italic', color: 'var(--secondary-hover)' }}>Trust.</span> <br/>Delivering <span style={{ fontStyle: 'italic', color: 'var(--secondary-hover)' }}>Quality.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', letterSpacing: '0.5px' }}>
          Bridging the gap between the rich agricultural soils of South India and the demands of modern global enterprise.
        </motion.p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.2fr)', gap: '6rem', alignItems: 'center', marginBottom: '8rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={textVariants}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(15, 23, 42, 0.05)', borderRadius: '50px', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: '600', color: 'var(--primary-color)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Our Origins
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)', fontWeight: '700' }}>Rooted in Tamil Nadu</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-gray)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Founded in Ramanathapuram, <strong>PAYUMPULI EXPORTS & IMPORTS</strong> operates under the dedicated leadership of Saravanapandian. We grew from a profound respect for local agriculture into a premier commercial exporter.
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-gray)', lineHeight: '1.9' }}>
            By cutting out unnecessary corporate middlemen, we ensure that the farmers who cultivate our world-class produce are paid fairly, while our international clients secure absolutely uncompromised quality grading.
          </p>
        </motion.div>

        {/* Floating Feature Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: 'var(--secondary-color)', borderRadius: '50%', filter: 'blur(80px)', opacity: '0.1' }}></div>
          
          <motion.div variants={cardVariants} style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', transform: 'translateY(2rem)' }}>
            <Globe color="var(--secondary-color)" size={32} style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Global Focus</h4>
            <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>Logistical superiority delivering to multiple continents.</p>
          </motion.div>

          <motion.div variants={cardVariants} style={{ background: 'var(--primary-color)', color: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }}>
            <Target color="#4ade80" size={32} style={{ marginBottom: '1rem' }} />
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Precision</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6' }}>Executing high-tonnage exports rapidly and legally.</p>
          </motion.div>

          <motion.div variants={cardVariants} style={{ background: 'var(--primary-color)', color: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', transform: 'translateY(2rem)' }}>
            <Shield color="var(--secondary-color)" size={32} style={{ marginBottom: '1rem' }} />
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Integrity</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6' }}>Zero deviations on phytosanitary and QA metrics.</p>
          </motion.div>

          <motion.div variants={cardVariants} style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)' }}>
            <Users color="var(--secondary-color)" size={32} style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Community</h4>
            <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: '1.6' }}>Sustaining the regional agricultural economy.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
