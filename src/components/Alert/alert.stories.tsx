import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

storiesOf('Alert', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<Alert title='Account created!' message='Account created successfully!' />
	))
	.add('error', () => (
		<Alert title='Error!' type='error' message='Account was not created!' />
	));
