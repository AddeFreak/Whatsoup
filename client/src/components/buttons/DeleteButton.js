import React from 'react'
import buttonsStyle from './buttonsStyle.module.css'

const DeleteButton = () => {

    // delete food from checkout
    //handleClick={deleteFood}
    // deleteItem = (e) => {
    //     e.preventDefault()
    // }

    return (
        <>
            <button className={buttonsStyle.buttonWithBorder}>REMOVE</button>
        </>
    )
}

export default DeleteButton
