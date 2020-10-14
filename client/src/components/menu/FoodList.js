import React from 'react'
import Soups from './Soups'
import healing from '../../assets/healing.png'
import Navbar from '../navbar/Navbar'



const FoodList = () => {

    const database = [
        { type: "Soup", id: 1, name: "The Healing", desc: "Butternut squash, red onions, garlic, coconut milk", price: 50, img: healing, nextItem: "PROTEIN" },
        { type: "Soup", id: 2, name: "So Long Cold", desc: "Butternut squash, red onions, garlic, coconut milk", price: 50, img: healing, nextItem: "PROTEIN" }
    ]

    return (
        <div>

            <Navbar typeOfFood='Soup' price='50' />
            {
                database.map(item => (
                    <Soups type={item.type} name={item.name} key={item.id} desc={item.desc} img={item.img} nextItem={item.nextItem} />
                ))}
        </div>
    )
}

export default FoodList
