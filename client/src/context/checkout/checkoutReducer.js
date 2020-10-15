import {
    ADD_FOOD,
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                checkout: [...state.checkout, action.payload],
            }

        default:
            return state
    }
}

