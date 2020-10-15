import React from 'react'
import ShowFood from './ShowFood'
import healing from '../../assets/healing.png'
import Navbar from '../navbar/Navbar'



const Soups = () => {

    const database = [
        { type: "Bread", id: 1, name: "The Healing", desc: "Butternut squash, red onions, garlic, coconut milk", price: 50, img: healing, nextItem: "PROTEIN" },
        { type: "Soup", id: 2, name: "So Long Cold", desc: "Butternut squash, red onions, garlic, coconut milk", price: 50, img: healing, nextItem: "PROTEIN" }
    ]

    return (
        <div>

            <Navbar typeOfFood='Soup' price='50' />
            {
                database.map(item => (
                    <ShowFood type={item.type} name={item.name} id={item.id} key={item.id} desc={item.desc} img={item.img} nextItem={item.nextItem} />
                ))}
        </div>
    )
}

export default Soups
