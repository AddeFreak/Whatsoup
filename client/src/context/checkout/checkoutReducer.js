import {
    ADD_FOOD,
    CANCEL_CHECKOUT
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                checkout: [...state.checkout, action.payload],
            }
        case CANCEL_CHECKOUT:
            return {
                checkout: []
            }

        default:
            return state
    }
}

