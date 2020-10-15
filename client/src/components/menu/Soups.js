import React, { useState, useContext } from 'react'
import menuStyle from './menuStyle.module.css'
import CheckoutContext from '../context/checkout/checkoutContext'
import AlertContext from '../context/alert/alertContext'
//import { createGlobalStyle } from 'styled-components'


const Soups = (props) => {
    const checkoutContext = useContext(CheckoutContext)
    const { addFood } = checkoutContext

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    const food = { name: props.name, price: props.price, id: props.id, nextItem: props.nextItem, type: props.type };

    const handleSubmit = (e) => {
        e.preventDefault()
        setAlert(food.name, food.nextItem, food.type)
        addFood(food);
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
