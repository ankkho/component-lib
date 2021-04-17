import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import ImageBanner from './index';

storiesOf('Image Banner', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('Without Link', () => (
		<ImageBanner
			imageUrl='https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2215&q=80'
			altText='sample'
			width={500}
			height={400}
			withLink={false}
			fullWidth={false}
		/>
	))
	.add('With Link', () => (
		<ImageBanner
			imageUrl='https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2215&q=80'
			altText='sample'
			width={500}
			height={400}
			href='https://google.com'
			withLink={true}
			fullWidth={false}
		/>
	));
