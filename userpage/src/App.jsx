import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import Cart from './screens/Cart/Cart';
import Order from './screens/Order/Order';
import StoreContextProvider from './context/storecontext';
import Loginpopup from './components/Loginpopup/Loginpopup';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showlogin, setshowlogin] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showlogin ? 'hidden' : 'auto';
  }, [showlogin]);

  return (
    <StoreContextProvider>
      <Router>
        {showlogin && <Loginpopup setshowlogin={setshowlogin} />}
        <div className="app">
          <Navbar showlogin={showlogin} setshowlogin={setshowlogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </Router>
    </StoreContextProvider>
  );
};

export default App;
