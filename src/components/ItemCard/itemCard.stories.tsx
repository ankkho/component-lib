import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemCard from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

const details = {
	slug: 'realme-watch-s',
	name: 'Realme Watch S',
	title: 'Realme Watch S',
	onSale: false,
	productId: 123,
	reviewCount: 10,
	image: { mediaItemUrl: '', altText: '' },
	averageRating: 3,
	featured: false,
	price: 1000,
	salePrice: 800,
	regularPrice: 1000,
	variations: [
		{
			onSale: true,
			regularPrice: 1000,
			salePrice: 800,
			price: 1000,
		},
	],
};

storiesOf('Ecommerce - ItemCard', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => <ItemCard key='1' details={details} />);
