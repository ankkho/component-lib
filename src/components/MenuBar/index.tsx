import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';

interface links {
	label: string;
	href: string;
}

interface linkWrapperProps {
	title: string;
	parentId: number;
	links: links[];
	activeParentId: number;
}

interface MenuBarProps {
	links: linkWrapperProps[];
	activeParentId: number;
}

const LinkWrapper: React.FC<linkWrapperProps> = ({ ...props }) => {
	const { title, links, parentId, activeParentId } = props;

	if (parentId === activeParentId) {
		return (
			<div className='mb-10 capitalize'>
				<p
					className='font-bold p-3 text-blue-800'
					dangerouslySetInnerHTML={{
						__html: title,
					}}
				/>
				<ul className='p-2'>
					{links.map((val, key) => {
						const { label, href } = val;

						return (
							<li>
								<Link href={href} key={`link-${key}`}>
									<a title={label} className='capitalize' placeholder={label}>
										<p
											className='font-thin pl-10 hover:font-normal'
											dangerouslySetInnerHTML={{
												__html: label,
											}}
										/>
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	return null;
};

const MobileMenuBar: React.Component<linkWrapperProps> = ({ ...props }) => {
	const { title, links } = props;
	const [showLinks, setShowLinks] = useState(false);

	return (
		<div
			className='capitalize break-normal'
			onClick={() => setShowLinks(!showLinks)}>
			<div className='pl-0 cursor-pointer flex justify-between'>
				<p
					className='font-semibold p-3'
					dangerouslySetInnerHTML={{
						__html: title,
					}}
				/>
				{showLinks ? (
					<ChevronDownIcon className='h-5 w-5' />
				) : (
					<ChevronRightIcon className='h-5 w-5' />
				)}
			</div>
			{showLinks && (
				<ul className='pt-0 p-3'>
					{links.map((val, key) => {
						const { label, href } = val;

						return (
							<li className='p-3'>
								<Link href={href} key={`link-${key}`}>
									<a title={label} className='capitalize' placeholder={label}>
										<p
											className='font-thin pl-5'
											dangerouslySetInnerHTML={{
												__html: label,
											}}
										/>
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

const MenuBar: React.FC<MenuBarProps> = ({ links, activeParentId }) => {
	return (
		<>
			<div className='p-2'>
				{links.map((val, key) => (
					<MobileMenuBar
						{...val}
						key={`link-${key}`}
					/>
				))}
			</div>
			<div className='bg-gray-100 p-3 rounded shadow flex flex-wrap'>
				{links.map((val, key) => (
					<LinkWrapper
						{...val}
						activeParentId={activeParentId}
						key={`link-${key}`}
					/>
				))}
			</div>
		</>
	);
};

export default MenuBar;
