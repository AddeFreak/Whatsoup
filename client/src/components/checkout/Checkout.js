//Good choice
//Choose timeslot
//order
import React, { useContext, useEffect } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import styled from 'styled-components'

const StyledCheckout = styled.div`

.container {
    border: 1px solid red;
    color:blue;
}
`

const Checkout = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout } = checkoutContext


    const totalPrice = checkout.reduce((acc, curr) => acc + curr.price, 0);

    const listItems = checkout.map(el => (
        <div key={el.id}>
            {`${el.name}: ${el.price}`}
        </div>
    ))

    return (
        <StyledCheckout>
            <div className='container'>
                <span>Items in cart : {checkout.length}</span>
                <br />
                <h5>Products</h5>
                <span>{listItems}</span>
                <h5>Total price : {totalPrice}</h5>

            </div>
        </StyledCheckout>
    )
}

export default Checkout
