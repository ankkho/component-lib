import React from 'react';
import Link from 'next/link';

interface BannerProps {
	imageUrl: string;
	altText: string;
	href?: string;
	width?: number;
	height?: number;
	fullWidth: boolean;
	withLink?: boolean;
}

const ImageCard: React.FC<BannerProps> = ({
	imageUrl,
	altText,
	width = 300,
	height = 300,
	withLink,
	fullWidth,
}) => (
	<img
		src={imageUrl}
		alt={altText}
		style={{
			width: fullWidth ? '100%' : width,
			height,
		}}
		className={`rounded shadow ${withLink && 'cursor-pointer'}`}
	/>
);

const ImageBanner: React.FC<BannerProps> = ({ ...props }) => {
	const { withLink, href = '#' } = props;
	if (withLink) {
		return (
			<Link href={href} passHref>
				<ImageCard {...props} />
			</Link>
		);
	}

	return <ImageCard {...props} />;
};

export default ImageBanner;
