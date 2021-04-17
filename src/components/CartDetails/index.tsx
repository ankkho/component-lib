import React from 'react';
import Card from '../Card';
import { RupeeIcon } from '../../../utils/common'
interface cardDetailsProps {
	forCheckout: boolean;
	address: string;
	changeAddressLink: string;
	priceDetails: PriceDetailsProps;
}

interface PriceDetailsProps {
	totalItems: number;
	totalAmount: number;
	cgst: number;
	sgst: number;
	totalPayable: number;
}

const PriceDetails: React.FC<PriceDetailsProps> = ({
	totalItems,
	cgst,
	sgst,
	totalPayable,
	totalAmount,
}) => (
	<>
		<div className='flex justify-between text-semibold'>
			<div>
				<p className='p-2'>Total Item(s)</p>
				<p className='p-2'>Total Amount</p>
				<p className='p-2'>CGST</p>
				<p className='p-2'>SGST</p>
			</div>
			<div>
				<p className='p-2'>{totalItems}</p>
				<p className='p-2'>
					{RupeeIcon}
					{totalAmount}
				</p>
				<p className='p-2'>
					{RupeeIcon}
					{cgst}
				</p>
				<p className='p-2'>
					{RupeeIcon}
					{sgst}
				</p>
			</div>
		</div>
		<div className='border-t flex justify-between'>
			<p className='p-2 font-bold text-xl'>Total Payable</p>
			<p className='p-2 font-bold text-xl float-right'>
				{RupeeIcon}
				{totalPayable}
			</p>
		</div>
	</>
);

const ChangeAddress = () => {};

const CartDetails: React.FC<cardDetailsProps> = ({
	forCheckout,
	address,
	changeAddressLink,
	priceDetails,
}) => {
	const btnText = forCheckout ? 'Proceed to Pay' : 'Place Order';

	const title = (
		<>
			<span>Shipping Address</span>
			{!forCheckout && (
				<a
					className='border p-2 text-sm border-gray-300'
					title='Change Shipping Address'
					href={changeAddressLink}>
					Change
				</a>
			)}
		</>
	);

	return (
		<div className='md:ml-5 md:flex-1'>
			<Card className='mb-5' title="Shipping Address">
				<div className='text-gray-700'>
					<p>{address}</p>
				</div>
			</Card>
			<Card className='w-full' title='Price Details'>
				<PriceDetails {...priceDetails} />
			</Card>
			<div className='sticky bottom-0 mt-2 shadow'>
				<button className='shadow-md bg-yellow-500 outline-none text-white font-semibold text-xl py-2 px-4 w-full h-16 rounded uppercase'>
					{btnText}
				</button>
			</div>
		</div>
	);
};

export default CartDetails;
