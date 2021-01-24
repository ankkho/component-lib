import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import MenuBar from './index';

const containerLinks = [
	{
		title: 'Topwears',
		parentId: 1,
		links: [
			{
				label: 'T-shirt',
				href: '/account',
			},
			{
				label: 'Casual Shirts',
				href: '/account/address',
			},
			{
				label: 'Sweaters',
				href: '/account',
			},
			{
				label: 'Jackets',
				href: '/account/address',
			},
		],
	},
	{
		title: 'Bottomwear',
		parentId: 2,
		links: [
			{
				label: 'Jeans',
				href: '/account',
			},
			{
				label: 'casual trousers',
				href: '/account/address',
			},
			{
				label: 'formal trousers',
				href: '/account',
			},
			{
				label: 'shorts',
				href: '/account/address',
			},
		],
	},
	{
		title: 'Indian & Fusion Wear',
		parentId: 2,
		links: [
			{
				label: 'Kurtas & Suits',
				href: '/account',
			},
			{
				label: 'Kurtis, Tunics & Tops',
				href: '/account/address',
			},
			{
				label: 'Ethnic Wear',
				href: '/account',
			},
			{
				label: 'Leggings, Salwars & Churidars',
				href: '/account/address',
			},
			{
				label: 'Skirts & Palazzos',
				href: '/account/address',
			},
			{
				label: 'Sarees',
				href: '/account/address',
			},
			{
				label: 'Dress Materials',
				href: '/account/address',
			},
			{
				label: 'Lehenga Cholis',
				href: '/account/address',
			},
			{
				label: 'Dupattas & Shawls',
				href: '/account/address',
			},
		],
	},
	{
		title: 'Indian & Fusion Wear',
		parentId: 2,
		links: [
			{
				label: 'Kurtas & Suits',
				href: '/account',
			},
			{
				label: 'Kurtis, Tunics & Tops',
				href: '/account/address',
			},
			{
				label: 'Ethnic Wear',
				href: '/account',
			},
			{
				label: 'Leggings, Salwars & Churidars',
				href: '/account/address',
			},
			{
				label: 'Skirts & Palazzos',
				href: '/account/address',
			},
			{
				label: 'Sarees',
				href: '/account/address',
			},
			{
				label: 'Dress Materials',
				href: '/account/address',
			},
			{
				label: 'Lehenga Cholis',
				href: '/account/address',
			},
			{
				label: 'Dupattas & Shawls',
				href: '/account/address',
			},
		],
	},
	{
		title: 'Indian & Fusion Wear',
		parentId: 2,
		links: [
			{
				label: 'Kurtas & Suits',
				href: '/account',
			},
			{
				label: 'Kurtis, Tunics & Tops',
				href: '/account/address',
			},
			{
				label: 'Ethnic Wear',
				href: '/account',
			},
			{
				label: 'Leggings, Salwars & Churidars',
				href: '/account/address',
			},
			{
				label: 'Skirts & Palazzos',
				href: '/account/address',
			},
			{
				label: 'Sarees',
				href: '/account/address',
			},
			{
				label: 'Dress Materials',
				href: '/account/address',
			},
			{
				label: 'Lehenga Cholis',
				href: '/account/address',
			},
			{
				label: 'Dupattas & Shawls',
				href: '/account/address',
			},
		],
	},
	{
		title: 'Indian & Fusion Wear',
		parentId: 2,
		links: [
			{
				label: 'Kurtas & Suits',
				href: '/account',
			},
			{
				label: 'Kurtis, Tunics & Tops',
				href: '/account/address',
			},
			{
				label: 'Ethnic Wear',
				href: '/account',
			},
			{
				label: 'Leggings, Salwars & Churidars',
				href: '/account/address',
			},
			{
				label: 'Skirts & Palazzos',
				href: '/account/address',
			},
			{
				label: 'Sarees',
				href: '/account/address',
			},
			{
				label: 'Dress Materials',
				href: '/account/address',
			},
			{
				label: 'Lehenga Cholis',
				href: '/account/address',
			},
			{
				label: 'Dupattas & Shawls',
				href: '/account/address',
			},
		],
	},
	{
		title: 'Indian & Fusion Wear',
		parentId: 2,
		links: [
			{
				label: 'Kurtas & Suits',
				href: '/account',
			},
			{
				label: 'Kurtis, Tunics & Tops',
				href: '/account/address',
			},
			{
				label: 'Ethnic Wear',
				href: '/account',
			},
			{
				label: 'Leggings, Salwars & Churidars',
				href: '/account/address',
			},
			{
				label: 'Skirts & Palazzos',
				href: '/account/address',
			},
			{
				label: 'Sarees',
				href: '/account/address',
			},
			{
				label: 'Dress Materials',
				href: '/account/address',
			},
			{
				label: 'Lehenga Cholis',
				href: '/account/address',
			},
			{
				label: 'Dupattas & Shawls',
				href: '/account/address',
			},
		],
	},
	{
		title: 'Indian & Fusion Wear',
		parentId: 2,
		links: [
			{
				label: 'Kurtas & Suits',
				href: '/account',
			},
			{
				label: 'Kurtis, Tunics & Tops',
				href: '/account/address',
			},
			{
				label: 'Ethnic Wear',
				href: '/account',
			},
			{
				label: 'Leggings, Salwars & Churidars',
				href: '/account/address',
			},
			{
				label: 'Skirts & Palazzos',
				href: '/account/address',
			},
			{
				label: 'Sarees',
				href: '/account/address',
			},
			{
				label: 'Dress Materials',
				href: '/account/address',
			},
			{
				label: 'Lehenga Cholis',
				href: '/account/address',
			},
			{
				label: 'Dupattas & Shawls',
				href: '/account/address',
			},
		],
	},
];

storiesOf('MenuBar', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('desktop', () => <MenuBar links={containerLinks} activeParentId={2} />);
