import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <Link to={ROUTES.SOUP}>Soup</Link>
        <li>
        </li>
        <Link to={ROUTES.TREATS}>Treats</Link>
        <li>

        </li>
        <Link to={ROUTES.BREAD}>Bread</Link>
        <li>

        </li>
        <Link to={ROUTES.SPREADS}>Spreads</Link>
        <li>

        </li>
        <Link to={ROUTES.CHECKOUT}>Checkout</Link>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;