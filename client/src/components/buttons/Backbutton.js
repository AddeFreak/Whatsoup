import React from 'react';

import buttonsStyle from './buttonsStyle.module.css'



const backButton = () => {
    return (
        <button className={buttonsStyle.backCheckout}>
            BACK
        </button>
    );
};

export default backButton;