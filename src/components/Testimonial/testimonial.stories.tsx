import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import Testimonial from './index';

storiesOf('Testimonial', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('with job details', () => (
		<div className='md:flex'>
			<Testimonial
				name='Sarah Dayan'
				description={`Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.`}
				imageUrl='https://randomuser.me/api/portraits/women/81.jpg'
				jobDetails={{
					compnayName: 'Algolia',
					jobTitle: 'Staff Engineer',
				}}
			/>
			<Testimonial
				name='Sarah Dayan'
				description={`Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.`}
				imageUrl='https://randomuser.me/api/portraits/women/81.jpg'
				jobDetails={{
					compnayName: 'Algolia',
					jobTitle: 'Staff Engineer',
				}}
			/>
		</div>
	))
	.add('without job details', () => (
		<div className='md:flex'>
			<Testimonial
				name='Sarah Dayan'
				description={`Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.`}
				imageUrl='https://randomuser.me/api/portraits/women/81.jpg'
			/>
			<Testimonial
				name='Sarah Dayan'
				description={`Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.`}
				imageUrl='https://randomuser.me/api/portraits/women/81.jpg'
			/>
		</div>
	));
