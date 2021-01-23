import React from 'react';
import { RadioAndCheckboxInput } from '../../../utils/common';

const sortOptions = [
	{
		name: 'popularity',
		label: 'popularity',
	},
	{
		name: 'discount',
		label: 'discount',
	},
	{
		name: 'new-arrivals',
		label: 'new arrivals',
	},
	{
		name: 'customer-top-rated',
		label: 'customer top rated',
	},
	{
		name: 'price-low-to-high',
		label: 'price: low to high',
	},
	{
		name: 'price-high-to-low',
		label: 'price: high to low',
	},
];

interface SortBoxProps {
	sortSelectedClicked: Function;
	setShowSortClicked: Function;
	showSort: boolean;
	selectedSort: string;
}

const SortBox: React.FC<SortBoxProps> = ({
	sortSelectedClicked,
	setShowSortClicked,
	showSort,
	selectedSort,
}) => {
	return (
		<div className='bg-white border p-3 shadow'>
			<div
				className='cursor-pointer'
				onClick={() => setShowSortClicked(!showSort)}>
				<p className='capitalize font-semibold'>Sort by: {selectedSort}</p>
			</div>
			{showSort && (
				<ul className='border-t mt-2 pb-2 capitalize text-sm pt-5'>
					{sortOptions.map((val, key) => {
						const { name, label } = val;
						return (
							<li className='p-1' key={`${key}-sort`}>
								<RadioAndCheckboxInput
									type='radio'
									onClick={() => {
										sortSelectedClicked(val);
									}}
									id={name}
									name={name}
									label={label}
									checked={selectedSort === label}
								/>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default SortBox;
