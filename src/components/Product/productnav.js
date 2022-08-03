/** @format */

const ProductNav = () => {
	return (
		<>
			<div className='col-12 justify-content-center'>
				<nav className='navbar navbar-light '>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0 col-md-12 col-sm-12 '>
						<div className='d-flex justify-content-around '>
							<li className='nav-item  active '>
								<a className='nav-link navbar-font  ' href='#'>
									Favorite & Promo <span className='sr-only'></span>
								</a>
							</li>
							<li className='nav-item '>
								<a className='nav-link navbar-font' href='#'>
									Coffee
								</a>
							</li>
							<li className='nav-item '>
								<a className='nav-link navbar-font' href='#'>
									Non-Coffee
								</a>
							</li>
							<li className='nav-item '>
								<a className='nav-link navbar-font' href='#'>
									Foods
								</a>
							</li>
							<li className='nav-item '>
								<a className='nav-link navbar-font' href='#'>
									Add-on
								</a>
							</li>
						</div>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default ProductNav;
