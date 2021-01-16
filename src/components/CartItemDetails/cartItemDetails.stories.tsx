import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import CartItemDetails from './index';

storiesOf('Ecommerce - Cart Item Details', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => <CartItemDetails removeClicked={() => {}} />);
