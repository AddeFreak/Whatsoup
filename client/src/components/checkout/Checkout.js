//Good choice
//Choose timeslot
//order
import React, { useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'

const Checkout = () => {
    //const [checkout, setCheckout] = useContext(CheckoutContext)

    const checkoutContext = useContext(CheckoutContext)
    const { checkout } = checkoutContext

    //const totalPrice = checkout.reduce((acc, curr) => acc + curr.price, 0);


    return (
        <div>
            <span>items in cart : {checkout.length}</span>
            <br />
            <span>total price : {checkout.name}</span>
            <span>total price : </span>

        </div>
    )
}

export default Checkout
