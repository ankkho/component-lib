import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import CartItemDetails from './index';

const details = {
	currencySymbol: 'INR',
	slug: 'realme-watch-s',
	name: 'Realme Classic Watch  (Black Strap, Regular) #JustHere',
	title: 'Realme Classic Watch  (Black Strap, Regular) #JustHere',
	onSale: true,
	productId: 123,
	discountPer: 20,
	reviewCount: 10,
	quantity: 1,
	brandName: 'Real Me',
	image: {
		mediaItemUrl:
			'https://rukminim1.flixcart.com/image/832/832/kalecnk0/smartwatch/m/8/e/rma161-android-realme-original-imafs4hysvghjhaw.jpeg?q=70',
		altText: '',
	},
	averageRating: 3,
	price: 1000,
	salePrice: 800,
	variations: [
		{
			onSale: true,
			salePrice: 800,
			discountPer: 20,
			price: 1000,
		},
	],
};

storiesOf('Ecommerce - Cart Item Details', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<>
			<CartItemDetails
				removeClicked={() => confirm('Are you sure?')}
				details={details}
			/>
			<CartItemDetails
				removeClicked={() => confirm('Are you sure?')}
				details={details}
			/>
		</>
	));
