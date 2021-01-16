import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

storiesOf('Header', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<Header
			title='awesome website'
			links={[
				{
					title: 'FAQ',
					href: '/faq',
				},
			]}
		/>
	));
