import React from 'react';
import { storiesOf } from '@storybook/react';
import FAQ from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

storiesOf('FAQ', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<FAQ
			details={[
				{
					title:
						'What happens when I update my email address (or mobile number)?',
					description: `Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).`,
				},
				{
					title:
						'What happens when I update my email address (or mobile number)?',
					description: `Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).`,
				},
				{
					title:
						'What happens when I update my email address (or mobile number)?',
					description: `Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).`,
				},
				{
					title:
						'What happens when I update my email address (or mobile number)?',
					description: `Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).`,
				},
			]}
		/>
	));
