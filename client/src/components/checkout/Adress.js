import React, { useState, useContext } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext';

const ContactForm = () => {
	const [formData, setFormData] = useState({});
	const checkoutContext = useContext(CheckoutContext);
	const { addRess } = checkoutContext;

	const updateInput = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		addRess(formData);
		setFormData({
			name: '',
			address: '',
			mobile: '',
			message: '',
			date: '',
		});
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='name'
					placeholder=' Name'
					onChange={updateInput}
					value={formData.name || ''}
					required
				/>
				<input
					type='text'
					name='address'
					placeholder=' Address'
					onChange={updateInput}
					value={formData.address || ''}
					required
				/>
				<input
					type='text'
					name='mobile'
					placeholder=' Phone'
					onChange={updateInput}
					value={formData.mobile || ''}
					required
				/>
				<input
					name='date'
					onChange={updateInput}
					value={formData.date || ''}
					type='datetime-local'
				/>
				<textarea
					type='text'
					name='message'
					placeholder=' Anything else?'
					onChange={updateInput}
					value={formData.message || ''}></textarea>

				<button type='submit'>Submit</button>
			</form>
		</>
	);
};

export default ContactForm;
