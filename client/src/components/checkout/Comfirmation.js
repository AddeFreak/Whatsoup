import React, { useContext, useEffect } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import styled from 'styled-components'
import LinkButton from '../buttons/LinkButton'


const ConfStyle = styled.div`
height:70vh;
background: #dfd;
display: column;
text-align: center;
justify-content: center;
font-family: Lobster;
font-size:20px;
font-weight: 100;
h1 {
margin: 0px;
padding-top: 20px;
}
.rad{
    font-family: 'roboto';
}
.thanks {
    border-top: 1px solid black;
     background: #cff;
     padding: 5px;
     height: 100%;
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
                <div className="" key={item.id} >



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
            <h5>Your order is confirmed!</h5>

            <div>You will recive your order {addressItems()}</div> <p>
                You will get a notification 5 minutes before we arrive.</p>
            <div>See you soon at {addressItem()}</div>
            <p> Please check your email for receipt and order details.</p>

        </div>
            <div className="thanks"><h1>Thank you!</h1>
                <p>With this sustainable choice, we can ensure that both your and the planet's health is a priority. You’re great!

Hope you will enjoy the food and welcome back. </p>

                <LinkButton to="/home">GO TO START PAGE</LinkButton></div>


        </ConfStyle >
    );
};

export default Comfirmation;