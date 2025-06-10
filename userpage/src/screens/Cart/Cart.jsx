import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storecontext';
import './Cart.css';

const Cart = () => {
  const { cartItems, food_list, getTotalAmount, addToCart, removeFromCart } = useContext(StoreContext);
  const [laborCost, setLaborCost] = useState(0);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const itemsTotal = getTotalAmount();
  const totalBill = itemsTotal + Number(laborCost);

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert('Please enter your address before placing the order.');
      return;
    }
    navigate('/order', { state: { itemsTotal, laborCost: Number(laborCost), totalBill, address } });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {food_list.filter(item => cartItems[item._id] > 0).map(item => (
        <div className="cart-item" key={item._id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>₹{item.price}</p>
          <div className="item-actions">
            <button onClick={() => removeFromCart(item._id)}>-</button>
            <span>{cartItems[item._id]}</span>
            <button onClick={() => addToCart(item._id)}>+</button>
          </div>
        </div>
      ))}

      <div className="labor-cost">
        <label>Labor Cost: ₹</label>
        <input
          type="number"
          min="0"
          value={laborCost}
          onChange={(e) => setLaborCost(e.target.value)}
        />
      </div>

      <div className="address-input">
        <label>Delivery Address:</label>
        <textarea
          placeholder="Enter your full address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
        />
      </div>

      <h3>Total: ₹{totalBill}</h3>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Cart;

