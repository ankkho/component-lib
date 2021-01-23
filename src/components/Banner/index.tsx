import React from 'react';

interface BannerProps {
	imageUrl: string;
	altText: string;
	width?: number;
	height?: number;
	fullWidth: boolean;
}

const Banner: React.FC<BannerProps> = ({
	imageUrl,
	altText,
	width = 300,
	height = 300,
	fullWidth,
}) => {
	return (
		<img
			src={imageUrl}
			alt={altText}
			style={{
				width: fullWidth ? '100%' : width,
				height,
			}}
			className='rounded shadow'
		/>
	);
};

export default Banner;
