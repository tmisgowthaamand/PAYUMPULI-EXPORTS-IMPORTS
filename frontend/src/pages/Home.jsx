import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, TrendingUp, Anchor, PackageCheck, Leaf } from 'lucide-react';
import { products } from '../data.js';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

export default function Home() {
  const featured = products.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  return (
    <motion.div initial="hidden" animate="show" variants={containerVariants}>
      
      {/* Ultra Modern Bento Hero */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
        
        {/* Main Hero Card */}
        <motion.div variants={itemVariants} style={{ 
          gridColumn: '1 / -1',
          position: 'relative',
          background: 'var(--primary-color)',
          color: 'white', 
          padding: 'clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 4rem)', 
          borderRadius: '24px', 
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: 'radial-gradient(circle at top left, rgba(251, 191, 36, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.15) 0%, transparent 40%)'
        }}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, type: 'spring' }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50px', fontSize: '0.85rem', marginBottom: '2rem', color: 'var(--secondary-color)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
            <Anchor size={14} /> Govt. Licensed Export & Import
          </motion.div>
          
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', fontFamily: "'Inter', sans-serif", fontWeight: '800', letterSpacing: '-1px' }}>
            Elevating <br/><span style={{ color: 'var(--secondary-color)', display: 'inline-block' }}>Global Trade</span> Standards
          </h1>
          
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '3rem', maxWidth: '650px', lineHeight: '1.7', fontWeight: '400' }}>
            Discover the finest ethically sourced Indian exports, graded securely for international commercial commerce and high-end distribution.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/products">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: '16px' }}>
                Open Catalog <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.95 }} className="btn" style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: '16px', boxShadow: 'none' }}>
                Our Heritage
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Bento Sub-Cards */}
        <motion.div variants={itemVariants} style={{ background: 'white', padding: '3rem 2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: '#fef08a', color: '#854d0e', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Star size={30} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Premium Tier</h3>
          <p style={{ color: 'var(--text-gray)', lineHeight: '1.6', fontSize: '1.05rem', fontWeight: '400' }}>Rigorous multi-layer inspections guarantees you receive only top-grade agricultural output.</p>
        </motion.div>

        <motion.div variants={itemVariants} style={{ background: 'white', padding: '3rem 2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: '#dbeafe', color: '#1e40af', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <ShieldCheck size={30} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Certified Logistics</h3>
          <p style={{ color: 'var(--text-gray)', lineHeight: '1.6', fontSize: '1.05rem', fontWeight: '400' }}>Fully licensed (GSTIN & Export). 100% legally transparent international customs clearance.</p>
        </motion.div>

        <motion.div variants={itemVariants} style={{ background: 'var(--text-dark)', color: 'white', padding: '3rem 2rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', color: '#4ade80', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Leaf size={30} />
          </div>
          <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>Fairly Sourced</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', fontSize: '1.05rem', fontWeight: '400' }}>Direct trade relationships that empower local Indian farms while securing high volume streams.</p>
        </motion.div>
      </section>

      {/* Featured Collection Strip */}
      <motion.section variants={itemVariants} style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: "'Playfair Display', serif" }}>Signature Exports</h2>
            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginTop: '0.5rem' }}>Our most demanded commercial batches</p>
          </div>
          <Link to="/products" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', borderRadius: '12px' }}>
            View Full Catalog <ArrowRight size={16} />
          </Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {featured.map((product, idx) => (
            <motion.div key={product.id} variants={itemVariants} custom={idx}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
