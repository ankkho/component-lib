import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import {SideNav, ActivityList} from './';

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

const activityData = [
	{
		title: '10 April, 2021',
		values: [
			{
				name: 'Signed Out',
				time: '20:40 AM',
				description: 'some random desc',
			},
			{
				name: 'Created Invoice #132123',
				time: '12:40 AM',
				description: 'some random desc',
			},
			{
				name: 'Signed In',
				time: '12:40 AM',
				description: 'some random desc',
			},
		],
	},
	{
		title: '9 April, 2021',
		values: [
			{
				name: 'Signed Out',
				time: '20:40 AM',
				description: 'some random desc',
			},
			{
				name: 'Created Invoice #12312312',
				time: '12:40 AM',
				description: 'some random desc',
			},
			{
				name: 'Signed In',
				time: '12:40 AM',
				description: 'some random desc',
			},
		],
	},
];

storiesOf('Admin', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('SideNav', () => (
		<SideNav
			loading={false}
			containerLinks={containerLinks}
			otherLinks={otherLinks}>
			<p>Page details goes here</p>
		</SideNav>
	))
	.add('ActivityList', () => <ActivityList data={activityData} />);
