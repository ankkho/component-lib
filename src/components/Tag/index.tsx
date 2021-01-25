import React from 'react';

interface TagProps {
	name: string;
	className?: string;
	text: string;
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

const ReturnTag: React.FC<TagProps> = ({ className, name, text }) => {
	const {imgName, boldText, otherText} = textMapping.filter(v => v.key === name)[0]

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

const Tag: React.FC<TagProps> = ({ name, className = '', text }) => <ReturnTag className={className} text={text} name={name} />

export default Tag;
