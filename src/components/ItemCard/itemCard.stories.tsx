import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemCard from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

const details = {
	currencySymbol: 'INR',
	slug: 'realme-watch-s',
	name: 'Realme Classic Watch  (Black Strap, Regular) #JustHere',
	title: 'Realme Classic Watch  (Black Strap, Regular) #JustHere',
	onSale: true,
	productId: 123,
	reviewCount: 10,
	image: {
		mediaItemUrl:
			'https://rukminim1.flixcart.com/image/832/832/kalecnk0/smartwatch/m/8/e/rma161-android-realme-original-imafs4hysvghjhaw.jpeg?q=70',
		altText: '',
	},
	averageRating: 3,
	featured: false,
	price: 1000,
	salePrice: 800,
	discountPer: 20,
	variations: [
		{
			onSale: true,
			salePrice: 800,
			discountPer: 20,
			price: 1000,
		},
	],
};

storiesOf('Ecommerce - ItemCard', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<div className='flex flex-wrap'>
			<ItemCard key='1' productDetails={details} />
			<ItemCard key='1' productDetails={details} />
			<ItemCard key='1' productDetails={details} />
		</div>
	));
