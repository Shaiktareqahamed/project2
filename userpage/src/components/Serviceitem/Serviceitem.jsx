import React, { useContext } from 'react';
import { StoreContext } from '../../context/storecontext';
import './ServiceItem.css';

const ServiceItem = ({ item }) => {
  const { cartItems, addToCart } = useContext(StoreContext);
  const qty = cartItems[item._id] || 0;

  return (
    <div className="service-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>

      {qty === 0 ? (
        <button onClick={() => addToCart(item._id)}>Add to Cart</button>
      ) : (
        <button disabled className="added-btn">
          Added ({qty})
        </button>
      )}
    </div>
  );
};

export default ServiceItem;

