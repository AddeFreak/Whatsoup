import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import checkoutContext from './contactContext'
import checkoutReducer from './contactReducer'

// import {
//     GET_ORDER,
//     ADD_FOOD,
//     DELETE_FOOD,

//   } from '../types'

const CheckoutState = (props) => {
    const initialState = {
        food: [
            {
                id: '1',
                name: 'The Healing',
                type: 'Soup',

            },
            {
                id: '2',
                name: 'The Healing',
                type: 'Soup',
            },
            {
                id: '3',
                name: 'The Healing',
                type: 'Soup',
            },
        ],
    }

    const [state, dispatch] = useReducer(checkoutReducer, initialState)

    //Add food
    const addFood = (food) => {
        food.id = uuidv4()
        dispatch({ type: ADD_FOOD, payload: food })
    }
    //delete food
    const deleteFood = (id) => {
        dispatch({ type: DELETE_FOOD, payload: id })
    }


    return (
        <ContactContext.Provider
            value={{
                food: state.allFood,
                addFood,
                deleteFood

            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState
