import React, { useEffect, useContext } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext';
import styled from 'styled-components';
import LinkButton from '../buttons/LinkButton';
import { StyledSummary } from './StyledSummary';
import MyCards from '../checkout/MyCards';

const CheckoutHeader = styled.div`
	background: #dfd;
	display: flex;
	justify-content: center;
	font-family: Lobster;
	font-size: 35px;
	font-weight: 100;
	padding-top: 20px;
	padding-bottom: 20px;
`;

const OrderSummary = () => {
	const checkoutContext = useContext(CheckoutContext);
	const {
		getCheckout,
		getAddress,
		checkout,
		cancelCheckout,
		address,
		friend,
		getFriend,
	} = checkoutContext;

	useEffect(() => {
		getCheckout();
		getAddress();
		getFriend();
	}, []);
	const listItems = () => {
		if (checkout.length > 0) {
			const allItems = checkout.map((item) => (
				<div key={item.id}>{item.name}</div>
			));
			return allItems;
		} else {
			return '';
		}
	};
	const listPrice = () => {
		if (checkout.length > 0) {
			const allItems = checkout.map((item) => (
				<div key={item.id}>{item.price} SEK</div>
			));
			return allItems;
		} else {
			return '';
		}
	};
	const addressItems = () => {
		if (address.length > 0) {
			const allItems = address.map((item) => (
				<div className='rad' key={item.id}>
					<section>Name: {item.name}</section>
					<section>Address: {item.address}</section>
					<section>Message:</section>
					<p>"{item.message}"</p>
					<section>Date: {item.date}</section>
				</div>
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

	const ifFriend = () => {
		if (friend.length > 0) {
			const allItems = friend.map((item) => (
				<div key={item.id} className='frienditem'>
					<div> {item.type}</div>
					<div> {item.price}</div>
				</div>
			));
			return allItems;
		} else {
			return '';
		}
	};
	const ftotal = () => {
		if (friend.length > 0) {
			const totalPrice = friend.reduce((acc, curr) => acc + curr.price, 0);
			return totalPrice;
		} else {
			return '';
		}
	};
	const finalPrice = () => {
		return ftotal() + total();
	};

	return (
		<>
			<CheckoutHeader>Checkout</CheckoutHeader>

			<StyledSummary>
				<div>
					<div className='container'>
						<h5>YOUR ORDER</h5>

						<section className='listItems'>
							<h5>{listItems()}</h5>
							<h5>{listPrice()}</h5>
						</section>

						<section className='totalPrice'>
							<h5>PRICE FOR YOU</h5>
							<h5 className='finalPrice'>{total()} sek</h5>
						</section>
						<div className='friendorder'>
							{(() => {
								if (friend.length > 0) {
									return (
										<div className='friendorder'>
											<h5 className='friend'>FRIEND ORDER</h5>
											<div className='frienditems'>
												<h5>{ifFriend()}</h5>
											</div>
											<section className='totalPrice'>
												<h5>PRICE FOR FRIEND</h5>
												<h5 className='total'>{total()} sek</h5>
											</section>
											<section className='totalPrice'>
												<h5 className='tp'>TOTAL PRICE:</h5>{' '}
												<h5 className='final'>{finalPrice()} sek</h5>
											</section>
										</div>
									);
								} else {
									return <p></p>;
								}
							})()}
						</div>
						{(() => {
							if (address.length > 0) {
								return (
									<div>
										<section className='address'> {addressItems()}</section>
									</div>
								);
							} else {
								return <p></p>;
							}
						})()}
					</div>

					<MyCards />
					<section className='cancelOk'>
						<LinkButton to='/soup' onClick={Cancel}>
							CANCEL
						</LinkButton>
						<LinkButton to='confirmation'>PAY</LinkButton>
					</section>
				</div>
			</StyledSummary>
		</>
	);
};

export default OrderSummary;
