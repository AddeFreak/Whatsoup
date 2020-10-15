import React from 'react';
//import { Link } from 'react-router-dom'

import buttonsStyle from './buttonsStyle.module.css'



const backButton = () => {
    return (
        <button className={buttonsStyle.backCheckout} >
            BACK
        </button>
    );
};

export default backButton;