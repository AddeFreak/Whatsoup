import React from 'react';
import FoodList from './components/menu/FoodList'
import Checkout from './components/checkout/Checkout'
import CheckoutState from './context/checkout/CheckoutState'
import AlertState from './context/alert/AlertState'
import Alert from './components/menu/Alert'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <AlertState>
      <CheckoutState>
        <Router>
          <>
            <Alert />
            <Checkout />
            <FoodList />
            <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              {/* <Route exact path='/login' component={Login} /> */}
              {/* <Route exact path='/soups' component={Soups} /> */}
              {/* <Route exact path='/protein' component={Protein} />
              <Route exact path='/bread' component={Bread} />
              <Route exact path='/spreads' component={Spreads} />
              <Route exact path='/beverages' component={Beverages} /> */}
              <Route exact path='/checkout' component={Checkout} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </>
        </Router>
      </CheckoutState>
    </AlertState>
  );
}

export default App;