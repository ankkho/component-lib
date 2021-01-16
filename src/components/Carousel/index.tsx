import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ItemCard from '../ItemCard';

interface variations {
	onSale: boolean;
	regularPrice: number;
	salePrice: number;
	price: number;
}
interface details {
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
}

interface images {
	altText: string;
	mediaItemUrl: string;
}

interface props {
	itemPerSlide: number;
	products?: details[];
	images?: images[];
	getActiveIndex?: Function;
}

const Carousel: React.SFC<props> = ({ itemPerSlide, products, images }) => {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;

	console.log(activeItemIndex);

	return (
		<div style={{ padding: `0 ${chevronWidth}px` }}>
			<ItemsCarousel
				infiniteLoop={true}
				firstAndLastGutter={true}
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={itemPerSlide}
				leftChevron={<button>{'<'}</button>}
				rightChevron={<button>{'>'}</button>}
				outsideChevron
				chevronWidth={chevronWidth}>
				{products &&
					products.map((item, key) => (
						<ItemCard key={`item-${key}`} details={item} />
					))}
				{images &&
					images.map((item, key) => {
						const { altText, mediaItemUrl } = item;

						return <img src={mediaItemUrl} alt={altText} key={key} />;
					})}
			</ItemsCarousel>
		</div>
	);
};

export default Carousel;
