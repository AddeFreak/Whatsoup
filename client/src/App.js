import React from 'react';
import FoodList from './components/menu/FoodList'
import Checkout from './components/checkout/Checkout'
import CheckoutState from './context/checkout/CheckoutState'
import AlertState from './context/alert/AlertState'
import Alert from './components/menu/Alert'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <AlertState>
      <CheckoutState>
        <>
          <Alert />
          <Checkout />
          <FoodList />
        </>
      </CheckoutState>
    </AlertState>
  );
}

export default App;