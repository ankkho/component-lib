import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import Tag from './index';

storiesOf('Tag', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('gurantee', () => <Tag name='gurantee' /> )
	.add('delivery', () => <Tag name='delivery' /> )
	.add('return 30 days', () => <Tag name='return30days' /> );
