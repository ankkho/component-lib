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
		parentId: 1,
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
		title: 'Bottomwear',
		parentId: 1,
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
];

storiesOf('MenuBar', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => <MenuBar links={containerLinks} />);
