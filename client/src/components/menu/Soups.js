import React from 'react'
import Navbar from '../navbar/Navbar'
import healing from '../../assets/healing.png'
import menuStyle from './menuStyle.module.css'

const Soups = () => {
    return (
        <div>
            <Navbar typeOfFood='Soup' price='50' />
            <ul className={menuStyle.cards}>
                <li>
                    <img
                        className={menuStyle.img}
                        src={healing}
                        alt='Soup with taste of healing'
                    />
                    <section className={menuStyle.foodInfoContainer}>
                        <div className={menuStyle.nameButton}>
                            <h2>The Healing</h2>
                            <button className={menuStyle.button}> + </button>
                        </div>
                        <h5 className={menuStyle.text}>Butternut squash, red onions, garlic, coconut milk</h5>
                    </section>
                </li>
                <li>
                    <img
                        className={menuStyle.img}
                        src={healing}
                        alt='Soup with taste of healing'
                    />
                    <section className={menuStyle.foodInfoContainer}>
                        <div className={menuStyle.nameButton}>
                            <h2>The Healing</h2>
                            <button className={menuStyle.button}> + </button>
                        </div>
                        <h5 className={menuStyle.text}>Butternut squash, red onions, garlic, coconut milk</h5>
                    </section>
                </li>
                <li>
                    <img
                        className={menuStyle.img}
                        src={healing}
                        alt='Soup with taste of healing'
                    />
                    <section className={menuStyle.foodInfoContainer}>
                        <div className={menuStyle.nameButton}>
                            <h2>The Healing</h2>
                            <button className={menuStyle.button}> + </button>
                        </div>
                        <h5 className={menuStyle.text}>Butternut squash, red onions, garlic, coconut milk</h5>
                    </section>
                </li>






            </ul>
        </div>
    )
}

export default Soups
