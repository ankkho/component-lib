import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import CartDetails from './index';

const priceDetails = {
	totalItems: 10.34,
	totalAmount: 2000,
	cgst: 10,
	sgst: 10,
	totalPayable: 2000,
};

storiesOf('Ecommerce - Cart Details', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<CartDetails
			forCheckout={true}
			address='some address'
			changeAddressLink='/'
			priceDetails={priceDetails}
		/>
	));
