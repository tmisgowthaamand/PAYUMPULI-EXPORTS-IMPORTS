import { products } from '../data.js';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Zap, Star, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featured = products.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 20, stiffness: 100 } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="section-padding"
    >
      {/* Mega Hero Section */}
      <section style={{ marginBottom: '8rem', textAlign: 'center' }}>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '2rem' }}
        >
          <span style={{ 
            display: 'inline-flex', 
            padding: '0.5rem 1rem', 
            background: 'var(--accent)', 
            color: 'var(--primary)', 
            borderRadius: '2rem', 
            fontSize: '0.8rem', 
            fontWeight: '700', 
            letterSpacing: '0.05em', 
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            border: '1px solid var(--border)'
          }}>
            Global Export Excellence
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '0.95', marginBottom: '2rem' }}>
            Elevate Your <span className="font-serif" style={{ color: 'var(--secondary)' }}>Sourcing</span> <br /> 
            Standards.
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'var(--muted-foreground)' }}>
            Empowering international trade with ethically sourced, premium agricultural products from the heart of India.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/products" className="btn btn-primary" style={{ height: '3.5rem', padding: '0 2.5rem', fontSize: '1.1rem', borderRadius: '3rem' }}>
              Explore Catalog <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-outline" style={{ height: '3.5rem', padding: '0 2.5rem', fontSize: '1.1rem', borderRadius: '3rem' }}>
              Our Story
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Highlights */}
      <section style={{ marginBottom: '8rem' }}>
        <div className="bento-grid">
          {/* Main Large Card */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              gridColumn: 'span 2', 
              gridRow: 'span 2', 
              background: 'var(--primary)', 
              color: 'white', 
              padding: '3rem', 
              borderRadius: 'var(--radius)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
          >
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'var(--secondary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2 }}></div>
            <Globe size={48} color="var(--secondary)" style={{ marginBottom: '2rem' }} />
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Global Supply Chain, <br/> Localized Quality.</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '400px' }}>
              Spanning across 15+ countries with a dedicated logistics network ensuring seed-to-shelf integrity.
            </p>
          </motion.div>

          {/* Metric Card */}
          <motion.div 
            variants={itemVariants}
            className="card"
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}
          >
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--secondary)' }}>61+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', fontWeight: '600', textTransform: 'uppercase' }}>Export Products</div>
          </motion.div>

          {/* Icon Card 1 */}
          <motion.div 
            variants={itemVariants}
            className="card"
            style={{ padding: '2rem', background: 'var(--accent)' }}
          >
            <ShieldCheck size={32} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Certified Quality</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>Full compliance with international phytosanitary standards.</p>
          </motion.div>

          {/* Icon Card 2 */}
          <motion.div 
            variants={itemVariants}
            className="card"
            style={{ padding: '2rem' }}
          >
            <Zap size={32} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Prime Reliability</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>Real-time logistics tracking and dedicated trade support.</p>
          </motion.div>

          {/* Social Proof Card */}
          <motion.div 
            variants={itemVariants}
            className="card"
            style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
          >
            <div style={{ display: 'flex', background: 'var(--primary)', padding: '0.75rem', borderRadius: '1rem' }}>
              <Trophy size={24} color="var(--secondary)" />
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Award Winning</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>Best Indian Exporter 2025</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Collections (The "Bites" feel) */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Signature Exports</h2>
            <p style={{ color: 'var(--muted-foreground)' }}>The finest selections from our curated 61-product inventory.</p>
          </div>
          <Link to="/products" className="nav-link" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View Full Inventory <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          {featured.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ 
                width: '100%', 
                height: '250px', 
                background: 'var(--accent)', 
                borderRadius: 'calc(var(--radius) / 2)',
                marginBottom: '1.5rem',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
              }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{product.name}</h3>
                <Star size={16} fill="var(--secondary)" color="var(--secondary)" />
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', flexGrow: 1, marginBottom: '2rem' }}>
                {product.description.substring(0, 80)}...
              </p>
              <Link to={`/product/${product.id}`} className="btn btn-outline" style={{ width: '100%' }}>
                View Specifications
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
