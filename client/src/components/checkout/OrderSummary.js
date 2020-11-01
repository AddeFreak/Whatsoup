import React, { useEffect, useContext } from 'react'
import Order from './Order'
import CheckoutContext from '../../context/checkout/checkoutContext'
import styled from 'styled-components'
//import Friends from '../friend/Friends'
import Address from './Adress'
import LinkButton from '../buttons/LinkButton'
import { StyledSummary } from './StyledSummary'
import MyCards from "../checkout/MyCards";





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


const OrderSummary = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { getCheckout, getAddress, checkout, cancelCheckout, address, friend, getFriend } = checkoutContext



    useEffect(() => {
        getCheckout()
        getAddress()
        getFriend()
        // eslint-disable-next-line
    }, [])
    const listItems = () => {
        console.log(checkout)
        if (checkout.length > 0) {
            const allItems = checkout.map(item => (
                <div key={item.id} >
                    {item.name}
                </div>
            ))
            return allItems
        } else {
            return ''
        }
    }
    const listPrice = () => {
        if (checkout.length > 0) {
            const allItems = checkout.map(item => (
                <div key={item.id}>
                    {item.price} SEK
                </div>
            ))
            return allItems
        } else {
            return ''
        }
    }
    const addressItems = () => {
        console.log(address)
        if (address.length > 0) {
            const allItems = address.map(item => (
                <div className="rad" key={item.id} >
                    <section>Name: {item.name}</section>
                    <section>Address: {item.address}</section>
                    <section>Message:</section>
                    <p>"{item.message}"</p>
                    <section >Date: {item.date}</section>
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
            return totalPrice
        } else {
            return ''
        }
    }

    const Cancel = () => {
        cancelCheckout()
    }

    const ifFriend = () => {
        if (friend.length > 0) {
            const allItems = friend.map(item => (
                <div key={item.id} >
                    {item.type}
                    {item.price}
                </div>
            ))
            return allItems
        } else {
            return ''
        }
    }
    const ftotal = () => {

        if (friend.length > 0) {
            const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice

        } else {
            return ''

        }
    }
    const finalPrice = () => {
        return ftotal() + total()
    }

    console.log(ifFriend())

    return (
        <>
            <CheckoutHeader>Checkout</CheckoutHeader>


            <StyledSummary>
                <div className='container'>
                    <h5>YOUR ORDER</h5>

                    <section className='listItems'>
                        <h5>{listItems()}</h5>
                        <h5>{listPrice()}</h5>

                    </section>

                    <section className='totalPrice'>
                        <h5>TOTAL PRICE</h5>
                        <h5 className='finalPrice'>{total()} sek</h5>
                    </section>
                    <div>Friend
                        {(() => {
                            if (friend.length > 0) {
                                return <div> <section>{ifFriend()}</section>
                                    <section>{ftotal()}</section>
                                    <section> Final price: {finalPrice()}</section></div>
                            } else {
                                return <p></p>;
                            }
                        })()}
                    </div>
                    <section className="address"> Address{addressItems()}</section>

                    <MyCards />
                    <section className='cancelOk'>
                        <LinkButton to='/soup' onClick={Cancel}>CANCEL</LinkButton>
                        <LinkButton>OK</LinkButton>
                    </section>

                </div>
            </StyledSummary>

        </>
    )
}

export default OrderSummary


