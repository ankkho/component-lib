import React from 'react';
import Link from 'next/link';

import { getDiscountPer, DiscountBox } from '../../../utils/common';

interface variations {
	onSale: boolean;
	regularPrice: number;
	salePrice: number;
	price: number;
}

interface props {
	key?: string;
	details: {
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
		salePrice: number;
		regularPrice: number;
		variations: variations[];
	};
}

const ItemCard: React.FC<props> = ({ key, details }) => {
	const {
		currencySymbol = 'INR',
		slug,
		name,
		onSale,
		reviewCount,
		image: { mediaItemUrl, altText },
		averageRating,
		variations,
	} = details;

	const saleDetails = variations.filter((val) => {
		const { onSale } = val;
		if (onSale) return val;
	});
	const nonSaleDetails = variations[0];
	const priceDetails = saleDetails.length ? saleDetails[0] : nonSaleDetails;

	const { salePrice, regularPrice } = priceDetails
		? priceDetails
		: { salePrice: 0, regularPrice: 0 };

	const discountPer = getDiscountPer(salePrice, regularPrice);

	return (
		<Link key={key} href={`/${slug}`}>
			<div className='cursor-pointer md:shadow-lg antialiased md:ml-0 md:m-2 border bg-white w-1/2 md:w-64'>
				<img src={mediaItemUrl} alt={altText} className='w-full p-5' />
				<div className='p-2'>
					<DiscountBox
						currencySymbol={currencySymbol}
						amtWithDis={salePrice}
						onSale={onSale}
						discountPer={discountPer}
						amtWithoutDis={regularPrice}
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
