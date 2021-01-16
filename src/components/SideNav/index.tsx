import React from 'react';
import Link from 'next/link';

import { LoaderIcon } from '../../../utils/common';

const activeClass = ({ link }) => {
	if (typeof window === 'undefined') return null;
	return (
		window.location.pathname === link &&
		'text-blue-700 font-semibold bg-blue-100'
	);
};

interface MyProps {
	loading: boolean;
}

const links = {
	others: [
		{
			label: 'my orders',
			link: '/account/orders'
		},
		{
			label: 'active orders',
			link: '/account/active-order'
		}
	],
	container: [
		{
			title: 'account settings',
			links: [
				{
					label: 'profile',
					link: '/account'
				},
				{
					label: 'address',
					link: '/account/address'
				}
			]
		}
	]
};

const returnLink = ({ label, link, key }) => (
	<Link href={link} key={`link-${key}`}>
		<a>
			<div
				className={`font-semibold cursor-pointer pl-5 p-3 capitalize ${activeClass(
					{
						link
					}
				)} hover:bg-blue-100`}>
				{label}
			</div>
		</a>
	</Link>
);

const ContainerBox = ({ details }) => {
	const { title, links } = details;

	return (
		<div className='border-b'>
			<h3 className='font-bold text-gray-500 uppercase p-5'>{title}</h3>
			{links.map((val, key) => {
				const { link, label } = val;
				return returnLink({
					link,
					label,
					key
				});
			})}
		</div>
	);
};

const SideNav = (props: React.PropsWithChildren<MyProps>) => {
	const { children, loading } = props;
	const { others, container } = links;

	return (
		<div className='flex'>
			<div
				className='hidden md:block border bg-white mr-5 w-1/4 h-1/2'
				style={{ height: '300px' }}>
				{container.map((val, key) => (
					<ContainerBox details={val} key={`${key}-box`} />
				))}
				{others.map((val, key) =>
					returnLink({
						label: val.label,
						link: val.link,
						key
					})
				)}
			</div>
			<div className='w-full'>{loading ? <LoaderIcon /> : children}</div>
		</div>
	);
};

export default SideNav;
