import React, { useReducer, useEffect } from 'react'
//import { v4 as uuidv4 } from 'uuid'
import CheckoutContext from './checkoutContext'
import checkoutReducer from './checkoutReducer'
import axios from 'axios'


import {
    ADD_TO_FRIEND,
    ADD_FOOD,
    CANCEL_CHECKOUT,
    UPDATE_CHECKOUT,
    GET_CHECKOUT,
    GET_FRIEND,
    REMOVE_FRIEND_ITEM,
    // DELETE_FOOD,
    ADD_RESS,
    GET_ADDRESS

} from '../types'



const CheckoutState = (props) => {

    const initialState = { checkout: [], friend: [], address: [] }

    const [state, dispatch] = useReducer(checkoutReducer, initialState,
        // () => {
        //     const localData = localStorage.getItem('food')
        //     return localData ? JSON.parse(localData) : []
        // }
    )

    //Add item to friend (soup, bread etc)
    const addToFriend = async (type, price) => {
        let friend = { type, price }
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post(
                'https://ey-whatsoup.firebaseio.com/friend.json',
                friend,
                config
            )
            dispatch({
                type: ADD_TO_FRIEND,
                payload: { id: res.data, ...friend }
            })

        } catch (err) {
            console.error('error - could not add food item to friend')
            //   dispatch({
            //     type: CONTACT_ERROR,
            //     payload: err.response.msg,
        }
    }
    const getFriend = async () => {

        try {
            let res = await axios.get('https://ey-whatsoup.firebaseio.com/friend.json')

            let friendCheckout = [];
            for (let key in res.data) {
                friendCheckout.push({
                    ...res.data[key],
                    id: key
                });
            }

            dispatch({ type: GET_FRIEND, payload: friendCheckout })

        } catch (err) {
            // dispatch({
            //   type: CONTACT_ERROR,
            //   payload: err.response.msg
            // });
            console.log('error - could not get checkout')
        }
    }
    const removeFriendItem = async (product) => {
        console.log(product.type)



        try {
            let res = await axios.get('https://ey-whatsoup.firebaseio.com/friend.json')

            let friendCheckout = [];
            for (let key in res.data) {
                friendCheckout.push({
                    ...res.data[key],
                    id: key
                });
            }
            let foundIndex = friendCheckout.findIndex(item => item.type == product.type)
            let IDtoRemove = friendCheckout[foundIndex].id
            //await axios.delete(`https://ey-whatsoup.firebaseio.com/friend.json`);
            await axios.delete(`https://ey-whatsoup.firebaseio.com/friend/${IDtoRemove}.json`
            );


            dispatch({ type: REMOVE_FRIEND_ITEM, payload: { type: product.type, friend: friendCheckout } })

        } catch (err) {
            console.log(err);
            // dispatch({
            //   type: CHECKOUT_CANCEL_ERROR, 
            //   payload: err.response.msg
            // });
        }
    }

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
    //Increase item in checkout

    //Delete item in checkout

    //Add item till checkout
    const addRess = async (formData) => {
        // const id = uuidv4();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post(
                'https://ey-whatsoup.firebaseio.com/address.json',
                formData,
                config
            )
            dispatch({
                type: ADD_RESS,
                payload: res.data
            })
        } catch (err) {
            //console.log('error')
            //   dispatch({
            //     type: CONTACT_ERROR,
            //     payload: err.response.msg,
        }
    }
    const getAddress = async () => {
        try {
            let res = await axios.get('https://ey-whatsoup.firebaseio.com/address.json')

            const address = [];
            for (let key in res.data) {
                address.push({
                    ...res.data[key],
                    id: key
                });
            }

            dispatch({ type: GET_ADDRESS, payload: address })
        } catch (err) {
            // dispatch({
            //   type: CONTACT_ERROR,
            //   payload: err.response.msg
            // });
            console.log('error - could not get checkout')
        }
    }
    console.log(state.address)
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

    return (
        <CheckoutContext.Provider
            value={{
                friend: state.friend,
                checkout: state.checkout,
                address: state.address,
                addToFriend,
                getFriend,
                addFood,
                cancelCheckout,
                getCheckout,
                removeFriendItem,
                addRess,
                getAddress
            }}
        >
            {props.children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutState