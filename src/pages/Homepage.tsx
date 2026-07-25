import { Link } from 'react-router';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const featured = products.filter((p) => p.isBestseller).slice(0, 4);

const catCards = [
  { id: 'name-badges',    label: 'Name Badges',      sub: 'Classic, metal, resin & wood',        bg: '#1C2B3A' },
  { id: 'lapels',         label: 'Lapels',            sub: 'Classic, metal, bespoke & wood',       bg: '#2A4858' },
  { id: 'reusable-badges',label: 'Reusable Badges',  sub: 'Write-on, wipe-off & insert-card',     bg: '#1A2E2A' },
  { id: 'button-badges',  label: 'Button Badges',     sub: 'Full-colour pin-back badges',           bg: '#2C2A3A' },
  { id: 'corporate-gifts',label: 'Keyrings & Corporate Gifts', sub: 'Classic, resin, wood & bespoke metal keyrings', bg: '#1A1A1A' },
  { id: 'stickers',       label: 'Stickers & Labels', sub: 'Domed, vinyl & self-adhesive',         bg: '#2A1A2A' },
  { id: 'signs',          label: 'Signs & Nameplates', sub: 'Door signs, desk plates & custom signage', bg: '#1A2A1A', span: 2 },
];

const features = [
  { icon: '✦', title: 'Custom Branding', desc: 'Upload your logo or artwork — every badge is made to your exact specifications.' },
  { icon: '🏆', title: 'Trusted Since 1995', desc: 'Three decades of experience supplying businesses, schools, and events across South Africa.' },
  { icon: '⭐', title: 'Premium Quality', desc: 'Laser engraving, die-cast metal, crystal resin — materials built to impress and last.' },
  { icon: '🚚', title: 'Nationwide Delivery', desc: 'Fast turnaround and reliable delivery to every corner of South Africa.' },
];

export default function Homepage() {
  return (
    <div className="homepage">

      {/* MOBILE CATEGORY STRIP — phones only */}
      <div className="mob-cat-wrap">
        <div className="mob-cat-scroll">
          {catCards.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="mob-cat-tile"
              style={{ '--tile-bg': cat.bg } as React.CSSProperties}
            >
              <span>{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Trusted · Premium · Made for Africa</span>
          <h1>Badges That Make Your <em>Brand</em> Unforgettable</h1>
          <p>Name badges, lapel pins, button badges &amp; corporate gifts — crafted for businesses, schools, events, and organisations across South Africa.</p>
          <div className="hero-actions">
            <Link to="/shop" className="btn-primary">Browse All Products</Link>
            <Link to="/shop?category=name-badges" className="btn-secondary">Name Badges</Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Popular Products</h2>
            <p>Our most-loved ranges — trusted by corporates, schools, and events nationwide.</p>
          </div>
          <div className="products-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/shop" className="btn-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* CATEGORY SHOWCASE */}
      <section className="section" style={{ background: 'var(--bg2)', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="section-inner">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>From classic acrylic to bespoke metal — find the perfect badge for your brand.</p>
          </div>
          <div className="category-showcase-grid">
            {catCards.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="cat-card"
                style={{ '--cat-bg': cat.bg, gridColumn: cat.span ? `span ${cat.span}` : undefined } as React.CSSProperties}
              >
                <h3>{cat.label}</h3>
                <p>{cat.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <div className="features-strip">
        <div className="features-inner">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ALL CATEGORIES */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Our Full Range</h2>
            <p>42 individual products across 8 categories — something for every brief.</p>
          </div>
          <div className="range-grid">
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat.id).length;
              return (
                <Link key={cat.id} to={`/shop?category=${cat.id}`} className="range-card">
                  <h3>{cat.label}</h3>
                  <p>{cat.description}</p>
                  <span className="range-count">{count} product{count !== 1 ? 's' : ''}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="contact-strip">
        <div className="section-inner">
          <div className="contact-strip-inner">
            <div>
              <h2>Request a Quote</h2>
              <p>Custom orders welcome · Fast turnaround · Nationwide delivery</p>
            </div>
            <div className="contact-details">
              <a href="mailto:hello@buttonsandbadges.co.za" className="contact-btn">
                Email Us
              </a>
              <div className="contact-info-list">
                <p>hello@buttonsandbadges.co.za</p>
                <p>Custom branding · Minimum quantities apply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
