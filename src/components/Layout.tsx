import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { QuoteProvider, useQuote } from '../context/QuoteContext';
import { ClipboardList, Menu, X } from 'lucide-react';

function Nav() {
  const { totalItems } = useQuote();
  const [open, setOpen] = useState(false);
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

          <Link to="/quote" className="quote-link">
            <ClipboardList size={16} />
            Quote Basket
            {totalItems > 0 && <span className="quote-badge">{totalItems}</span>}
          </Link>
        </nav>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="mobile-nav-link" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/quote" className="mobile-nav-link" onClick={() => setOpen(false)}>
            Quote Basket {totalItems > 0 && `(${totalItems})`}
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
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Products</Link>
        <Link to="/quote">Quote Basket</Link>
      </div>
      <div className="footer-links" style={{ marginTop: '8px' }}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <p style={{ marginTop: '16px' }}>&copy; {new Date().getFullYear()} Buttons &amp; Badges</p>
    </footer>
  );
}

export default function Layout() {
  return (
    <QuoteProvider>
      <div className="site-root">
        <Nav />
        <main className="site-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QuoteProvider>
  );
}
