import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

const dashboard = ({title, content}) => (
	<>
		<div className='p-5'>
			<p className='capitalize text-gray-600 pb-2'>{title}</p>
			<p className='font-bold text-xl'>{content} <span className="text-green-500 text-sm">+ 3.54%</span> </p>
		</div>
	</>
);


storiesOf('Card', module)
	.addDecorator(withSmartKnobs())
	.addDecorator(withKnobs)
	.add('default', () => (
		<Card title='Some Title'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus
				nostrum soluta consequuntur nemo error magni iure ipsam sed? Doloribus
				provident asperiores excepturi fugiat saepe debitis, quisquam quis in a.
			</p>
		</Card>
	))
	.add('dashboard', () => (
		<div className='flex'>
			<Card>{dashboard({title: "total profit", content: '$ 50,000'})}</Card>
			<Card>{dashboard({title: "total expenses", content: '$ 30,000'})}</Card>
			<Card>{dashboard({title: 'new users', content: '400'})}</Card>
			<Card>{dashboard({title: 'total orders processed', content: '500'})}</Card>
		</div>
	));
