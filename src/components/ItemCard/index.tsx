import React from 'react';
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

	const itemSelected = () => {
		window.location.href = `/${slug}`;
	};

	return (
		<div
			key={key}
			onClick={itemSelected}
			className='cursor-pointer md:shadow-lg antialiased md:ml-0 md:m-2 border bg-white w-1/2 md:w-64'>
			<img src={mediaItemUrl} alt={altText} className='w-full p-5' />
			<div className='p-2'>
				<DiscountBox
					amtWithDis={salePrice}
					discount={onSale}
					discountPer={discountPer}
					amtWithoutDis={regularPrice}
				/>
				<p className='text-md font-semibold pt-1 text-gray-700'>{name}</p>
				<p className='text-gray-600 pt-3'>
					{averageRating} ratings and {reviewCount} reviews
				</p>
			</div>
		</div>
	);
};

export default ItemCard;
