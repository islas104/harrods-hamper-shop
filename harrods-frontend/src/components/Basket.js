import React from 'react';

import PropTypes from 'prop-types';

const Basket = ({ basket, removeFromBasket, updateQuantity }) => (
  <div className="basket">
    <h3>Your Basket</h3>
    <ul>
      {basket.map((item) => (
        <li key={item.id}>
          {item.title} - £{item.price}
          <div style={{ display: 'inline-block', marginLeft: '10px' }}>
            <span>Quantity:</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value, 10))
              }
              min="1"
              style={{ marginLeft: '5px' }}
            />
          </div>
          <button onClick={() => removeFromBasket(item.id)} style={{ marginLeft: '10px' }}>Remove</button>
        </li>
      ))}
    </ul>
    <h3>
      Total: £
      {basket.reduce((total, item) => total + item.price * item.quantity, 0)}
    </h3>
  </div>
);

Basket.propTypes = {
  basket: PropTypes.array.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default Basket;
