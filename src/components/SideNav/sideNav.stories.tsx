import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import SideNav from './index';

const otherLinks = [
	{
		label: 'my orders',
		href: '/account/orders',
	},
	{
		label: 'active orders',
		href: '/account/active-order',
	},
];

const containerLinks = [
	{
		title: 'management',
		links: [
			{
				label: 'dashboard',
				href: '/dashboard',
			},
			{
				label: 'customers',
				href: '/customers',
			},
			{
				label: 'orders',
				href: '/orders',
			},
			{
				label: 'products',
				href: '/products',
			},
			{
				label: 'invoices',
				href: '/invoices',
			},
		],
	},
	{
		title: 'store',
		links: [
			{
				label: 'employees',
				href: '/employee',
			},
			{
				label: 'settings',
				href: '/settings',
			},
		],
	},
];

storiesOf('SideNav', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<SideNav
			loading={false}
			containerLinks={containerLinks}
			otherLinks={otherLinks}>
			<p>Page details goes here</p>
		</SideNav>
	));
