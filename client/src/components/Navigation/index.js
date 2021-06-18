import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import styled from 'styled-components';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const Navigation = (props) => (
	<AuthUserContext.Consumer>
		{(authUser) =>
			authUser ? (
				<NavigationAuth click={props.drawerClickHandler} />
			) : (
				<NavigationNonAuth />
			)
		}
	</AuthUserContext.Consumer>
);
const NavStyle = styled.div`
	@media (max-width: 768px) {
		.nav-links {
			display: none;
			flex-flow: row nowrap;
			justify-content: space-evenly;
			align-items: center;
			width: 35vw;
		}
	}
`;

const NavigationAuth = (props) => (
	<NavStyle>
		<ul className='nav-links'>
			<li>
				<Link to={ROUTES.LANDING}>Landing</Link>
			</li>
			<li>
				<Link to={ROUTES.HOME}>Home</Link>
			</li>
			<li>
				<Link to={ROUTES.SOUP}>Soup</Link>
			</li>

			<li>
				<Link to={ROUTES.PROTEIN}>Protein</Link>
			</li>
			<li>
				<Link to={ROUTES.EXTRAS}>Extras</Link>
			</li>

			<li>
				<Link to={ROUTES.BEVERAGES}>Beverages</Link>
			</li>

			<li>
				<Link to={ROUTES.ADMIN}>Admin</Link>
			</li>

			<li>
				<Link to={ROUTES.CHECKOUT}>Checkout</Link>
			</li>

			<li>
				<SignOutButton />
			</li>
		</ul>
		<div className='nav-toggle'>
			<DrawerToggleButton click={props.click} />
		</div>
	</NavStyle>
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
