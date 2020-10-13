import React from 'react';
import Backbutton from '../buttons/Backbutton'
import Nextbutton from '../buttons/Nextbutton'
import Checkoutbutton from '../buttons/Checkoutbutton'
import styles from './navbarStyle.module.css'


const Navbar = (props) => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.Upperbutt}>
                <Backbutton />
                <Checkoutbutton />
            </div>
            <div className={styles.namePrice}>
                <div className={styles.name}>{props.typeOfFood}</div>
                <div className={styles.price}>/ {props.price} SEK</div>
            </div>
            <div className={styles.Nextstyle}>
                <Nextbutton />
            </div>
        </div>
    );
};

export default Navbar;