import {
    ADD_FOOD,
    CANCEL_CHECKOUT,
    UPDATE_CHECKOUT,
    GET_CHECKOUT,
    ADD_TO_FRIEND,
    GET_FRIEND,
    REMOVE_FRIEND_ITEM,
    //UPDATE_CHECKOUT
    ADD_RESS,
    GET_ADDRESS
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case ADD_TO_FRIEND:
            return {
                ...state,
                friend: [...state.friend, action.payload],
            }
        case GET_CHECKOUT:
            return {
                ...state,
                checkout: action.payload
            }
        case GET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case REMOVE_FRIEND_ITEM:
            //action.payload.friend
            let foundIndex = action.payload.friend.findIndex(item => item.type == action.payload.type)
            //let newFriend = 

            return {
                ...state,
                friend: state.friend.filter((product, index) => index !== foundIndex),
            };
        case GET_FRIEND:
            return {
                ...state,
                friend: action.payload
            }
        case ADD_RESS:
            return {
                ...state,
                address: [...state.address, action.payload],
            }
        // case UPDATE_CHECKOUT:
        //     return {
        //         ...state,
        //         friend: [...state.friend, action.payload],
        //     }
        case ADD_FOOD:
            return {
                ...state,
                checkout: [...state.checkout, action.payload],
            }
        case GET_CHECKOUT:
            return {
                ...state,
                checkout: action.payload
            }
        case CANCEL_CHECKOUT:
            return {
                ...state,
                checkout: state.checkout.filter(
                    order => order.id !== action.payload
                )
            };

        default:
            return state
    }
}

