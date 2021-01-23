import React from 'react';

interface props {
	onClick: Function;
	name: string;
	orderId: number;
	dateCompleted: string;
}

const ItemOrderDetails: React.FC<props> = ({
	onClick,
	name,
	orderId,
	dateCompleted,
}) => {
	return (
		<div
			key={orderId}
			onClick={() => onClick()}
			className='cursor-pointer flex flex-wrap-row bg-white m-2 shadow w-full'>
			<div className='p-3 md:w-32'>
				<img
					src='https://rukminim1.flixcart.com/image/100/100/ki7qw7k0/smartwatch/e/p/b/rma207-android-realme-original-imafy2fxtuzghm5m.jpeg?q=80'
					alt='Woman paying for a purchase'
				/>
			</div>
			<div className='p-2 md:text-center'>
				<div className='md:flex pb-2'>
					<p className='break-all capitalize font-semibold'>{name}</p>
					<p className='hidden md:block text-lg text-blue-700 pl-5 font-bold'>
						$ 499
					</p>
				</div>
				<div className='border-t text-sm font-semibold md:flex pt-2'>
					{/* <p className='p-3'>Total Items: 1</p> */}
					<p className='hidden md:block pl-0 p-2'>Order: #{orderId}</p>
					<a
						title='Rate and review this product'
						className='text-blue-700 p-2'
						href='#'>
						Rate and Review Product
					</a>
					<p className='p-2 text-green-500'>Delivered on {dateCompleted}</p>
				</div>
			</div>
		</div>
	);
};

export default ItemOrderDetails;
