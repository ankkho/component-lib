interface props {
	onClick: Function;
	name: string;
	orderId: number;
	dateCompleted: string;
}

const ItemOrderDetails: React.SFC<props> = ({
	onClick,
	name,
	orderId,
	dateCompleted
}) => {
	return (
		<div
			key={orderId}
			onClick={() => onClick()}
			className='cursor-pointer flex flex-wrap-row bg-white m-2 shadow-md w-full'>
			<div className='hidden md:block md:w-64 sm:w-full'>
				<img
					src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'
					alt='Woman paying for a purchase'
				/>
			</div>
			<div className='p-2 text-center'>
				<div className='flex flex-wrap text-center pb-2'>
					<p className='break-all capitalize font-semibold'>{name}</p>
					<p className='text-lg text-blue-700 pl-5 font-bold'>$ 499</p>
				</div>
				<div className='border-t pb-0 p-3 text-center text-sm font-semibold flex'>
					{/* <p className='p-3'>Total Items: 1</p> */}
					<p className='p-3'>Order: #{orderId}</p>
					<a
						title='Rate and review this product'
						className='p-3 hidden md:block text-blue-700'
						href='#'>
						Rate and Review Product
					</a>
					<p className='p-3 hidden md:block text-green-500 font-normal'>
						Delivered on {dateCompleted}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ItemOrderDetails;
