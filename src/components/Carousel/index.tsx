import React from 'react';
import { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import ItemCard from '../ItemCard';
import { productDetails } from '../ItemCard';

interface images {
	altText: string;
	mediaItemUrl: string;
}

interface props {
	itemPerSlide: number;
	products?: productDetails[];
	images?: images[];
	getActiveIndex?: Function;
}

const Carousel: React.FC<props> = ({ itemPerSlide, products, images }) => {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;

	return (
		<div style={{ padding: `0 ${chevronWidth}px` }} className='hidden md:block'>
			<ItemsCarousel
				infiniteLoop={true}
				firstAndLastGutter={true}
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={itemPerSlide}
				leftChevron={
					<button className='border rounded-full p-3 hover:shadow'>
						{'<'}
					</button>
				}
				rightChevron={
					<button className='border rounded-full p-3 hover:shadow'>
						{'>'}
					</button>
				}
				outsideChevron
				chevronWidth={chevronWidth}>
				{products &&
					products.map((item, key) => (
						<ItemCard key={`item-${key}`} productDetails={item} />
					))}
				{images &&
					images.map((item, key) => {
						const { altText, mediaItemUrl } = item;
						return (
							<img
								src={mediaItemUrl}
								alt={altText}
								key={`carousel-img-${key}`}
							/>
						);
					})}
			</ItemsCarousel>
		</div>
	);
};

export default Carousel;
