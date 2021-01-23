import React, { useState } from 'react';
import { RadioAndCheckboxInput } from '../../../utils/common';

const getFilterNames = ({ details, selectedIds }) => {
	return details
		.map((val) =>
			val.children.nodes.filter((child) =>
				selectedIds.includes(child.databaseId)
			)
		)
		.filter((v) => v.length);
};

const SelectedFilters = ({ filterNameIds, onClick }) => (
	<div className='bg-white p-3 border mt-5 mb-5'>
		<div className='border-b pb-2 flex justify-between'>
			<p>Selected Filters</p>
		</div>
		<div className='flex flex-wrap mt-2'>
			{filterNameIds.map((val, key) => (
				<div className='text-xs border p-2 m-1' key={`selected-filter-${key}`}>
					<span className='flex'>
						<p className='border-r pr-2'>{val.name}</p>{' '}
						<a
							className='pl-2 cursor-pointer'
							onClick={(e) => onClick({ e, databaseId: val.databaseId })}>
							<b>X</b>
						</a>
					</span>
				</div>
			))}
		</div>
	</div>
);

const FilterBox = ({ details, filterNameIds, setFilterName }) => {
	const { data, loading, error } = details;

	if (loading) return <p>loading</p>;
	if (error) return <p>error</p>;

	const { productCategories } = data;

	const [activeFilter, setActiveFilter] = useState('');
	const [showFilter, setShowFilter] = useState(false);

	const filterClicked = (name: string) => {
		setActiveFilter(name);
		setShowFilter(!showFilter);
	};

	const filterSelected = (e: object, databaseId: number) => {
		e.preventDefault();

		const newFilter = filterNameIds.includes(databaseId)
			? filterNameIds.filter((val) => val !== databaseId)
			: filterNameIds.concat(databaseId);

		setFilterName(newFilter);
	};

	return (
		<div className=''>
			{/* {filterNameIds.length ? (
				<SelectedFilters
					onClick={filterSelected}
					filterNameIds={getFilterNames({
						details: productCategories,
						selectedIds: filterNameIds,
					}).flat()}
				/>
			) : (
				''
			)} */}
			{productCategories
				.filter((val) => val.name !== 'none')
				.map((val, key) => {
					const { name, children } = val;
					return (
						<div className='border-b-0 border bg-white'>
							<div key={`filter-${key}`} className='p-3 cursor-pointer shadow'>
								<div onClick={() => filterClicked(name)}>
									<p>{name}</p>
								</div>
								{/* {activeFilter === name && showFilter && (
									<div className='border-t mt-2 pt-2 overflow-scroll h-auto'>
										<ul>
											{children.map((val, key) => {
												const { name, databaseId } = val;
												return (
													<li className='p-1' key={`filter-name-${key}`}>
														<RadioAndCheckboxInput
															type='checkbox'
															onClick={(e: object) =>
																filterSelected({ e, databaseId })
															}
															id={name}
															name={name}
															label={name}
															checked={filterNameIds.includes(databaseId)}
														/>
													</li>
												);
											})}
										</ul>
									</div>
								)} */}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default FilterBox;
