import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import { Tag, StatusTags } from './index';

storiesOf('Tag', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('gurantee', () => <Tag name='gurantee' />)
	.add('delivery', () => <Tag name='delivery' />)
	.add('return 30 days', () => <Tag name='return30days' />)
	.add('status - new', () => StatusTags.new)
	.add('status - completed', () => StatusTags.completed)
	.add('status - cancelled', () => StatusTags.cancelled)
	.add('status - pending', () => StatusTags.pending)
	.add('status - inProcess', () => StatusTags.inProcess)
	.add('status - limited', () => StatusTags.limited)
	.add('status - outOfStock', () => StatusTags.outOfStock);