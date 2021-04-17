import React from 'react';

interface details {
	title: string;
	description: string;
}

interface FaqProps {
	details: details[];
}

const FAQs: React.FC<FaqProps> = ({ details }) => (
	<div className='border-t mt-10'>
		<p className='pl-0 p-5 font-semibold text-xl'>FAQs</p>
		<div className='break-all grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:grid-flow-row'>
			{details.map((val, index) => {
				const { title, description } = val;
				return (
					<div className='mb-3 border rounded p-3' key={index}>
						<span className='border-b pb-3 font-semibold'>
							{title}
						</span>
						<p className='text-gray-700 pt-5'>{description}</p>
					</div>
				);
			})}
		</div>
	</div>
);

export default FAQs;
