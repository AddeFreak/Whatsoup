import React, { useContext, useEffect, useState } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext';
import { StyledOrder } from './StyledOrder';
import LinkButton from '../buttons/LinkButton';
import Address from './Adress';
import FriendOrder from '../friend/FriendOrder';

const Order = () => {
	const checkoutContext = useContext(CheckoutContext);
	const { getCheckout, checkout, cancelCheckout } = checkoutContext;

	useEffect(() => {
		getCheckout();
	}, []);

	const listItems = () => {
		if (checkout.length > 0) {
			const allItems = checkout.map((item, index) => (
				<div className='pricediv' key={index}>
					{item.name}
				</div>
			));
			return allItems;
		} else {
			return '';
		}
	};

	const listPrice = () => {
		if (checkout.length > 0) {
			const allItems = checkout.map((item, index) => (
				<div key={index}>{item.price} SEK</div>
			));
			return allItems;
		} else {
			return '';
		}
	};

	const total = () => {
		if (checkout.length > 0) {
			const totalPrice = checkout.reduce((acc, curr) => acc + curr.price, 0);
			return totalPrice;
		} else {
			return '';
		}
	};

	const Cancel = () => {
		cancelCheckout();
	};

	return (
		<StyledOrder>
			<div className='container'>
				<h5>YOUR ORDER</h5>

				<section className='listItems'>
					<h5>{listItems()}</h5>
					<h5>{listPrice()}</h5>
				</section>

				<section className='totalPrice'>
					<h5>TOTAL PRICE</h5>
					<h5 className='finalPrice'>{total()} sek</h5>
				</section>

				<div className='form'>
					{' '}
					<section className='addhead'>Delivery Address</section>
					<Address />
				</div>

				<FriendOrder />
				<section className='topay'>Continue to payment?</section>
				<section className='cancelOk'>
					<LinkButton to='/soup' onClick={Cancel}>
						CANCEL
					</LinkButton>
					<LinkButton to='/ordersummary'>OK</LinkButton>
				</section>
			</div>
		</StyledOrder>
	);
};

export default Order;
