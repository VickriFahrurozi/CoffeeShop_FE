/** @format */

const HomeCard = () => {
	return (
		<>
			<div className='home-card'>
				<div className='card container-fluid bg-outline-dark pt-3 pb-3 shadow-lg home-card-main'>
					<div className=' p-3   col d-flex '>
						<div className='col-md-6 p-3 '>
							<div className='home-favorite-big-word'>Check our promo </div>
							<div className='home-favorite-big-word'>today! </div>
							<div className='home-favorite-small-word mt-4'>
								Let's see the deals and pick yours!
							</div>
						</div>
						<div className='col-md-6 d-flex justify-content-end col-sm-4 '>
							<div className='home-card-button col-md-5  col-sm-12 '>
								<button className='btn btn-warning home-card-button-set '>
									See Promo
								</button>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeCard;
