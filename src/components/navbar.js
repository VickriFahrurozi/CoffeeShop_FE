/** @format */
import { coffeelogo } from './asset/assetauth';
import Image from 'next/image';
const Navbar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-md navbar-light bg-light'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo01'
					aria-controls='navbarTogglerDemo01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse navbar-main '
					id='navbarTogglerDemo01'
				>
					<div className='navbar-brand col-md-3 d-flex'>
						<Image src={coffeelogo} />
						<div className='login-coffe-shop-word ms-2 navbar-brand-word'>
							Coffee Shop
						</div>
					</div>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0 col-md-5 justify-content-around'>
						<li className='nav-item  active  '>
							<a className='nav-link navbar-font  ' href='#'>
								Home <span className='sr-only'></span>
							</a>
						</li>
						<li className='nav-item '>
							<a className='nav-link navbar-font' href='#'>
								Product
							</a>
						</li>
						<li className='nav-item '>
							<a className='nav-link navbar-font ' href='#'>
								Your Chart
							</a>
						</li>
						<li className='nav-item '>
							<a className='nav-link navbar-font ' href='#'>
								History
							</a>
						</li>
					</ul>
					<div className=' my-2 my-lg-0 col-md-3 d-flex justify-content-md-end justify-content-sm-center '>
						{/* <input
							className='form-control mr-sm-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/> */}
						<button
							className='btn btn-light my-2 my-sm-0 me-4 navbar-font-button border-dark text-dark '
							type='submit'
						>
							Login
						</button>
						<button
							className='btn btn-warning my-2 my-sm-0 navbar-font-button'
							type='submit'
						>
							Sign Up
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
