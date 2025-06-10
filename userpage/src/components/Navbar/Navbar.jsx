/*import { Link } from 'react-router-dom';
import './Navbar.css';
import Loginpopup from '../Loginpopup/Loginpopup';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Quick<span>Service</span>
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/order">Orders</Link>
      </div>
        <button onClick={()=>setshowlogin(true)}>Sign in</button>
    </nav>
  );
};

export default Navbar;*/

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setshowlogin }) => { // <-- Accept as prop
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Quick<span>Service</span>
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/order">Orders</Link>
      </div>
      <button onClick={() => setshowlogin(true)}>Sign in</button>
    </nav>
  );
};

export default Navbar;
