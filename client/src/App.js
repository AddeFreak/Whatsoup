import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Soup from './components/menu/Soup'
import Protein from './components/menu/Protein'
import Bread from './components/menu/Bread'
import Spreads from './components/menu/Spreads'
import Treats from './components/menu/Treats'
import Extras from './components/menu/Extras'
import Beverages from './components/menu/Beverages'
import Landing from '../src/components/pages/Landing'
import SignUp from './components/SignUp/index'
import SignIn from './components/SignIn/index'
import OrderSummary from '../src/components/checkout/OrderSummary'
import Confirmation from '../src/components/checkout/Comfirmation'
import SignUpLanding from './components/SignUp/SingUp'


import { withAuthentication } from '../src/components/Session/index';

import AlertState from './context/alert/AlertState'
import Alert from './components/alert/Alert'
import Checkout from './components/checkout/Checkout'
//import CheckoutPage from './components/pages/CheckoutPage'
import Home from './components/pages/Home'
import CheckoutState from './context/checkout/CheckoutState'
import * as ROUTES from '../src/constants/routes'
import AccountPage from '../src/components/Account/index';
import AdminPage from '../src/components/Admin';

const App = () => {
  // const [user, setUser] = useState({ loggedIn: false });
  // if (!user.loggedIn) {
  //   return <span>User is logged out</span>;
  // }
  /*  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
 
   const drawerToggleClickHandler = () => {
     setSideDrawerOpen(true)
     console.log('clovked')
   }
   const backdropClickHandler = () => {
     setSideDrawerOpen(false)
   }
 
 
 
   let backdrop;
 
   if (sideDrawerOpen) {
 
     backdrop = <Backdrop click={backdropClickHandler} />
   }
  */
  return (

    <AlertState >
      <CheckoutState>
        <Router>
          <>


            {/* <Alert /> */}
            {/* <Checkout /> */}
            <Switch>
              <Route exact path={ROUTES.LANDING} component={Landing} />
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
              <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
              <Route exact path={ROUTES.SOUP} component={Soup} />
              <Route exact path={ROUTES.PROTEIN} component={Protein} />
              <Route exact path={ROUTES.EXTRAS} component={Extras} />
              {/* <Route exact path='/bread' component={Bread} />
              <Route exact path='/spreads' component={Spreads} />
              <Route exact path='/treats' component={Treats} /> */}
              <Route exact path='/beverages' component={Beverages} />
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route exact path={ROUTES.ADMIN} component={AdminPage} />
              <Route exact path={ROUTES.ORDERSUMMARY} component={OrderSummary} />
              <Route exact path={ROUTES.CONFIRMATION} component={Confirmation} />
              <Route exact path={ROUTES.SIGNUPLANDING} component={SignUpLanding} />


              {/* <Route component={NotFound} /> */}
            </Switch>
          </>
        </Router>
      </CheckoutState>
    </AlertState>

  );
}




export default withAuthentication(App);