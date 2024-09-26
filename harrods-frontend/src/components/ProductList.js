import React from 'react';

import PropTypes from 'prop-types';

const ProductList = ({ products, addToBasket }) => {
  return (
    <div className="products">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - £{product.price}
            <button
              onClick={() => addToBasket(product)}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to Basket' : 'Out of Stock'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addToBasket: PropTypes.func.isRequired,
};

export default ProductList;
