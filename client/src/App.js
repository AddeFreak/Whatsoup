import React from 'react';
import FoodList from './components/menu/FoodList'
import Checkout from './components/checkout/Checkout'
import CheckoutState from './components/context/checkout/CheckoutState'


function App() {
  return (
    <CheckoutState>
      <>
        <Checkout />
        <FoodList />
      </>
    </CheckoutState>
  );
}

export default App;