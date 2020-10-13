import React from 'react'
import Soups from './Soups'
import healing from '../../assets/healing.png'

const FoodList = () => {

    const database = [
        { type: "Soup", id: 1, name: "The Healing", desc: "Butternut squash, red onions, garlic, coconut milk", price: 50, img: healing },
        { type: "Soup", id: 2, name: "So Long Cold", desc: "Butternut squash, red onions, garlic, coconut milk", price: 5, img: healing }
    ]

    return (
        <div>
            {
                database.map(item => (
                    <Soups name={item.name} key={item.id} desc={item.desc} img={item.img} />
                ))}
        </div>
    )
}

export default FoodList
