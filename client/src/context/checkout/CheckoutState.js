import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CheckoutContext from './checkoutContext'
import checkoutReducer from './checkoutReducer'
import axios from 'axios'

import {
    ADD_FOOD,
    CANCEL_CHECKOUT,
    UPDATE_CHECKOUT,
    GET_CHECKOUT,
    // DELETE_FOOD,

} from '../types'



const CheckoutState = (props) => {

    const initialState = { checkout: [] }

    const [state, dispatch] = useReducer(checkoutReducer, initialState,
        // () => {
        //     const localData = localStorage.getItem('food')
        //     return localData ? JSON.parse(localData) : []
        // }
    )


    //Delete checkout
    const cancelCheckout = async id => {
        try {
            await axios.delete(`https://ey-whatsoup.firebaseio.com/order.json/`);
            dispatch({ type: CANCEL_CHECKOUT, payload: id })

        } catch (err) {
            console.log(err);
            // dispatch({
            //   type: CHECKOUT_CANCEL_ERROR, 
            //   payload: err.response.msg
            // });
        }
    }

    //Increase item in checkout

    //Delete item in checkout


    /*  let order = { type, name, price }
            const res = fetch('https://ey-whatsoup.firebaseio.com/order.json', {
                method: 'POST',
                body: JSON.stringify(order),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                return response.json()
            }).then(responseData => {
                dispatch({ type: ADD_FOOD, payload: responseData })
    
            }) */


    //Add item till checkout
    const addFood = async (type, name, price) => {
        // const id = uuidv4();
        let order = { type, name, price }
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post(
                'https://ey-whatsoup.firebaseio.com/order.json',
                order,
                config
            )
            dispatch({
                type: ADD_FOOD,
                payload: res.data
            })
        } catch (err) {
            //console.log('error')
            //   dispatch({
            //     type: CONTACT_ERROR,
            //     payload: err.response.msg,
        }
    }
    const getCheckout = async () => {
        try {
            let res = await axios.get('https://ey-whatsoup.firebaseio.com/order.json')

            const orders = [];
            for (let key in res.data) {
                orders.push({
                    ...res.data[key],
                    id: key
                });
            }

            dispatch({ type: GET_CHECKOUT, payload: orders })

        } catch (err) {
            // dispatch({
            //   type: CONTACT_ERROR,
            //   payload: err.response.msg
            // });
            console.log('error - could not get checkout')
        }
    }
    console.log(state.checkout)
    return (
        <CheckoutContext.Provider
            value={{
                checkout: state.checkout,
                addFood,
                cancelCheckout,
                getCheckout
            }}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutState