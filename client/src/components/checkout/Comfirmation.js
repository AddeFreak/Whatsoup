import React, { useContext, useEffect } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import styled from 'styled-components'
import LinkButton from '../buttons/LinkButton'


const ConfStyle = styled.div`
height:100%;
background: #dfd;
display: flex;
text-align: center;
justify-content: center;
font-family: Lobster;
font-size:35px;
font-weight: 100;

.rad{
    font-family: 'roboto';
}

`
const Comfirmation = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { address, getAddress } = checkoutContext

    useEffect(() => {

        getAddress()

        // eslint-disable-next-line
    }, [])

    const addressItems = () => {
        console.log(address)
        if (address.length > 0) {
            const allItems = address.map(item => (
                <div className="rad" key={item.id} >



                    {item.date}
                </div>
            ))
            return allItems
        } else {
            return ''
        }
    }
    const addressItem = () => {
        console.log(address)
        if (address.length > 0) {
            const allItems = address.map(item => (
                <div key={item.id} >



                    {item.address}
                </div>
            ))
            return allItems
        } else {
            return ''
        }
    }
    return (
        <ConfStyle><div>
            <h1>Hurray! </h1>
            <h3>Your order is confirmed!</h3>

            <div>You will recive your order {addressItems()}</div> <p>
                You will get a notification 5 minutes before we arrive.</p>
            <div>See you soon at {addressItem()}</div>
            <p> Please check your email for receipt and order details.</p>
            <LinkButton to="/home">GO TO START PAGE</LinkButton>
        </div>

        </ConfStyle >
    );
};

export default Comfirmation;