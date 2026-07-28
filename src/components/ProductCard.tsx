import { Link } from 'react-router';
import type { Product } from '../data/products';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

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
        <div className="product-name">{product.name}</div>
        {product.size && (
          <div className="product-size">{product.size.replace(' — ', ' (') + ')'}</div>
        )}
        <div className="product-footer">
          <div className="product-price">
            R{product.priceFrom.toFixed(2)} <small className="product-minqty">per unit</small>
          </div>
          <a
            href={`mailto:admin@cratesandboxes.co.za?subject=Quote Request: ${encodeURIComponent(product.name + (product.size ? ' ' + product.size : ''))}`}
            className="add-to-cart-btn"
            onClick={(e) => e.stopPropagation()}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </Link>
  );
}
