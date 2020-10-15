import React from 'react';
import Navbar from '../navbar/Navbar'
import ShowFood from './ShowFood'
import fried from '../../assets/Protein/friedtofu.png'
import chicken from '../../assets/Protein/grilledchicken.png'
import shrimp from '../../assets/Protein/shrimps.png'
import beef from '../../assets/Protein/beef.png'

const Protein = () => {


    const database = [
        { type: "Protein", id: 1, name: "Fried Tofu", desc: "100 gram", price: 50, img: fried, nextItem: "PROTEIN" },
        { type: "Protein", id: 2, name: "Grilled Chicken", desc: "100 gram", price: 50, img: chicken, nextItem: "PROTEIN" },
        { type: "Protein", id: 3, name: "Hand-peeled Shrimps", desc: "75 gam", price: 50, img: shrimp, nextItem: "PROTEIN" },
        { type: "Protein", id: 4, name: "Grilled Beef", desc: "50 gram", price: 50, img: beef, nextItem: "PROTEIN" },

    ]

    return (
        <div>

            <Navbar typeOfFood='Protein' price='30' />
            {
                database.map(item => (
                    <ShowFood type={item.type} name={item.name} id={item.id} key={item.id} desc={item.desc} img={item.img} nextItem={item.nextItem} />
                ))}
        </div>
    )
}

export default Protein;