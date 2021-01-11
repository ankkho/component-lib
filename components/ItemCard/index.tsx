import { getDiscountPer, DiscountBox } from '../../utils/common';

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

const ItemCardDetails = ({ key, details }) => {
	const {
		slug,
		name,
		onSale,
		reviewCount,
		image: { mediaItemUrl, altText },
		averageRating,
		variations
	} = details;

	const saleDetails = variations.nodes.filter((val) => {
		const { onSale } = val;
		if (onSale) return val;
	});
	const nonSaleDetails = variations.nodes[0];
	const priceDetails = saleDetails.length ? saleDetails[0] : nonSaleDetails;

	const { salePrice, regularPrice } = priceDetails
		? priceDetails
		: { salePrice: '', regularPrice: '' };

	const discountPer = getDiscountPer({ salePrice, regularPrice });

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

const ItemCard: React.SFC<props> = ({ key, details }) => (
	<ItemCardDetails key={key} details={details} />
);

export default ItemCard;
