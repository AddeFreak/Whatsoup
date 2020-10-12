import React from 'react';
import Backbutton from '../buttons/Backbutton'
import Addbutton from '../buttons/Addbutton'
import Nextbutton from '../buttons/Nextbutton'
import Checkoutbutton from '../buttons/Checkoutbutton'
import styles from './navbarStyle.module.css'


const Navbar = (props) => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.Upperbutt}> <Backbutton />
                <Checkoutbutton />
            </div>
            <div className={styles.Souplogo}>
                <div>{props.typeOfFood}</div>
                <div>/ {props.price} SEK</div>
            </div>
            <div className={styles.Nextstyle}>
                <Nextbutton />
            </div>
        </div>
    );
};

export default Navbar;