import React, { useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import LinkButton from '../buttons/LinkButton';
import DeleteButton from '../buttons/DeleteButton';
import AddButton from '../buttons/AddButton';
import buttonsStyle from '../buttons/buttonsStyle.module.css';
import CheckoutContext from '../../context/checkout/checkoutContext';
import { StyleAlert } from './StyleAlert';
import BlurBackground from './BlurBackground/BlurBackground';

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert, removeAlert } = alertContext;
	const checkoutContext = useContext(CheckoutContext);
	const { checkout, getCheckout } = checkoutContext;

	const handleClick = (e) => {
		console.log(checkout);
		e.preventDefault();
		removeAlert();
	};

	const closeAlert = (e) => {
		e.preventDefault();
		removeAlert();
	};

	useEffect(() => {
		getCheckout();
	}, []);

	return (
		alert !== null && (
			<StyleAlert>
				<BlurBackground />
				<div key={alert.id} className={`alert-container alert-${alert.type}`}>
					<button onClick={handleClick} className={buttonsStyle.closeX}>
						x
					</button>
					<h1 className='name'>{alert.name}</h1>
					<p className='text'>You placed {alert.name} in your shopping cart.</p>
					<section className='ingredients-container'>
						<h3 className='name'>Ingredients</h3>
						<p className='text'>
							Ingredients list and carbs. Do adjustments here. We will fix it!
						</p>
						<div className='nextContainer'>
							<LinkButton>READ MORE</LinkButton>
						</div>
					</section>
				</div>
			</StyleAlert>
		)
	);
};

export default Alert;
