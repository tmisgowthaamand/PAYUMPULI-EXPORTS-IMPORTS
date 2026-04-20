import { useState } from 'react';
import { products } from '../data.js';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Products() {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

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
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Cinematic Header */}
      <div style={{ position: 'relative', marginBottom: '4rem', padding: '4rem 2rem', background: 'var(--primary-color)', borderRadius: '24px', overflow: 'hidden', color: 'white', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--secondary-color)', borderRadius: '50%', filter: 'blur(80px)', opacity: '0.15' }}></div>
        <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: '#3b82f6', borderRadius: '50%', filter: 'blur(80px)', opacity: '0.1' }}></div>
        
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: 'white', fontWeight: '800' }}>
          Global <span style={{ color: 'var(--secondary-color)' }}>Inventory</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontWeight: '400' }}>
          Explore our certified range of ethically sourced Indian exports, graded for international excellence.
        </motion.p>
      </div>

      {/* Modern Filter Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Search */}
        <div className="glass-card" style={{ padding: '0.5rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--border-color)', borderRadius: '50px' }}>
          <Search size={20} color="var(--primary-color)" />
          <input 
            type="text" 
            placeholder="Search by name or category..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flexGrow: 1, border: 'none', background: 'transparent', padding: '0.8rem 0', outline: 'none', fontSize: '1rem', fontWeight: '500', color: 'var(--primary-color)' }}
          />
        </div>

        {/* Sort & Count */}
        <div className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <SlidersHorizontal size={18} color="var(--primary-color)" />
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              style={{ padding: '0.4rem', border: 'none', background: 'transparent', outline: 'none', fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary-color)', cursor: 'pointer' }}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
          <span style={{ fontWeight: '700', color: 'var(--primary-color)', fontSize: '0.95rem', background: 'rgba(15, 23, 42, 0.05)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>
            {filteredProducts.length} Items
          </span>
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode='wait'>
        {filteredProducts.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: 'center', padding: '6rem 0' }}>
            <div style={{ width: '80px', height: '80px', background: 'rgba(0,0,0,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Filter size={40} color="var(--text-gray)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No results matched</h3>
            <p style={{ color: 'var(--text-gray)' }}>Try adjusting your keywords or filters.</p>
          </motion.div>
        ) : (
          <motion.div 
            key="grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="product-grid"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants} layout>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
