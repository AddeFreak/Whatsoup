import React from 'react';
import FoodList from './components/menu/FoodList'
import Checkout from './components/checkout/Checkout'
import CheckoutState from './components/context/checkout/CheckoutState'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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