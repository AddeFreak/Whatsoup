import React from 'react';
import buttonsStyle from './buttonsStyle.module.css'
import { Link } from 'react-router-dom'

const Checkoutbutton = () => {
    return (
        <Link to='/checkout' className={buttonsStyle.backCheckout} style={{ textDecoration: 'none' }}>
            CHECKOUT
        </Link>
    );
};

export default Checkoutbutton;