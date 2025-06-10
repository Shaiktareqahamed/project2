import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

const food_list = [
  {
    _id: '1',
    name: 'Oil Change',
    price: 300,
    image: 'https://via.placeholder.com/150?text=Oil+Change',
  },
  {
    _id: '2',
    name: 'Chain Adjustment & Lubrication',
    price: 150,
    image: 'https://via.placeholder.com/150?text=Chain+Adjustment',
  },
  {
    _id: '3',
    name: 'Brake Inspection & Adjustment',
    price: 200,
    image: 'https://via.placeholder.com/150?text=Brake+Service',
  },
  {
    _id: '4',
    name: 'Tire Replacement',
    price: 800,
    image: 'https://via.placeholder.com/150?text=Tire+Replacement',
  },
  {
    _id: '5',
    name: 'Battery Check & Replacement',
    price: 1000,
    image: 'https://via.placeholder.com/150?text=Battery+Check',
  },
  {
    _id: '6',
    name: 'Spark Plug Replacement',
    price: 350,
    image: 'https://via.placeholder.com/150?text=Spark+Plug',
  },
  {
    _id: '7',
    name: 'Full Bike Service',
    price: 2500,
    image: 'https://via.placeholder.com/150?text=Full+Service',
  },
  {
    _id: '8',
    name: 'Engine Tune-Up',
    price: 1800,
    image: 'https://via.placeholder.com/150?text=Engine+Tune-Up',
  },
  {
    _id: '9',
    name: 'Clutch Repair',
    price: 1200,
    image: 'https://via.placeholder.com/150?text=Clutch+Repair',
  },
  {
    _id: '10',
    name: 'Suspension Check & Repair',
    price: 1500,
    image: 'https://via.placeholder.com/150?text=Suspension',
  },
];

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      if (!prev[id]) return prev;
      const newCount = prev[id] - 1;
      if (newCount <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newCount };
    });
  };

  const getTotalAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const item = food_list.find((f) => f._id === id);
      return total + (item?.price || 0) * qty;
    }, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

