/** @format */

import { search } from '../asset/assetauth';

const HomeBanner = () => {
	return (
		<>
			<div className='row home-banner-responsive'>
				<div className='col-12 bg-danger home-banner d-flex'>
					<div className='col-md-6 '>
						<div className='home-word-banner'>
							Start Your Day <br /> With Coffee and Good Meals
						</div>
						<div className='home-sub-word-banner mt-3'>
							We provide high quality beans, good taste, and healthy <br />{' '}
							meals made by love just for you. Start your day with us <br /> for
							a bigger smile!
						</div>
						<div>
							<button className='btn btn-warning col-md-5 mt-4 home-banner-button'>
								{' '}
								Get Started
							</button>
						</div>
					</div>
					<div className='col-md-6 d-flex justify-content-center '>
						<div>
							{/* <Image src={search}/> */}
							<input
								className='ps-4 home-banner-search'
								type='text'
								placeholder='Search'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeBanner;
