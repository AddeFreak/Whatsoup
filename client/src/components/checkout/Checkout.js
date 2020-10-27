import React, { useEffect, useContext } from 'react'
import Order from './Order'
import CheckoutContext from '../../context/checkout/checkoutContext'

//import Friends from '../friend/Friends'
import Friend from '../friend/Friend'

const Checkout = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { getCheckout, getFriend } = checkoutContext



    useEffect(() => {
        getCheckout()
        getFriend()
        // eslint-disable-next-line
    }, [])





    return (
        <>
            <Order />
            <Friend />

        </>
    )
}

export default Checkout
