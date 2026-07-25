import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { CartProvider, useCart } from '../context/CartContext';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const categoryLinks = [
  { to: '/shop?category=name-badges', label: 'Name Badges' },
  { to: '/shop?category=lapels', label: 'Lapels' },
  { to: '/shop?category=reusable-badges', label: 'Reusable Badges' },
  { to: '/shop?category=button-badges', label: 'Button Badges' },
  { to: '/shop?category=corporate-gifts', label: 'Keyrings & Gifts' },
  { to: '/shop?category=signs', label: 'Signs & Nameplates' },
];

function Nav() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', exact: true },
    { to: '/shop', label: 'Products' },
    { to: '/shop?category=lapels', label: 'Lapels' },
    { to: '/shop?category=name-badges', label: 'Name Badges' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-logo">
          Buttons <span>&amp;</span> Badges
        </Link>

        <nav className="site-nav">
          {links.map((link) => {
            const isActive = link.exact
              ? location.pathname === link.to
              : location.pathname.startsWith(link.to.split('?')[0]) && link.to !== '/';
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-right">
          <Link to="/basket" className="cart-link">
            <ShoppingCart size={16} />
            <span className="cart-label">Basket</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={() => setOpen(false)}>Home</Link>
          <button
            className="mobile-nav-link mobile-nav-products-btn"
            onClick={() => setProductsOpen(!productsOpen)}
          >
            Products <ChevronDown size={14} className={productsOpen ? 'chevron-open' : ''} />
          </button>
          {productsOpen && (
            <div className="mobile-nav-sub">
              <Link to="/shop" className="mobile-nav-sub-link" onClick={() => setOpen(false)}>All Products</Link>
              {categoryLinks.map((link) => (
                <Link key={link.to} to={link.to} className="mobile-nav-sub-link" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/basket" className="mobile-nav-link" onClick={() => setOpen(false)}>
            Basket {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-logo">Buttons <span>&amp;</span> Badges</span>
      <p>Premium name badges, lapels &amp; corporate gifts across South Africa.</p>
      <div className="footer-links" style={{ marginTop: '12px' }}>
        <a href="tel:0813756494">081 375 6494</a>
        <a href="mailto:hello@buttonsandbadges.co.za">hello@buttonsandbadges.co.za</a>
      </div>
      <div className="footer-links" style={{ marginTop: '8px' }}>
        <Link to="/">Home</Link>
        <Link to="/shop">Products</Link>
        <Link to="/basket">Basket</Link>
      </div>
      <p style={{ marginTop: '16px' }}>&copy; {new Date().getFullYear()} Buttons &amp; Badges</p>
    </footer>
  );
}

export default function Layout() {
  return (
    <CartProvider>
      <div className="site-root">
        <Nav />
        <div className="sub-header-bar" />
        <main className="site-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
