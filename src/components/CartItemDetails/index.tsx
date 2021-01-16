import React from 'react';
import { DiscountBox } from '../../../utils/common';

interface props {
	removeClicked: Function;
}

const CartItemDetails: React.FC<props> = ({ removeClicked }) => {
	return (
		<div className='flex mb-3 border-b'>
			<div className='sm:pb-3 pr-3 w-40'>
				<img
					src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'
					alt='Woman paying for a purchase'
				/>
			</div>
			<div className='w-full'>
				<p className='break-all text-lg pb-2 capitalize'>
					Davidoff Coolwater Eau de Toilette - 125 ml (For Men)
				</p>
				<div className='mb-1'>
					<DiscountBox
						discountPer='20'
						discount={true}
						amtWithDis='300'
						amtWithoutDis='500'
					/>
					<div className='inline-flex mt-2 mb-2'>
						<p className='font-medium pr-3'> Quantity: 1</p>
						<p className='font-medium text-gray-600'>Brand: Elizabeth Arden</p>
					</div>
					<a
						onClick={() => removeClicked()}
						title='Remove this item'
						className='text-red-700 text-lg text-bold float-right pb-3'
						href='#'>
						REMOVE
					</a>
				</div>
			</div>
		</div>
	);
};

export default CartItemDetails;
