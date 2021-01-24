import React from 'react';

interface jobDetails {
	jobTitle: string;
	compnayName: string;
}

interface TestimonialProps {
	name: string;
	description: string;
	imageUrl?: string;
	jobDetails?: jobDetails;
}

const returnDesc = (desc: string) => `“${desc}”`;

const Testimonial: React.FC<TestimonialProps> = ({ ...props }) => {
	const { name, imageUrl, description, jobDetails } = props;

	return (
		<figure className='md:flex bg-gray-100 rounded-xl p-5 shadow m-5'>
			<img
				className='w-32 h-32 rounded-full mx-auto'
				src={imageUrl}
				alt={name}
				width='384'
				height='512'
			/>
			<div className='space-y-4 text-center md:text-left md:pl-10'>
				<blockquote>
					<p
						className='text-lg font-semibold text-gray-900 md:pt-5'
						dangerouslySetInnerHTML={{
							__html: returnDesc(description),
						}}
					/>
				</blockquote>
				<figcaption>
					<div className='text-teal-500 font-bold text-l'>{name}</div>
					{jobDetails && (
						<div className='text-gray-600'>
							{jobDetails.jobTitle}, {jobDetails.compnayName}
						</div>
					)}
				</figcaption>
			</div>
		</figure>
	);
};

export default Testimonial;
