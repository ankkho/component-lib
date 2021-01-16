import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

storiesOf('Box', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => <Box title='Rating' details={<p>5 star rating</p>} />);
