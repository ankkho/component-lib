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
		title: 'account settings',
		links: [
			{
				label: 'profile',
				href: '/account',
			},
			{
				label: 'address',
				href: '/account/address',
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
