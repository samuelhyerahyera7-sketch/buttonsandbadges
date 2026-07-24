import React, { useState } from 'react';
import { Link } from 'react-router';
import { useQuote } from '../context/QuoteContext';

export default function QuoteBasket() {
  const { items, removeItem, updateQty, clear } = useQuote();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  if (items.length === 0 && !submitted) {
    return (
      <div className="quote-empty">
        <h2>Your Quote Basket is Empty</h2>
        <p>Add products from the shop to request a personalised quote.</p>
        <Link to="/shop" className="btn-primary">Browse Products</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="quote-success">
        <div className="quote-success-icon">✓</div>
        <h2>Quote Request Sent!</h2>
        <p>Thank you, {form.name}. We'll get back to you at {form.email} with a personalised quote within 1 business day.</p>
        <Link to="/shop" className="btn-primary">Continue Browsing</Link>
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    clear();
  }

  return (
    <div className="quote-page">
      <div className="quote-header">
        <h1>Quote Basket</h1>
        <p>Review your selections below, then fill in your details to request a personalised quote.</p>
      </div>

      <div className="quote-layout">
        {/* ITEMS */}
        <div className="quote-items">
          <h2>Selected Products</h2>
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="quote-item">
              <img src={product.image} alt={product.name} className="quote-item-img" />
              <div className="quote-item-info">
                <div className="quote-item-name">{product.name}</div>
                <div className="quote-item-cat">{product.category.replace(/-/g, ' ')}</div>
                <div className="quote-item-price">from R{product.priceFrom.toFixed(2)} per unit</div>
              </div>
              <div className="quote-item-qty">
                <label>Qty</label>
                <div className="qty-control small">
                  <button onClick={() => updateQty(product.id, Math.max(product.minQty, quantity - product.minQty))}>−</button>
                  <input
                    type="number"
                    value={quantity}
                    min={product.minQty}
                    onChange={(e) => updateQty(product.id, Math.max(product.minQty, Number(e.target.value)))}
                  />
                  <button onClick={() => updateQty(product.id, quantity + product.minQty)}>+</button>
                </div>
                <small>min {product.minQty}</small>
              </div>
              <button className="quote-item-remove" onClick={() => removeItem(product.id)}>✕</button>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="quote-form-wrap">
          <h2>Your Details</h2>
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-field">
              <label>Full Name *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Smith"
              />
            </div>
            <div className="form-field">
              <label>Email Address *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.co.za"
              />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+27 11 000 0000"
              />
            </div>
            <div className="form-field">
              <label>Additional Notes</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your branding requirements, artwork details, delivery deadline…"
              />
            </div>
            <button type="submit" className="btn-primary full-width">Submit Quote Request</button>
          </form>
          <p className="quote-note">
            We'll review your selections and send a detailed quote within 1 business day.
          </p>
        </div>
      </div>
    </div>
  );
}
