import React, { useState, useContext } from 'react'
import menuStyle from './menuStyle.module.css'
import Alert from './Alert'
import CheckoutContext from '../context/checkout/checkoutContext'


const Soups = (props) => {
    const [checkout, setCheckout] = useContext(CheckoutContext);

    const [alert, setAlert] = useState(null)

    const showAlert = (name, food) => {
        setAlert({ name, food })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const soup = { name: props.name, price: props.price };
        setCheckout(currentState => [...currentState, soup]);
        //implement add to cart
        showAlert('The Heeealing', 'PROTEIN')
    }


    return (
        <div>
            <Alert alert={alert} />

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
