import { useState } from 'react';
import { products } from '../data.js';
import { Search, Filter, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Products() {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  let filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOrder === 'price-asc') {
    filteredProducts.sort((a, b) => a.pricePerGram - b.pricePerGram);
  } else if (sortOrder === 'price-desc') {
    filteredProducts.sort((a, b) => b.pricePerGram - a.pricePerGram);
  } else if (sortOrder === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 120 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="section-padding"
    >
      {/* Search & Toolbelt */}
      <div style={{ position: 'sticky', top: '90px', z-index: 50, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid var(--border)', marginBottom: '4rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) auto auto', gap: '1.5rem', alignItems: 'center' }}>
          
          {/* Enhanced Search Input */}
          <div style={{ position: 'relative' }}>
            <Search size={18} color="var(--muted-foreground)" style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search global inventory..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', height: '3.5rem', padding: '0 1rem 0 3.5rem', background: 'var(--accent)', border: '1px solid transparent', borderRadius: '1rem', outline: 'none', fontSize: '1rem', transition: 'all 0.2s' }}
              onFocus={(e) => { e.target.style.background = 'white'; e.target.style.borderColor = 'var(--primary)'; }}
              onBlur={(e) => { e.target.style.background = 'var(--accent)'; e.target.style.borderColor = 'transparent'; }}
            />
          </div>

          {/* Sort Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0 1.25rem', height: '3.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            <SlidersHorizontal size={18} color="var(--primary)" />
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              <option value="default">Sort by Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>

          <div style={{ padding: '0.5rem', background: 'var(--accent)', borderRadius: '0.75rem', display: 'flex', gap: '0.25rem' }}>
            <button onClick={() => setViewMode('grid')} style={{ padding: '0.5rem', background: viewMode === 'grid' ? 'white' : 'transparent', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', boxShadow: viewMode === 'grid' ? 'var(--shadow-sm)' : 'none' }}>
              <LayoutGrid size={18} color={viewMode === 'grid' ? 'var(--primary)' : 'var(--muted-foreground)'} />
            </button>
            <button onClick={() => setViewMode('list')} style={{ padding: '0.5rem', background: viewMode === 'list' ? 'white' : 'transparent', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', boxShadow: viewMode === 'list' ? 'var(--shadow-sm)' : 'none' }}>
              <List size={18} color={viewMode === 'list' ? 'var(--primary)' : 'var(--muted-foreground)'} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode='wait'>
        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            style={{ textAlign: 'center', padding: '10rem 0' }}
          >
            <h2 style={{ fontSize: '2.5rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>No results matched.</h2>
            <p>Try refining your search or sorting criteria.</p>
          </motion.div>
        ) : (
          <motion.div 
            key={viewMode}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(320px, 1fr))' : '1fr', 
              gap: '2rem' 
            }}
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants} layout>
                <div 
                  className="card" 
                  style={{ 
                    padding: '1.5rem', 
                    display: 'flex', 
                    flexDirection: viewMode === 'grid' ? 'column' : 'row', 
                    gap: viewMode === 'grid' ? '1.5rem' : '3rem',
                    alignItems: viewMode === 'grid' ? 'flex-start' : 'center'
                  }}
                >
                  <div style={{ 
                    width: viewMode === 'grid' ? '100%' : '180px', 
                    height: viewMode === 'grid' ? '250px' : '180px', 
                    background: 'var(--accent)', 
                    borderRadius: '1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    padding: '1.5rem',
                    flexShrink: 0
                  }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <h3 style={{ fontSize: '1.5rem' }}>{product.name}</h3>
                      <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.25rem' }}>₹{product.pricePerGram} <span style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>/g</span></div>
                    </div>
                    <p style={{ color: 'var(--muted-foreground)', marginBottom: '2rem', fontSize: '1rem' }}>{product.description.substring(0, 150)}...</p>
                    <Link to={`/product/${product.id}`} className="btn btn-outline" style={{ borderRadius: '0.75rem' }}>
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
