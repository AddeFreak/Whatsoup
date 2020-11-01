import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import * as ROUTES from '../../../constants/routes'
import SignOutButton from '../../SignOut';

const StyledSideDrawer = styled.div`
.side-drawer{
height: 100%;
background: white;
box-shadow: 0px 3px 7px rgba(0,0,0,0.5);
position: fixed;
top: 0;
right: 0px;
width: 70%;
max-width: 400px;
z-index: 200;
transform: translateX(+100%);
transition: transform 0.3s ease-out;
box-sizing: border-box; 
}
.side-drawer.open{
transform: translateX(0);
}
.nav-links{
    height: 100%;
   font-size: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.side-drawer li {
    margin: 1rem 0;
}
.link {
    text-decoration: none;
font-size: 1.2rem;
}
@media (min-width: 769){
.side-drawer{
    display: none;
}
}
`

const sideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (<StyledSideDrawer >
        <nav className={drawerClasses}>

            <ul className="nav-links">

                <li>  <Link to={ROUTES.LANDING}>Landing</Link>   </li>


                <li>  <Link to={ROUTES.HOME}>Home</Link></li>

                <li><Link to={ROUTES.SOUP}>Soup</Link></li>


                <li> <Link to={ROUTES.PROTEIN}>Protein</Link></li>

                <li><Link to={ROUTES.BREAD}>Bread</Link>   </li>


                <li><Link to={ROUTES.SPREADS}>Spreads</Link> </li>


                <li> <Link to={ROUTES.TREATS}>Treats</Link> </li>





                <li> <Link to={ROUTES.BEVERAGES}>Beverages</Link>    </li>




                <li>  <Link to={ROUTES.ADMIN}>Admin</Link>   </li>


                <li>    <Link to={ROUTES.CHECKOUT}>Checkout</Link> </li>

                <li> <SignOutButton /></li>


            </ul>







        </nav>
    </StyledSideDrawer>)
};

export default sideDrawer;