import React, { useContext, useEffect } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext'
import styled from 'styled-components'

const Input = styled.div`
input{
   
    width: 150px;
    
}
`


const FriendComponent = styled.div`
display: flex;
justify-content:row;
flex-direction: column;
.type{
  
}
.divs{
display: flex;
align-items: center;
justify-content:space-around;
}
button{
   background-color: transparent;
}
`
const Friend = () => {
    const checkoutContext = useContext(CheckoutContext)
    const { friend, addToFriend, getFriend, removeFriendItem } = checkoutContext

    const products = [
        { type: "Soup", id: 1, price: 50 },
        { type: "Protein", id: 2, price: 30 },
        { type: "Extras", id: 3, price: 15 },
        { type: "Beverages", id: 4, price: 25 }
    ]

    useEffect(() => {

        total()
        getFriend()

        // eslint-disable-next-line
    }, [])
    const handleAdd = (product) => {

        addToFriend(product.type, product.price)


    }


    const handleRemove = (product) => {
        // hitta indexet i arrayen där titeln matcher
        // filtrera bort elementet där index matchar
        removeFriendItem(product)

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
    const counter = (product) => {

        let quantity = friend.reduce((acc, child) => {
            if (!acc[child.type]) {
                acc[child.type] = 0;
            } acc[child.type]++;
            return acc;
        }, {})

        const entries = Object.entries(quantity)

        for (const [food, count] of entries) {
            if (food === product.type) {
                return count
            }
        }
    }

    return (
        <div className="wrapper">
            <Input>  <div><h1>Which friend is this treasure for?</h1>
                <input type="text" placeholder=" Name" />
                <input type="text" placeholder=" Number" />
            </div></Input>
            <FriendComponent>

                <div >
                    {products.map(product => (
                        <div key={product.id}>
                            <span className="divs">
                                <div className="type">{product.type}</div>
                                <button onClick={(e) => handleAdd(product)}>+</button>


                                {/*  <div> {counter(product)}</div> */}

                                {(() => {
                                    if (friend.length > 0) {
                                        return <div className="type" >
                                            <p> {counter(product)}</p>
                                        </div>
                                    } else {
                                        return <div className="type" >0</div>;
                                    }
                                })()}


                                <button onClick={() => handleRemove(product)}>-</button>
                                <div>{product.price}</div>
                            </span>
                        </div>
                    ))}

                </div>
                <div >
                    Shopping Cart: {friend.length}
                </div>
                <div>Total: {total()}</div></FriendComponent>
            <div><h1>Send a message!</h1>
                <textarea />
            </div>
        </div>
    );
};

export default Friend;