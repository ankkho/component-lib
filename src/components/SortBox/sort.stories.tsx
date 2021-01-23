import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import SortBox from './index';

storiesOf('SortBox', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<SortBox
			sortSelectedClicked={() => {}}
			setShowSortClicked={() => {}}
			showSort={true}
			selectedSort='popularity'
		/>
	));
