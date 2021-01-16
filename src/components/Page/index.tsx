import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { LoaderIcon } from '../../../utils/common';
import config from '../../../config';
import Header from '../Header';

const { siteName, url } = config;

interface Props {
	title: string;
	loading?: boolean;
	children: React.ReactNode;
	description: string;
}

const withoutContainer = ['/'];

const Page = (props: React.PropsWithChildren<Props>) => {
	if (typeof window !== 'object') return null;
	const { pathname } = useRouter();
	const { title, loading, description, children } = props;

	const containerClass = withoutContainer.includes(pathname)
		? ''
		: 'container mx-auto md:p-2';

	if (loading) return <LoaderIcon />;

	return (
		<>
			<NextSeo
				title={`${title} | ${siteName}`}
				description={`${description} | ${siteName}`}
				canonical='https://www.canonical.ie/'
				openGraph={{
					url,
					title,
					description,
					images: [
						{
							url: 'https://www.example.ie/og-image-01.jpg',
							width: 800,
							height: 600,
							alt: 'Og Image Alt'
						},
						{
							url: 'https://www.example.ie/og-image-02.jpg',
							width: 900,
							height: 800,
							alt: 'Og Image Alt Second'
						},
						{ url: 'https://www.example.ie/og-image-03.jpg' },
						{ url: 'https://www.example.ie/og-image-04.jpg' }
					],
					site_name: 'https://thearoma.club'
				}}
				twitter={{
					handle: '@thearoma.club',
					site: url,
					cardType: 'summary_large_image'
				}}
			/>
			<Header />

			<div className='bg-color h-full'>
				<div className={containerClass}>{children}</div>
			</div>
		</>
	);
};

export default Page;
