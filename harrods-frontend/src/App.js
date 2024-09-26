import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import Basket from './components/Basket';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/Products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((err) => setError('Failed to load products.'));
  }, []);

  const addToBasket = (product) => {
    const existingProduct = basket.find((item) => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity < product.stock) {
        setBasket(
          basket.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        alert('No more stock available for this item.');
      }
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromBasket(id);
    } else {
      setBasket(
        basket.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  const handlePurchase = () => {
    if (basket.length === 0) {
      alert('Your basket is empty.');
      return;
    }

    fetch('http://localhost:5001/purchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(basket),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Thank you for your purchase!');
        setBasket([]);
      })
      .catch((error) => console.error('Error during purchase:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/harrods-logo.png" alt="Harrods Logo" className="harrods-logo" />
      </header>
      
      <div className="shop-container">
        {error ? <p>{error}</p> : null}
        <ProductList products={products} addToBasket={addToBasket} />
        <div className="basket-container">
          <Basket
            basket={basket}
            removeFromBasket={removeFromBasket}
            updateQuantity={updateQuantity}
          />
          <div className="purchase-container">
            <button className="purchase-btn" onClick={handlePurchase}>
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
