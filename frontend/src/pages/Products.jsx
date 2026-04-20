import { useState } from 'react';
import { products } from '../data.js';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';



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

  return (
    <div className="animate-fade">
      <div className="page-header">
        <h1>Our Product Collection</h1>
        <p style={{ color: 'var(--text-gray)' }}>Browse our complete selection of premium exports.</p>
      </div>

      <div className="search-container" style={{ marginBottom: '1.5rem' }}>
        <div className="search-bar">
          <Search size={20} color="var(--text-gray)" />
          <input 
            type="text" 
            placeholder="Search products by name or type..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem', background: 'white', padding: '1rem 1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)' }}>
        <p style={{ fontWeight: '600', color: 'var(--primary-color)' }}>
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>Sort by:</label>
          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: 'var(--bg-main)', fontFamily: 'inherit', color: 'var(--text-dark)' }}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-gray)' }}>
          <h3>No products found matching "{search}"</h3>
          <p>Please try a different search term.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className="fade-in-up" style={{ animationDelay: `${(idx % 10) * 0.1}s`, height: '100%' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
