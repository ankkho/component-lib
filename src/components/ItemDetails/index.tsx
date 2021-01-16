import { Carousel } from '..';
import { RadioAndCheckboxInput, outOfStockText } from '../../../utils/common';

const Box = ({ title, details, className }) => (
	<div className={`border p-2 bg-white ${className}`}>
		<div className='text-xl font-semibold text-gray-700 border-b p-2'>
			{title}
		</div>
		<div
			className='pt-3 text-gray-800'
			dangerouslySetInnerHTML={{ __html: details }}
		/>
	</div>
);

const CommentsAndRatings = ({ details }) => {
	const comment = ({ details, key }) => {
		const { content, date } = details;
		const commentDate = new Date(date);

		return (
			<div className='border-b pb-5 pt-5' key={`comment-${key}`}>
				<div dangerouslySetInnerHTML={{ __html: content }} />
				<p className='italic pt-3 font-bold text-sm text-blue-600'>
					Ankit Khosla | {commentDate.getDate()}{' '}
					{commentDate.toLocaleString('default', { month: 'short' })}{' '}
					{commentDate.getFullYear()}
				</p>
			</div>
		);
	};

	return (
		<div className='border p-5 mt-5'>
			<p className='text-2xl font-bold border-b pb-3'>
				Ratings & Reviews by{' '}
				<span className='text-yellow-500 italic'>Certified Buyers</span>
			</p>
			{details.map((details, key) => comment({ details, key }))}
			<div className='text-gray-800'></div>
		</div>
	);
};

const VariationsOptions = ({ activeVariant, setActiveVariant, variations }) => {
	const allQty = variations.map((val) => val.attributes.nodes[0]);
	// allQty[0].name
	return (
		<div className='pl-0 pb-0 p-5'>
			<p className='capitalize font-semibold pb-3'>Quantity</p>
			<div>
				{allQty.map((val, key) => (
					<RadioAndCheckboxInput
						id={`variant-${key}`}
						type='radio'
						onClick={() => setActiveVariant(val.value)}
						name={val.value}
						checked={activeVariant === val.value}
						label={val.value}
					/>
				))}
			</div>
		</div>
	);
};

const DiscountBox = ({ discountDetails }) => {
	const { onSale, salePrice, regularPrice, discountPer } = discountDetails;

	if (!onSale) return null;

	return (
		<div className='inline-block'>
			<p
				className='text-3xl sm:text-xl md:text-3xl text-blue-700 font-extrabold float-left'
				dangerouslySetInnerHTML={{ __html: salePrice }}
			/>
			<p
				className='line-through text-xl text-gray-700 float-left pl-5 pt-2'
				dangerouslySetInnerHTML={{ __html: regularPrice }}
			/>
			<p className='pt-2 font-bold text-xl text-red-700 float-left pl-5'>
				{discountPer}% Off
			</p>
		</div>
	);
};

const ItemDetails = ({
	addToCartClicked,
	productDetails,
	setActiveVariant,
	activeVariantDetails,
	activeVariant,
	disableButton = false
}) => {
	const {
		name,
		reviewCount,
		shortDescription,
		attributes: { nodes: attributes },
		variations: { nodes: variations },
		galleryImages: { nodes: images },
		reviews: { nodes: allReviews }
	} = productDetails;

	const { mediaItemUrl, altText } = images[0];
	const { onSale, regularPrice, purchasable } = activeVariantDetails;

	const activeCarouselIndex = (index) => {
		console.log(index);
	};

	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 antialiased shadow'>
			<div className='mt-7 xm:pr-0 md:pr-5'>
				<img className='w-auto p-16' src={mediaItemUrl} alt={altText} />
				<div className='hidden md:block'>
					<Carousel
						itemPerSlide={3}
						images={images}
						getActiveIndex={activeCarouselIndex}
					/>
				</div>
			</div>
			<div className='p-3'>
				<p className='text-2xl pt-3 pb-3 font-bold xs:pt-5 break-all capitalize'>
					{name}
				</p>
				{!purchasable && outOfStockText}
				{purchasable && <DiscountBox discountDetails={activeVariantDetails} />}
				{!onSale && (
					<p
						className='text-3xl sm:text-xl md:text-3xl text-blue-700 font-extrabold'
						dangerouslySetInnerHTML={{ __html: regularPrice }}
					/>
				)}
				<div className='mt-2 mb-2'>
					<p className='font-medium text-gray-600'>
						343 ratings and {reviewCount} reviews
					</p>
				</div>
				<div dangerouslySetInnerHTML={{ __html: shortDescription }} />
				<VariationsOptions
					activeVariant={activeVariant}
					setActiveVariant={setActiveVariant}
					variations={variations}
				/>
				<div className='mt-5'>
					<button
						onClick={(e) => addToCartClicked(e)}
						className={`shadow-md bg-yellow-500 outline-none text-white font-bold py-2 px-4 w-64 h-16 rounded ${
							disableButton && 'cursor-not-allowed'
						}`}>
						{disableButton ? 'Adding...' : 'ADD TO CART'}
					</button>
				</div>
				{attributes
					.filter((val) => val.name !== 'types')
					.map((val, key) => (
						<Box
							key={`attri-${key}`}
							className='mt-8'
							title={val.name}
							details={val.options}
						/>
					))}

				{reviewCount > 0 && <CommentsAndRatings details={allReviews} />}
			</div>
		</div>
	);
};

export default ItemDetails;
