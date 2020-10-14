import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import { v4 as uuidv4 } from 'uuid'

import { SET_ALERT, REMOVE_ALERT } from '../types'

const AlertState = (props) => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (name, nextItem, type) => {
        const id = uuidv4()
        dispatch({
            type: SET_ALERT,
            payload: { name, nextItem, type, id },
        })
    }

    const removeAlert = (id) => {

        dispatch({
            type: REMOVE_ALERT,
            payload: { id }
        })
    }


    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert,
                removeAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
