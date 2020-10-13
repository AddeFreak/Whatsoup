//Good choice
//Choose timeslot
//order
import React, { useContext } from 'react'
import CheckoutContext from '../context/checkout/checkoutContext'

const Checkout = () => {
    // const contactContext = useContext(CheckoutContext)
    // const { deleteCheckout } = checkoutContext

    const [checkout, setCheckout] = useContext(CheckoutContext)
    const totalPrice = checkout.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div>
            <span>items in cart : {checkout.length}</span>
            <br />
            <span>total price : {totalPrice}</span>

        </div>
    )
}

export default Checkout
