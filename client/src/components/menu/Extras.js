import React from 'react';
import ShowFood from './ShowFood';
import cheese from '../../assets/Bread/cheesy.png';
import vampire from '../../assets/Bread/vampire.png';
import nuts from '../../assets/Bread/goingnuts.png';
import baguette from '../../assets/Bread/asgoodasitbaguettes.png';
import butter from '../../assets/Spreads/butter.png';
import beet from '../../assets/Spreads/beet.png';
import aioli from '../../assets/Spreads/aioli.png';
import avocado from '../../assets/Spreads/avocado.png';
import amicake from '../../assets/Treats/pancake.png';
import pancake from '../../assets/Treats/regularpan.png';
import Navbar from '../navbar/Navbar';
import Alert from '../alert/Alert';

const Extras = () => {
	const database = [
		{
			type: 'Extras',
			key: 10,
			name: 'The Cheesy One',
			desc: '',
			price: 15,
			img: cheese,
			nextItem: 'PROTEIN',
			alt: 'Soup with taste of healing',
			next: 'protein',
		},
		{
			type: 'Extras',
			key: 11,
			name: 'Hold BAck Vampire',
			desc: '',
			price: 15,
			img: vampire,
			nextItem: 'PROTEIN',
			next: 'protein',
		},
		{
			type: 'Extras',
			key: 12,
			name: 'Going Nuts',
			desc: '',
			price: 15,
			img: nuts,
			nextItem: 'PROTEIN',
			next: 'protein',
		},
		{
			type: 'Extras',
			key: 13,
			name: 'As Good As It Baguettes',
			desc: '',
			price: 15,
			img: baguette,
			nextItem: 'PROTEIN',
			next: 'protein',
		},
		{
			type: 'Extras',
			key: 14,
			name: 'Whipped Butter',
			desc: '75 gram',
			price: 15,
			img: butter,
			nextItem: 'PROTEIN',
			alt: 'Soup with taste of healing',
			next: 'protein',
		},
		{
			type: 'Extras',
			key: 15,
			name: 'Beetroot Hummus',
			desc: '100 gram',
			price: 15,
			img: beet,
			nextItem: 'PROTEIN',
			next: 'protein',
		},
		{
			type: 'Extras',
			key: 16,
			name: 'Tryffle Aioli',
			desc: '75 gram',
			price: 15,
			img: aioli,
			nextItem: 'PROTEIN',
			next: 'protein',
		},
		{
			type: 'Extras',
			key: 17,
			name: 'Sliced Avocado',
			desc: '75 gram',
			price: 15,
			img: avocado,
			nextItem: 'PROTEIN',
			next: 'protein',
		},

		{
			type: 'Extras',
			key: 18,
			name: 'American Pancakes',
			desc: 'With lemon and blueberrys',
			price: 15,
			img: amicake,
			nextItem: 'BEVERAGES',
			next: 'beverages',
		},
		{
			type: 'Extras',
			key: 19,
			name: 'Pancakes',
			desc: 'with cream and jam',
			price: 15,
			img: pancake,
			nextItem: 'BEVERAGES',
			next: 'beverages',
		},
	];

	return (
		<div>
			<Alert />
			<Navbar typeOfFood='Extras' price='15' next='/beverages' />
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

export default Extras;
