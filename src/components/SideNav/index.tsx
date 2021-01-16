import React from 'react';
import Link from 'next/link';

import { LoaderIcon } from '../../../utils/common';

const activeClass = (link: string) => {
	if (typeof window === 'undefined') return null;
	return (
		window.location.pathname === link &&
		'text-blue-700 font-semibold bg-blue-100'
	);
};

interface links {
	label: string;
	link: string;
}

interface containerProps {
	title: string;
	links: links[];
}

interface SideNavProps {
	loading: boolean;
	links: {
		others: links[];
		containers: containerProps[];
	};
}

const returnLink = (
	label: string,
	link: string,
	key: number
): React.ReactElement => (
	<Link href={link} key={`link-${key}`}>
		<a>
			<div
				className={`font-semibold cursor-pointer pl-5 p-3 capitalize ${activeClass(
					{ link }
				)} hover:bg-blue-100`}>
				{label}
			</div>
		</a>
	</Link>
);

const ContainerBox = (details: containerProps, key: string) => {
	const { title, links } = details;

	return (
		<div className='border-b' key={key}>
			<h3 className='font-bold text-gray-500 uppercase p-5'>{title}</h3>
			{links.map((val, key) => {
				const { link, label } = val;
				return returnLink(link, label, key);
			})}
		</div>
	);
};

const SideNav = (props: React.PropsWithChildren<SideNavProps>) => {
	const {
		children,
		loading,
		links: { others, containers },
	} = props;

	return (
		<div className='flex'>
			<div
				className='hidden md:block border bg-white mr-5 w-1/4 h-1/2'
				style={{ height: '300px' }}>
				{containers.map((val, key) => (
					<ContainerBox details={val} key={`${key}-box`} />
				))}
				{others.map((val, key) => {
					const { link, label } = val;
					return returnLink(label, link, key);
				})}
			</div>
			<div className='w-full'>{loading ? <LoaderIcon /> : children}</div>
		</div>
	);
};

export default SideNav;
