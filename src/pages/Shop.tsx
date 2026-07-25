import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { products, categories, type Category } from '../data/products';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name A–Z' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');

  const activeCategory = (searchParams.get('category') || 'all') as Category | 'all';

  function setCategory(cat: string) {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  }

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'all') list = list.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.materials ?? []).some((m) => m.toLowerCase().includes(q))
      );
    }
    if (sort === 'price-asc') list.sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === 'price-desc') list.sort((a, b) => b.priceFrom - a.priceFrom);
    if (sort === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, search, sort]);

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <h1>All Products</h1>
        <p>Premium badges, lapels &amp; corporate gifts, custom branded for your organisation.</p>
      </div>

      <div className="shop-layout">
        {/* FILTERS SIDEBAR */}
        <aside className="shop-sidebar">
          <h3>Categories</h3>
          <button
            className={`filter-btn${activeCategory === 'all' ? ' active' : ''}`}
            onClick={() => setCategory('all')}
          >
            All Products <span>{products.length}</span>
          </button>
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                className={`filter-btn${activeCategory === cat.id ? ' active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label} <span>{count}</span>
              </button>
            );
          })}
        </aside>

        {/* PRODUCT AREA */}
        <div className="shop-main">
          <div className="shop-toolbar">
            <input
              type="search"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="shop-search"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="shop-sort"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="shop-empty">
              <p>No products found. Try a different search or category.</p>
            </div>
          ) : (
            <>
              <p className="shop-result-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>
              <div className="products-grid">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
