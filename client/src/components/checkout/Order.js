//Good choice
//Choose timeslot
//order
import React, { useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import styled from 'styled-components'

const StyledCheckout = styled.div`

.container {
    border: 1px solid red;
    color:blue;
    width:200px;
}
`

const Order = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { checkout, cancelCheckout } = checkoutContext



    const listItems = () => {
        if (checkout.length > 0) {
            const allItems = checkout.map(item => (
                <div key={item.id}>
                    {`${item.name} ${item.price}`}
                </div>
            ))
            return allItems
        } else {
            return ''
        }
    }

    const total = () => {
        if (checkout.length > 0) {
            const totalPrice = checkout.reduce((acc, curr) => acc + curr.price, 0)
            return 'Total price: ' + totalPrice
        } else {
            return ''
        }
    }

    const handleClick = () => {
        cancelCheckout()
    }

    console.log(checkout)

    return (
        <StyledCheckout>
            <div className='container'>
                <span>Items in cart : {}</span>
                <br />
                <h5>Products</h5>
                <span>{listItems()}</span>
                <h5>{total()}</h5>
                <button type='reset' onClick={handleClick}> CANCEL</button>

            </div>
        </StyledCheckout>
    )
}

export default Order
