import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Soups from './components/menu/Soups'

import AlertState from './context/alert/AlertState'
import Alert from './components/menu/Alert'
import Checkout from './components/checkout/Checkout'
import CheckoutPage from './components/pages/CheckoutPage'
import Home from './components/pages/Home'
import CheckoutState from './context/checkout/CheckoutState'

function App() {
  return (
    <AlertState>
      <CheckoutState>
        <Router>
          <>
            <Alert />
            <Checkout />
            <Soups />
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route exact path='/login' component={Login} /> */}
              <Route exact path='/soups' component={Soups} />
              {/* <Route exact path='/protein' component={Protein} />
              <Route exact path='/bread' component={Bread} />
              <Route exact path='/spreads' component={Spreads} />
              <Route exact path='/beverages' component={Beverages} /> */}
              <Route exact path='/checkout' component={CheckoutPage} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </>
        </Router>
      </CheckoutState>
    </AlertState >
  );
}

export default App;