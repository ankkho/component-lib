import React from 'react';
import Link from 'next/link';
import { DiscountBox } from '../../../utils/common';

interface variations {
	onSale: boolean;
	discountPer?: number;
	salePrice?: number;
	price: number;
}
interface props {
	removeClicked: Function;
	details: {
		currencySymbol?: string;
		slug: string;
		name: string;
		discountPer?: number;
		onSale: boolean;
		productId?: number;
		reviewCount: number;
		quantity: number;
		image: { mediaItemUrl: string; altText: string };
		averageRating: number;
		price: number;
		salePrice?: number;
		brandName: string;
		variations: variations[];
	};
}

const CartItemDetails: React.FC<props> = ({ removeClicked, details }) => {
	const {
		name,
		slug,
		onSale,
		productId,
		discountPer,
		brandName,
		price,
		salePrice,
		quantity,
		currencySymbol = 'INR',
		image: { mediaItemUrl, altText },
	} = details;

	return (
		<Link href={`/${slug}`}>
			<div className='flex mb-3 border-b'>
				<div className='sm:pb-3 pr-3 w-40'>
					<img src={mediaItemUrl} alt={altText} />
				</div>
				<div className='w-full'>
					<p className='break-all sm:text-sm md:text-lg pb-2 capitalize'>
						{name}
					</p>
					<div className='mb-1'>
						<DiscountBox
							currencySymbol={currencySymbol}
							discountPer={discountPer}
							onSale={onSale}
							salePrice={salePrice}
							regularPrice={price}
						/>
						<div className='text-sm font-normal inline-flex mt-2 mb-2'>
							<span className='pr-3'> Quantity: {quantity}</span>
							<span className='text-gray-600'>Brand: {brandName}</span>
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
		</Link>
	);
};

export default CartItemDetails;
