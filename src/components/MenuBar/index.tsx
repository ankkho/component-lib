import React from 'react';
import Link from 'next/link';

import { containerProps } from '../SideNav';

interface links {
	parentId: number;
	links: containerProps[];
}

interface MenuBarProps {
	links: links[];
}

const LinkWrapper: React.FC<containerProps> = ({ ...props }) => {
	const { title, links, parentId } = props;

	return (
		<div className='pr-20 capitalize'>
			<p className='font-bold p-3 text-blue-800'>{title}</p>
			{links.map((val, key) => {
				const { label, href } = val;

				return (
					<div>
						<Link href={href} key={`link-${key}`}>
							<a className='flex-wrap'>
								<span
									className={
										'font-thin hover:font-semibold cursor-pointer pl-8 p-1 capitalize'
									}>
									{label}
								</span>
							</a>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

const MenuBar: React.FC<MenuBarProps> = ({ links }) => {
	return (
		<div className='bg-gray-100 p-3 rounded shadow flex'>
			{links.map((val, key) => (
				<LinkWrapper {...val} key={`link-${key}`} />
			))}
		</div>
	);
};

export default MenuBar;
