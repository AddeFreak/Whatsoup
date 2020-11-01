

import React, { useState, useContext } from 'react'
import CheckoutContext from '../../context/checkout/checkoutContext'
import axios from 'axios'



const ContactForm = () => {

    const [formData, setFormData] = useState({})
    const checkoutContext = useContext(CheckoutContext)
    const { addRess } = checkoutContext

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        addRess(formData)
        setFormData({
            name: '',
            address: '',
            mobile: '',
            message: '',
            date: ''
        })


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={updateInput}
                    value={formData.name || ''}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={updateInput}
                    value={formData.address || ''}
                />
                <input
                    type="text"
                    name="mobile"
                    placeholder="Phone"
                    onChange={updateInput}
                    value={formData.mobile || ''}
                />

                <textarea
                    type="text"
                    name="message"
                    placeholder="Anything else?"
                    onChange={updateInput}
                    value={formData.message || ''}
                ></textarea>
                <input
                    name="date"

                    onChange={updateInput}
                    value={formData.date || ''}
                    type="datetime-local" />


                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ContactForm