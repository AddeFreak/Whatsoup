import React, { useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CheckoutContext from './checkoutContext'
import checkoutReducer from './checkoutReducer'

import {
    ADD_FOOD,
    CANCEL_CHECKOUT,
    // GET_ORDER,
    // DELETE_FOOD,

} from '../types'

const CheckoutState = (props) => {

    const initialState = { checkout: [] }

    const [state, dispatch] = useReducer(checkoutReducer, initialState
        //() => {
        // const localData = localStorage.getItem('order')
        // return localData ? JSON.parse(localData) : []
        //}
    )

    /*  useEffect(() => {
         localStorage.setItem('')
     }, [state]) */

    //Delete checkout
    const cancelCheckout = () => {
        dispatch({ type: CANCEL_CHECKOUT })
    }
    //Increase item in checkout

    //Delete item in checkout


    //Add item till checkout
    const addFood = (type, name, price) => {
        const id = uuidv4();

        dispatch({ type: ADD_FOOD, payload: { type, name, price, id } })
        localStorage.setItem('order', JSON.stringify(id))
    }



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