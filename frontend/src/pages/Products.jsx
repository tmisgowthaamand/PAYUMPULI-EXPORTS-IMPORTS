import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data.js';
import { Search, SlidersHorizontal, LayoutGrid, List, ArrowUpRight, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import FloatingOrb from '../components/FloatingOrb';
import SectionHeader from '../components/SectionHeader';

export default function Products() {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryNames = ['all', 'Palm Jaggery', 'Turmeric', 'Senna', 'Black Gram', 'Neem', 'Palmyra', 'Jaggery Powder', 'Palm Candy', 'Jamun'];

  let filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'all' || p.name.toLowerCase().includes(activeCategory.toLowerCase());
    return matchSearch && matchCategory;
  });

  if (sortOrder === 'price-asc') {
    filteredProducts.sort((a, b) => a.pricePerGram - b.pricePerGram);
  } else if (sortOrder === 'price-desc') {
    filteredProducts.sort((a, b) => b.pricePerGram - a.pricePerGram);
  } else if (sortOrder === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="page-wrapper" data-page="products" style={{ paddingTop: '2rem' }}>
      
      {/* ── Page Header — Minimal, powerful ── */}
      <section style={{ position: 'relative', marginBottom: '3rem' }}>
        <FloatingOrb size="300px" color="rgba(5,150,105,0.06)" top="-20%" left="10%" />
        
        <SectionHeader 
          badge={`${products.length} Products Available`}
          badgeVariant="badge-emerald"
          badgeIcon={<Package size={14} style={{ marginRight: '0.25rem' }} />}
          title="Product"
          titleAccent="Catalog"
          accentColor="var(--emerald)"
          subtitle="Explore our complete range of ethically sourced, Grade-A certified agricultural exports from the heart of Tamil Nadu."
        />
      </section>

      {/* ── Category Filter Pills ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{ 
          display: 'flex', gap: '0.5rem', flexWrap: 'wrap', 
          marginBottom: '1.5rem', paddingBottom: '1.5rem',
          borderBottom: '1px solid var(--border)'
        }}
      >
        {categoryNames.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: activeCategory === cat ? 'var(--text-primary)' : 'var(--border)',
              background: activeCategory === cat ? 'var(--text-primary)' : 'transparent',
              color: activeCategory === cat ? 'var(--text-inverse)' : 'var(--text-tertiary)',
              fontSize: '0.78rem',
              fontWeight: '600',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textTransform: cat === 'all' ? 'capitalize' : 'none'
            }}
          >
            {cat === 'all' ? 'All Products' : cat}
          </motion.button>
        ))}
      </motion.div>

      {/* ── Search & Toolbelt — Glassmorphic ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ 
          position: 'sticky', top: '85px', zIndex: 50, 
          background: 'rgba(250,250,249,0.85)', backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          padding: '1rem 1.25rem', borderRadius: 'var(--radius-2xl)', 
          border: '1px solid var(--border)', marginBottom: '2.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* Search Input */}
          <div style={{ position: 'relative', flexGrow: 1, minWidth: '200px' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search inventory..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ 
                width: '100%', height: '2.75rem', padding: '0 1rem 0 2.75rem', 
                background: 'white', border: '1px solid var(--border)', 
                borderRadius: 'var(--radius-xl)', outline: 'none', fontSize: '0.88rem',
                fontFamily: 'var(--font-body)', transition: 'all 0.2s',
                color: 'var(--text-primary)'
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--text-primary)'; e.target.style.boxShadow = '0 0 0 3px var(--ring)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
            />
          </div>

          {/* Sort */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            background: 'white', padding: '0 1rem', height: '2.75rem', 
            borderRadius: 'var(--radius-xl)', border: '1px solid var(--border)'
          }}>
            <SlidersHorizontal size={14} color="var(--text-muted)" />
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              style={{ 
                border: 'none', background: 'transparent', outline: 'none', 
                fontWeight: '600', cursor: 'pointer', fontSize: '0.82rem',
                fontFamily: 'var(--font-body)', color: 'var(--text-secondary)'
              }}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="name-asc">Name A-Z</option>
            </select>
          </div>

          {/* View Toggle */}
          <div style={{ 
            padding: '0.35rem', background: 'var(--bg-secondary)', 
            borderRadius: 'var(--radius-lg)', display: 'flex', gap: '0.2rem' 
          }}>
            {[
              { mode: 'grid', icon: LayoutGrid },
              { mode: 'list', icon: List }
            ].map(({ mode, icon: Icon }) => (
              <motion.button 
                key={mode}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode(mode)} 
                style={{ 
                  padding: '0.4rem', 
                  background: viewMode === mode ? 'white' : 'transparent', 
                  border: 'none', borderRadius: 'var(--radius-md)', 
                  cursor: 'pointer', 
                  boxShadow: viewMode === mode ? 'var(--shadow-sm)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <Icon size={16} color={viewMode === mode ? 'var(--text-primary)' : 'var(--text-muted)'} />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Results Count ── */}
      <div style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <span style={{ 
          fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: '800',
          color: 'var(--text-primary)', letterSpacing: '0.04em', textTransform: 'uppercase'
        }}>
          Showing {filteredProducts.length} of {products.length} products
        </span>
      </div>

      {/* ── Product Grid ── */}
      <AnimatePresence mode='wait'>
        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            style={{ textAlign: 'center', padding: '8rem 0' }}
          >
            <div style={{
              width: '60px', height: '60px', borderRadius: 'var(--radius-2xl)',
              background: 'var(--bg-secondary)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <Search size={24} style={{ color: 'var(--text-muted)' }} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>No results found</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Try adjusting your search or filter criteria.</p>
          </motion.div>
        ) : (
          <motion.div 
            key={viewMode + activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(300px, 1fr))' : '1fr', 
              gap: viewMode === 'grid' ? '1rem' : '0.75rem'
            }}
          >
            {filteredProducts.map((product, index) => (
              <Reveal key={product.id} delay={Math.min(index * 0.04, 0.4)}>
                {viewMode === 'grid' ? (
                  /* ── Grid Card ── */
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="card"
                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <Link to={`/product/${product.id}`} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      height: '240px', background: 'var(--bg-secondary)',
                      padding: '1.5rem', overflow: 'hidden', position: 'relative'
                    }}>
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        src={product.image} alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                      <div style={{
                        position: 'absolute', top: '0.75rem', right: '0.75rem',
                        width: '28px', height: '28px', borderRadius: 'var(--radius-full)',
                        background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        opacity: 0, transition: 'opacity 0.3s'
                      }}
                        className="hover-reveal"
                      >
                        <ArrowUpRight size={12} />
                      </div>
                    </Link>
                    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '-0.01em', lineHeight: '1.3' }}>{product.name}</h3>
                        <span className="badge badge-gold" style={{ flexShrink: 0, fontSize: '0.65rem', padding: '0.25rem 0.6rem' }}>
                          ₹{product.pricePerGram}/g
                        </span>
                      </div>
                      <p style={{
                        fontSize: '0.8rem', color: 'var(--text-tertiary)',
                        lineHeight: '1.6', flexGrow: 1, marginBottom: '1.25rem'
                      }}>
                        {product.description.substring(0, 85)}...
                      </p>
                      <Link to={`/product/${product.id}`} className="btn btn-outline" style={{ 
                        width: '100%', height: '2.5rem', fontSize: '0.82rem',
                        borderRadius: 'var(--radius-lg)' 
                      }}>
                        View Details <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  /* ── List Card ── */
                  <motion.div
                    whileHover={{ x: 4, boxShadow: 'var(--shadow-lg)' }}
                    transition={{ duration: 0.2 }}
                    className="card"
                    style={{
                      padding: '1.25rem',
                      display: 'flex', gap: '1.5rem', alignItems: 'center'
                    }}
                  >
                    <Link to={`/product/${product.id}`} style={{
                      width: '100px', height: '100px',
                      background: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '0.75rem', flexShrink: 0, overflow: 'hidden'
                    }}>
                      <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Link>
                    <div style={{ flexGrow: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', letterSpacing: '-0.01em' }}>{product.name}</h3>
                        <span style={{ 
                          fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                          fontWeight: '700', color: 'var(--text-primary)' 
                        }}>
                          ₹{product.pricePerGram}<span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>/g</span>
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-tertiary)', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                        {product.description.substring(0, 120)}...
                      </p>
                      <Link to={`/product/${product.id}`} className="btn btn-outline" style={{ 
                        height: '2.25rem', fontSize: '0.78rem', padding: '0 1rem',
                        borderRadius: 'var(--radius-lg)' 
                      }}>
                        Details <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </Reveal>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
