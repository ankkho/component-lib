import React from 'react';
import Link from 'next/link';

import { DiscountBox } from '../../../utils/common';

interface variations {
	onSale: boolean;
	discountPer?: number;
	salePrice?: number;
	price: number;
}

export interface productDetails {
	currencySymbol: string;
	slug: string;
	name: string;
	onSale: boolean;
	productId?: number;
	reviewCount: number;
	image: { mediaItemUrl: string; altText: string };
	averageRating: number;
	featured?: boolean;
	price: number;
	salePrice?: number;
	discountPer?: number;
	variations?: variations[];
}

interface props {
	key?: string;
	productDetails: productDetails;
}

const ItemCard: React.FC<props> = ({ key, productDetails }) => {
	const {
		currencySymbol = 'INR',
		slug,
		name,
		onSale,
		reviewCount,
		image: { mediaItemUrl, altText },
		averageRating,
		variations,
		price,
		salePrice,
		discountPer,
	} = productDetails;

	return (
		<Link key={key} href={`/${slug}`}>
			<div className='cursor-pointer md:shadow-lg antialiased md:ml-0 md:m-2 border bg-white w-1/2 md:w-64'>
				<img src={mediaItemUrl} alt={altText} className='w-full p-5' />
				<div className='p-2'>
					<DiscountBox
						currencySymbol={currencySymbol}
						salePrice={salePrice}
						onSale={onSale}
						discountPer={discountPer}
						regularPrice={price}
					/>
					<p className='font-semibold pt-1 text-gray-700'>{name}</p>
					<p className='text-gray-600 pt-3 font-normal'>
						{averageRating} ratings and {reviewCount} reviews
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ItemCard;
