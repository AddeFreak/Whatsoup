import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CheckoutContext from './checkoutContext'
//import checkoutReducer from './checkoutReducer'

import {
    GET_ORDER,
    ADD_FOOD,
    DELETE_FOOD,

} from '../types'

const CheckoutState = (props) => {
    const [checkout, setCheckout] = useState([]);



    //const [state, dispatch] = useReducer(checkoutReducer, initialState)

    // //Add food
    // const addFood = (food) => {
    //     food.id = uuidv4()
    //     dispatch({ type: ADD_FOOD, payload: food })
    // }
    // //delete food
    // const deleteFood = (id) => {
    //     dispatch({ type: DELETE_FOOD, payload: id })
    // }

    // //delete checkout
    // const deleteOrder = (id) => {

    // }

    // // show checkout
    // const getOrder = (id) => {

    // }

    return (
        <CheckoutContext.Provider
            // value={{
            //     food: state.allFood,
            //     addFood,
            //     deleteFood

            // }}
            value={[checkout, setCheckout]}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutState