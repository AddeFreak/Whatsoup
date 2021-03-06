import React from 'react';
import ShowFood from './ShowFood';
import lime from '../../assets/Beverages/lime.png';
import apple from '../../assets/Beverages/apple.png';
import shots from '../../assets/Beverages/shots.png';
import fritz from '../../assets/Beverages/fritz.png';
import kombucha from '../../assets/Beverages/kombucha.png';
import Navbar from '../navbar/Navbar';
import Alert from '../alert/Alert';

const Beverages = () => {
	const database = [
		{
			type: 'Beverages',
			key: 20,
			name: 'Lemonade',
			desc: 'Lime and Lemon',
			price: 15,
			img: lime,
			nextItem: 'Ccheckout',
			alt: 'Soup with taste of healing',
			next: 'checkout',
		},
		{
			type: 'Beverages',
			key: 21,
			name: 'Juice',
			desc: 'Apple and Ginger',
			price: 15,
			img: apple,
			nextItem: 'Ccheckout',
			next: 'checkout',
		},
		{
			type: 'Beverages',
			key: 22,
			name: 'Three Shots',
			desc: '',
			price: 15,
			img: shots,
			nextItem: 'Ccheckout',
			next: 'checkout',
		},
		{
			type: 'Beverages',
			key: 23,
			name: 'Fritz-Kola',
			desc: '',
			price: 15,
			img: fritz,
			nextItem: 'Ccheckout',
			next: 'checkout',
		},
		{
			type: 'Beverages',
			key: 24,
			name: 'Kombucha',
			desc: '',
			price: 15,
			img: kombucha,
			nextItem: 'Ccheckout',
			next: 'checkout',
		},
	];

	return (
		<div>
			<Alert type={database.type} name={database.name} price={database.price} />
			<Navbar typeOfFood='Beverages' price='15' next='/checkout' />
			{database.map((item) => (
				<ShowFood
					type={item.type}
					name={item.name}
					price={item.price}
					key={item.key}
					desc={item.desc}
					img={item.img}
					alt={item.alt}
					nextItem={item.nextItem}
				/>
			))}
		</div>
	);
};

export default Beverages;
