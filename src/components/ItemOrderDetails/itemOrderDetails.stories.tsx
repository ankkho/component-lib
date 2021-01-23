import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemOrderDetails from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

storiesOf('Ecommerce - Order details', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<>
			<ItemOrderDetails
				onClick={() => {
					console.log('clicked');
				}}
				name='realme watch S'
				orderId={123123123}
				dateCompleted='Wed, Jan 20'
			/>
			<ItemOrderDetails
				onClick={() => {
					console.log('clicked');
				}}
				name='realme watch S'
				orderId={123123123}
				dateCompleted='Wed, Jan 20'
			/>
		</>
	));
