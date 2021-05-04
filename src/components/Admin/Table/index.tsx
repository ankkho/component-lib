import React from 'react';
import { useTable, usePagination } from 'react-table';

const buttonStyle =
	'p-2 cursor-pointer hover:bg-gray-100 rounded-full hover:shadow';

const Table = () => {
	const data = React.useMemo(
		() => [
			{
				name: 'Adidas',
				category: 'shoes',
			},
			{
				name: 'Polo',
				category: 'shirt',
			},
			{
				name: 'ASICS',
				category: 'shoes',
			},
		],
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'name', // accessor is the "key" in the data
			},
			{
				Header: 'Category',
				accessor: 'category',
			},
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		usePagination
	);

	return (
		<>
			<table
				{...getTableProps()}
				className='border rounded m-3 shadow w-auto capitalize'>
				<thead className='p-4'>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()} className='p-3 text-left'>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr
								{...row.getRowProps()}
								className='border cursor-pointer font-normal hover:bg-gray-200'>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()} className='p-5'>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>

				<div className='p-5 text-center'>
					<button
						className={buttonStyle}
						onClick={() => gotoPage(0)}
						disabled={!canPreviousPage}>
						{'<<'}
					</button>{' '}
					<button
						className={buttonStyle}
						onClick={() => previousPage()}
						disabled={!canPreviousPage}>
						{'<'}
					</button>{' '}
					<button
						className={buttonStyle}
						onClick={() => nextPage()}
						disabled={!canNextPage}>
						{'>'}
					</button>{' '}
					<button
						className={buttonStyle}
						onClick={() => gotoPage(pageCount - 1)}
						disabled={!canNextPage}>
						{'>>'}
					</button>{' '}
					<span>
						Page{' '}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{' '}
					</span>
					<span>
						| Go to page:{' '}
						<input
							type='number'
							defaultValue={pageIndex + 1}
							className='border p-2'
							onChange={(e) => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0;
								gotoPage(page);
							}}
							style={{ width: '100px' }}
						/>
					</span>{' '}
					<select
						value={pageSize}
						className='cursor-pointer hover:bg-gray-100 rounded p-3 ml-3'
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}>
						{[10, 20, 30, 40, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
				</div>
			</table>
		</>
	);
};

export default Table;
