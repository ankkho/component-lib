import React from 'react';

interface CardProps {
	title?: React.ReactElement | string;
	children: React.ReactElement;
	className?: string;
	editClicked?: Function;
	disabled?: boolean;
}

const Card = (props: React.PropsWithChildren<CardProps>) => {
	const { title = '', children, className, editClicked, disabled } = props;
	const linkText = disabled ? 'Edit' : 'Cancel';

	return (
		<div className={`border p-1 bg-white ${className} shadow rounded mr-5`}>
			<div
				className={`text-xl ${
					title.length && 'p2 font-semibold p-2 border-b'
				}`}>
				{title}
				{editClicked && (
					<a
						href='#'
						onClick={() => editClicked()}
						className='capitalize pl-5 text-blue-500'>
						{linkText}
					</a>
				)}
			</div>
			<div
				className={`text-gray-800 overflow-ellipsis overflow-hidden ${
					title.length && 'p-3'
				}`}>
				{children}
			</div>
		</div>
	);
};

export default Card;
