import React from 'react';

interface TagProps {
	type?: string;
	name?: string;
	className?: string;
	text?: string;
}

const textMapping = [{
	key: 'gurantee',
	imgName: 'original',
	boldText: '100% ORIGINAL',
	otherText: 'guarantee for all products'
},
{
	key: 'delivery',
	imgName: 'delivery',
	boldText: 'Get free delivery',
	otherText: 'for every order above Rs. 799'
},
{
	key: 'return30days',
	imgName: 'return30',
	boldText: 'Return within 30days',
	otherText: 'of receiving your order'
}]

const ReturnTag: React.FC<TagProps> = ({ type, className, name, text }) => {
	if (type === 'form') {		
		return (
			<div
				className={`${className} text-white text-sm font-medium py-1 px-2 rounded align-middle`}>
				{text}
			</div>
		);
	}

	const { imgName, boldText, otherText } = textMapping.filter(
		(v) => v.key === name
	)[0];

	return (
		<div className={`m-2 p-5 ${className}`}>
			<div className='text-gray-500 font-normal flex'>
				<img src={require(`../../assets/${imgName}.png`)} width="50" height="50" alt={`${name} image`} className="mr-3" />
				<div className="mt-1">
					<span className='font-bold text-gray-900 pr-1'>{boldText}</span> {text || otherText}
				</div>
			</div>
		</div>
	);
}

const Tag: React.FC<TagProps> = ({ type = '', name, className = '', text }) => (
	<ReturnTag type={type} className={className} text={text} name={name} />
);

const StatusTags = {
	pending: (
		<Tag type='form' text='Pending' className='bg-red-200 text-red-800' />
	),
	completed: (
		<Tag type='form' text='Completed' className='bg-green-200 text-green-800' />
	),
	new: <Tag type='form' text='New' className='bg-blue-200 text-blue-800' />,
	inProcess: (
		<Tag
			type='form'
			text='In-process'
			className='bg-yellow-200 text-yellow-800'
		/>
	),
	cancelled: <Tag type='form' text='Cancelled' className='bg-red-200 text-red-800' />
};

export { Tag, StatusTags };
