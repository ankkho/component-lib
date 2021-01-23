import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import SideNav from './index';

const otherLinks = [
	{
		label: 'my orders',
		link: '/account/orders',
	},
	{
		label: 'active orders',
		link: '/account/active-order',
	},
];

const containerLinks = [
	{
		title: 'account settings',
		links: [
			{
				label: 'profile',
				link: '/account',
			},
			{
				label: 'address',
				link: '/account/address',
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
