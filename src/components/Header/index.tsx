import React from 'react';

interface links {
	title: string;
	href: string;
}

interface HeaderProps {
	title: string;
	links: links[];
}

const Header: React.FC<HeaderProps> = ({ title, links }) => (
	<div className='p-6 sticky top-0 bg-white shadow'>
		<ul className=''>
			<li className=''>
				<a className='text-blue-500 hover:text-blue-800' href='/'>
					{title}
				</a>
				<div className='flex justify-between float-right'>
					{links.map((val, index) => {
						const { title, href } = val;
						return (
							<>
								<a
									key={index}
									className='text-blue-500 hover:text-blue-800 pr-5'
									href={href}>
									{val.title}
								</a>
							</>
						);
					})}
				</div>
			</li>
		</ul>
	</div>
);

export default Header;
