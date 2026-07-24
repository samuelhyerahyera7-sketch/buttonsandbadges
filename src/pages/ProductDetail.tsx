import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { products } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addItem } = useQuote();
  const [qty, setQty] = useState(product?.minQty ?? 10);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>Back to Shop</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  function handleAddToQuote() {
    addItem(product!, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="product-detail-page">
      <div className="detail-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Products</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`}>{product.category.replace(/-/g, ' ')}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="detail-layout">
        {/* IMAGE */}
        <div className="detail-image-wrap">
          <img src={product.image} alt={product.name} />
        </div>

        {/* INFO */}
        <div className="detail-info">
          <span className="detail-category-tag">{product.category.replace(/-/g, ' ')}</span>
          <h1 className="detail-name">{product.name}</h1>
          {product.isBestseller && <div className="detail-badge">Popular Choice</div>}
          {product.isNew && <div className="detail-badge detail-badge-new">New Arrival</div>}

          <p className="detail-desc">{product.longDescription}</p>

          {product.materials && (
            <div className="detail-materials">
              <h4>Available Materials</h4>
              <div className="detail-pills">
                {product.materials.map((m) => <span key={m} className="detail-pill">{m}</span>)}
              </div>
            </div>
          )}

          {product.finishes && (
            <div className="detail-materials">
              <h4>Finishes</h4>
              <div className="detail-pills">
                {product.finishes.map((f) => <span key={f} className="detail-pill">{f}</span>)}
              </div>
            </div>
          )}

          <div className="detail-pricing">
            <div className="detail-price">
              from R{product.priceFrom.toFixed(2)} <small>per unit</small>
            </div>
            <div className="detail-minqty">Minimum order: {product.minQty} units</div>
          </div>

          <div className="detail-qty-row">
            <label>Quantity</label>
            <div className="qty-control">
              <button onClick={() => setQty(Math.max(product.minQty, qty - product.minQty))}>−</button>
              <input
                type="number"
                value={qty}
                min={product.minQty}
                onChange={(e) => setQty(Math.max(product.minQty, Number(e.target.value)))}
              />
              <button onClick={() => setQty(qty + product.minQty)}>+</button>
            </div>
          </div>

          <button
            onClick={handleAddToQuote}
            className={`add-to-quote-btn large${added ? ' added' : ''}`}
          >
            {added ? '✓ Added to Quote Basket' : 'Add to Quote Basket'}
          </button>

          <p className="detail-note">
            Pricing shown is a guide — final pricing depends on quantity, customisation, and material selected.
            Our team will confirm pricing when you submit your quote.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="section" style={{ paddingTop: '60px' }}>
          <div className="section-inner">
            <div className="section-header">
              <h2>Related Products</h2>
            </div>
            <div className="products-grid">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
