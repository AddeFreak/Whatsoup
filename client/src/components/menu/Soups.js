import React, { useState, useContext } from 'react'
import menuStyle from './menuStyle.module.css'
import CheckoutContext from '../context/checkout/checkoutContext'
import AlertContext from '../context/alert/alertContext'


const Soups = (props) => {
    const [checkout, setCheckout] = useContext(CheckoutContext);
    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext





    const handleSubmit = (e) => {
        e.preventDefault()


        const soup = { name: props.name, price: props.price, nextItem: props.nextItem, type: props.type };

        setAlert(props.name, props.nextItem, props.type)

        setCheckout(currentState => [...currentState, soup]);
        //implement add to cart
    }


    return (
        <div>
            <ul className={menuStyle.cards}>
                <li>
                    <img
                        className={menuStyle.img}
                        src={props.img}
                        alt='Soup with taste of healing'
                    />
                    <section className={menuStyle.foodInfoContainer}>
                        <div className={menuStyle.nameButton}>
                            <h2>{props.name}</h2>
                            <button type='click' onClick={handleSubmit} className={menuStyle.button}> + </button>
                        </div>
                        <h5 className={menuStyle.text}>{props.desc}</h5>
                    </section>
                </li>
            </ul>
        </div>

    )
}

export default Soups
