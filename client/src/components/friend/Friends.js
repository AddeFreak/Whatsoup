import React, { useReducer, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const products = [
    { type: "Soup", id: 1, price: 50 },
    { type: "Protein", id: 2, price: 30 },
    { type: "Bread", id: 3, price: 15 },
    { type: "Spread", id: 4, price: 25 },
    { type: "Treats", id: 5, price: 15 },
    { type: "Beverages", id: 6, price: 25 }

]

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}
function cartReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.product];

        case 'remove':
            cart.filter((item) => item.id !== action.id)
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if (productIndex < 0) {
                return state;
            }
            const update = [...state];
            update.splice(productIndex, 1);
            return update;
        default:
            return state;
    }
}
function totalReducer(state, action) {
    if (action.type === 'add') {
        return state + action.price;
    }
    return state - action.price
}

function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions)
}
export default function Product() {
    const [cart, setCart] = useReducer(cartReducer, []);
    const [total, setTotal] = useReducer(totalReducer, 0);

    function add(product) {
        setCart({ product, type: 'add' });
    }
    function remove(product) {
        setCart({ product, type: 'remove' });
        console.log(product);
        console.log(product.id);
        console.log(cart);
    }
    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
      </div>
            <div>Total: {getTotal(cart)}</div>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <div>
                            <span aria-label={product.name}></span>
                        </div>
                        <button onClick={() => add(product)}>Add</button>
                        <button onClick={() => remove(product)}>Remove</button>
                    </div>
                ))}

            </div>
        </div>
    )
}