import {
    GET_ORDER,
    ADD_FOOD,
    DELETE_FOOD,

} from '../types'



export default (state, action) => {
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                allFood: [...state.allFood, action.payload],
            }
        case DELETE_FOOD:
            return {
                ...state,
                allFood: state.allFood.filter(
                    (food) => food.id !== action.payload
                ),
            }
        default:
            return state
    }
}
