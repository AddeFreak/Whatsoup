import React, { useContext, useEffect } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext'
import styled from 'styled-components'

const Input = styled.div`
input{
   
    width: 150px;
    
}


`
const Friend = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { friend, addToFriend, getFriend, removeFriendItem } = checkoutContext

    const products = [
        { type: "Soup", id: 1, price: 50 },
        { type: "Protein", id: 2, price: 30 },
        { type: "Bread", id: 3, price: 15 },
        { type: "Spread", id: 4, price: 25 },
        { type: "Treats", id: 5, price: 15 },
        { type: "Beverages", id: 6, price: 25 }
    ]

    useEffect(() => {

        total()
        getFriend()

        // eslint-disable-next-line
    }, [])
    const handleAdd = (product) => {

        addToFriend(product.type, product.price)


    }


    const handleRemove = (props) => {
        removeFriendItem()

        //window.location.reload()
    }



    const total = () => {

        if (friend.length > 0) {
            const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0)
            return totalPrice.toString()

        } else {
            return ''

        }
    }
    console.log(friend)

    return (
        <div className="wrapper">
            <Input>  <div><h1>Which friend is this treasure for?</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Number" />
            </div></Input>
            <div>
                Shopping Cart: {friend.length}
            </div>
            <div>Total: {total()}</div>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <span>
                            <div>{product.type}</div>
                            <button onClick={(e) => handleAdd(product)}>+</button>
                            <button onClick={() => handleRemove()}>-</button>
                            <div>{product.price}</div>
                        </span>
                    </div>
                ))}

            </div>
            <div><h1>Send a message!</h1>
                <textarea />
            </div>
        </div>
    );
};

export default Friend;