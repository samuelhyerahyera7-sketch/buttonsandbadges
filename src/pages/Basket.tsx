import { useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

export default function Basket() {
  const { items, removeItem, updateQty, subtotal, clear } = useCart();
  const [ordered, setOrdered] = useState(false);

  if (items.length === 0 && !ordered) {
    return (
      <div className="basket-empty">
        <div className="basket-empty-icon">🛍️</div>
        <h2>Your basket is empty</h2>
        <p>Add products from the shop to get started.</p>
        <Link to="/shop" className="btn-primary">Browse Products</Link>
      </div>
    );
  }

  if (ordered) {
    return (
      <div className="order-success">
        <div className="order-success-icon">✓</div>
        <h2>Order Placed!</h2>
        <p>Thank you for your order. We'll be in touch within 1 business day to confirm your artwork and delivery details.</p>
        <Link to="/shop" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="basket-page">
      <div className="basket-header">
        <h1>Your Basket</h1>
        <p>{items.length} item{items.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="basket-layout">
        {/* ITEMS */}
        <div className="basket-items">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="basket-item">
              <div className="basket-item-top-row">
                <Link to={`/product/${product.id}`} className="basket-item-img-wrap">
                  <img src={product.image} alt={product.name} className="basket-item-img" />
                </Link>
                <div className="basket-item-info">
                  <Link to={`/product/${product.id}`} className="basket-item-name">{product.name}</Link>
                  <div className="basket-item-cat">{product.category.replace(/-/g, ' ')}</div>
                  </div>
              </div>
              <div className="basket-item-bottom-row">
                <div className="basket-item-qty">
                  <div className="qty-control">
                    <button onClick={() => updateQty(product.id, Math.max(1, quantity - 1))}>−</button>
                    <input
                      type="number"
                      value={quantity}
                      min={1}
                      onChange={(e) => updateQty(product.id, Math.max(1, Number(e.target.value)))}
                    />
                    <button onClick={() => updateQty(product.id, quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="basket-item-remove" onClick={() => removeItem(product.id)} aria-label="Remove">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          <button className="clear-basket-btn" onClick={clear}>Clear basket</button>
        </div>

        {/* ORDER SUMMARY */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-lines">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="summary-line">
                <span>{product.name} × {quantity}</span>
              </div>
            ))}
          </div>

          <p className="summary-note">
            Pricing will be confirmed after we review your quote request.
          </p>

          <button className="btn-primary full-width checkout-btn" onClick={() => { clear(); setOrdered(true); }}>
            Place Order
          </button>

          <Link to="/shop" className="continue-shopping">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
