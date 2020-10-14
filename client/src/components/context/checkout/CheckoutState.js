import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CheckoutContext from './checkoutContext'
//import checkoutReducer from './checkoutReducer'

// import {
//     GET_ORDER,
//     ADD_FOOD,
//     DELETE_FOOD,

// } from '../types'

const CheckoutState = (props) => {
    const [checkout, setCheckout] = useState([]);
    //const [state, dispatch] = useReducer(checkoutReducer, initialState)

    // Add item till checkout
    // const addItem = (food) => {
    //     food.id = uuidv4()
    //     dispatch({ type: ADD_FOOD, payload: food })
    // }
    // //remove item from checkout
    // const removeItem = (id) => {
    //     dispatch({ type: DELETE_FOOD, payload: id })
    // }

    // //delete checkout - ta bort hela beställningen
    // const deleteOrder = (id) => {

    // }

    // // show checkout
    // const getOrder = (id) => {
    // }

    //Increase siffran under checkout som antal varor i varukorgen

    //Decrease siffran under checkout som antal varor i varukorgen

    return (
        <CheckoutContext.Provider
            // value={{
            //     food: state.allFood,
            //     addFood,
            //     removeFood
            // }}
            value={[checkout, setCheckout]}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutState