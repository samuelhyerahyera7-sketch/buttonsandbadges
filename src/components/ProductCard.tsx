import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Link } from 'react-router';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd(e: MouseEvent) {
    e.preventDefault();
    addItem(product, product.minQty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-visual">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-category-tag">
          {product.category.replace(/-/g, ' ')}
        </span>
        {product.isNew && <span className="product-badge-new">New</span>}
        {product.isBestseller && !product.isNew && <span className="product-badge-best">Popular</span>}
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}{product.size ? ` ${product.size.replace(' — ', ' (')}` : ''}{product.size ? ')' : ''}</div>
        <div className="product-footer">
          <div className="product-price">
            from R{product.priceFrom.toFixed(2)}
            <small className="product-minqty">discount from 10</small>
          </div>
          <button
            onClick={handleAdd}
            className={`add-to-cart-btn${added ? ' added' : ''}`}
          >
            {added ? 'Added!' : 'Add to Basket'}
          </button>
        </div>
      </div>
    </Link>
  );
}
