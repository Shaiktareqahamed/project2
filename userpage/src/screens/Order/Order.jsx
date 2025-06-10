import { useLocation, useNavigate } from 'react-router-dom';
import './Order.css';

const Order = () => {

  <div className="ok"></div>
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate('/');
    return null;
  }

  const { itemsTotal, laborCost, totalBill, address } = location.state;

  return (
    <div className="order">
      <h2>Thank you for your order!</h2>
      <p>We’ll contact you soon for confirmation.</p>

      <div className="bill-summary">
        <h3>Bill Summary</h3>
        <div className="bill-row">
          <span>Items Total:</span>
          <span>₹{itemsTotal}</span>
        </div>
        <div className="bill-row">
          <span>Labor Cost:</span>
          <span>₹{laborCost}</span>
        </div>
        <div className="bill-row total">
          <span>Total Bill:</span>
          <span>₹{totalBill}</span>
        </div>
      </div>

      <div className="delivery-address">
        <h3>Service Address</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Order;
