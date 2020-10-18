import React, { useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CheckoutContext from './checkoutContext'
import checkoutReducer from './checkoutReducer'


import {
    ADD_FOOD,
    CANCEL_CHECKOUT,
    UPDATE_CHECKOUT,
    // GET_ORDER,
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
    const cancelCheckout = () => {
        dispatch({ type: CANCEL_CHECKOUT })
    }
    //Increase item in checkout

    //Delete item in checkout



    /* const updateCheckout = () => {
        if (localStorage.getItem("checkout") !== null) {
            const fetchedCheckout = JSON.parse(localStorage.getItem("checkout"));
            console.log(state.checkout)
            dispatch({ type: UPDATE_CHECKOUT, payload: fetchedCheckout })

        }
    } */


    //Add item till checkout
    const addFood = (type, name, price) => {
        const id = uuidv4();
        let order = { type, name, price }
        fetch('https://ey-whatsoup.firebaseio.com/order.json', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            return response.json()
        })/* .then(responseData => {
            dispatch({ type: ADD_FOOD, payload: responseData })

        }) */
        /* const res = axios.post('/orders.json', type, name, price)
            .then(response => console.log(response))
            .catch(error => console.log(error)) */


        /*  localStorage.setItem('food', JSON.stringify(food))
 
         let foodArray = Object.values(food)
         foodArray.push(id) */

        dispatch({ type: ADD_FOOD, payload: { type, name, price, id } })
        console.log(state.checkout)
        console.log()
        console.log(JSON.stringify(state.checkout))

    }

    /*  useEffect(() => {
         localStorage.setItem("food", JSON.stringify(food));
     },  [food])*/


    return (
        <CheckoutContext.Provider
            value={{
                checkout: state.checkout,
                addFood,
                cancelCheckout,
            }}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutState