import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CheckoutContext from './checkoutContext'
import checkoutReducer from './checkoutReducer'

import {
    ADD_FOOD,
    // GET_ORDER,
    // DELETE_FOOD,

} from '../types'

const CheckoutState = (props) => {

    const initialState = { checkout: [] }

    const [state, dispatch] = useReducer(checkoutReducer, initialState)

    //Add item till checkout
    const addFood = (type, name, price) => {
        const id = uuidv4();
        dispatch({ type: ADD_FOOD, payload: { type, name, price, id } })
    }



    return (
        <CheckoutContext.Provider
            value={{
                checkout: state.checkout,
                addFood,
                // removeFood
            }}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutState