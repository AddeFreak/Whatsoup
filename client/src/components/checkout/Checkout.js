import React, { useEffect, useContext } from 'react'
import Order from './Order'
import CheckoutContext from '../../context/checkout/checkoutContext'
import styled from 'styled-components'
//import Friends from '../friend/Friends'
import Friend from '../friend/Friend'
import GoodChoice from './GoodChoice'





const CheckoutHeader = styled.div`
background: #dfd;
display: flex;
justify-content: center;
font-family: Lobster;
font-size:35px;
font-weight: 100;
padding-top: 20px;
padding-bottom: 20px;
`


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
            <CheckoutHeader>Checkout</CheckoutHeader>
            <GoodChoice />
            <Order></Order>


            <Friend />

        </>
    )
}

export default Checkout
