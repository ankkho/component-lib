const Header = () => (
	<div className='p-6 sticky top-0 bg-white shadow'>
		<ul className=''>
			<li className=''>
				<a className='text-blue-500 hover:text-blue-800' href='/'>
					thearoma.club
				</a>
				<div className='flex justify-between float-right'>
					<a className='text-blue-500 hover:text-blue-800 pr-5' href='/account'>
						Account
					</a>
					<a className='text-blue-500 hover:text-blue-800' href='/account/cart'>
						cart
					</a>
				</div>
			</li>
		</ul>
	</div>
);

export default Header;
