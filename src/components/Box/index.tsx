import React from 'react';

export interface BoxProps {
	title: string;
	details: React.ReactElement;
	className?: string;
	editClicked?: Function;
	disabled?: boolean;
}

export const Box: React.FC<BoxProps> = ({
	title,
	details,
	className,
	editClicked,
	disabled,
}) => {
	const linkText = disabled ? 'Edit' : 'Cancel';

	return (
		<div className={`border p-2 bg-white ${className} shadow`}>
			<div className='text-xl font-semibold text-gray-700 border-b p-2'>
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
			<div className='pt-3 text-gray-800'>{details}</div>
		</div>
	);
};
