import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Soup from './components/menu/Soup'
import Protein from './components/menu/Protein'
import Bread from './components/menu/Bread'
import Spreads from './components/menu/Spreads'
import Treats from './components/menu/Treats'
import Beverages from './components/menu/Beverages'
import Login from './components/pages/login'
import SignUp from './components/SignUp/index'
import SignIn from './components/SignIn/index'
import Navigation from '../src/components/Navigation/index'
import { withFirebase } from '../src/components/Firebase/index';
import { AuthUserContext } from '../src/components/Session/index';
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

  return (

    <AlertState>
      <CheckoutState>
        <Router>
          <>
            <Navigation />
            {/* <Alert /> */}
            {/* <Checkout /> */}
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
              <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
              <Route exact path={ROUTES.SOUP} component={Soup} />
              <Route exact path={ROUTES.PROTEIN} component={Protein} />
              <Route exact path='/bread' component={Bread} />
              <Route exact path='/spreads' component={Spreads} />
              <Route exact path='/treats' component={Treats} />
              <Route exact path='/beverages' component={Beverages} />
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route exact path={ROUTES.ADMIN} component={AdminPage} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </>
        </Router>
      </CheckoutState>
    </AlertState>

  );
}




export default withAuthentication(App);