import React, { useState } from 'react';
import Backbutton from '../buttons/Backbutton'
import LinkButton from '../buttons/LinkButton'

import styled from 'styled-components'
import DrawerToggleButton from '../Navigation/SideDrawer/DrawerToggleButton'
import Navigation from '../Navigation/index'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'

const Test = styled.div`
@media (max-width: 768px){
.Navbar {
width:100%;
height: 150px;
left: 0px;
top: 0px;
background: #ffb
}

.Upperbutt{
 display:flex;
 justify-content: space-between;
 padding: 10px;
}

.Nextstyle{
 display:flex;
 justify-content: space-between;
 padding-bottom:10px;
 margin-right: 10px;
}

 .namePrice{
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 15px;
    color: black;
    font-size: 21px;
 }

 .name {
    font-family: 'Lobster', cursive;
    font-size: 35px;
 }

 .price {
    margin-top: 13px;
 }

.typeOfFood-Soup {
  background: #ffb;

 }

 .typeOfFood-Protein {
  background: #fec;
}

.typeOfFood-Bread {
  background: #cff;
}
.typeOfFood-Spreads {
  background: #dfd;
}
.typeOfFood-Treats {
  background: #ffb;
}
.typeOfFood-Beverages {
  background: #fec;
}
}`
const Navbar = (props) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

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
  return (
    <Test >

      <div className={`.Navbar typeOfFood-${props.typeOfFood}`}>
        <div className="Upperbutt">
          < div className="nav-toggle" >
            <Navigation drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} />
            {backdrop}
          </ div>
          <LinkButton to='/checkout'>CHECKOUT</LinkButton>
        </div>
        <div className="namePrice">
          <div className="name">{props.typeOfFood}</div>
          <div className="price">/ {props.price} SEK</div>
        </div>


        <div className="Nextstyle">  <Backbutton />
          <LinkButton to={props.next}>NEXT</LinkButton>
        </div>
      </div>
    </Test>
  );
};

export default Navbar;