import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  function handleAddToBasket() {
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
          {product.size && <div className="detail-size">{product.size}</div>}
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
              R{product.priceFrom.toFixed(2)} <small>per unit</small>
            </div>
          </div>

          <div className="detail-qty-row">
            <label>Quantity</label>
            <div className="qty-control">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <input
                type="number"
                value={qty}
                min={1}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              />
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <a
            href={`mailto:admin@cratesandboxes.co.za?subject=Quote Request: ${encodeURIComponent(product.name + (product.size ? ' ' + product.size : ''))}`}
            className="add-to-cart-btn large"
          >
            Get a Quote
          </a>

          <p className="detail-note">
            Pricing shown is a starting guide — final pricing is confirmed at checkout based on quantity, material, and customisation.
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
