import React from 'react';
import { storiesOf } from '@storybook/react';
import SideNav from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

const links = {
	others: [
		{
			label: 'my orders',
			link: '/account/orders',
		},
		{
			label: 'active orders',
			link: '/account/active-order',
		},
	],
	containers: [
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
	],
};

storiesOf('SideNav', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => <SideNav loading={false} links={links} />);
