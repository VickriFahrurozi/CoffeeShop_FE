/** @format */
import Image from 'next/image';
import { user, location, heart } from '../asset/assetauth';
const HomeCard1 = () => {
	return (
		<>
			<div className='home-card-1'>
				<div className='card container-fluid bg-outline-dark pt-3 pb-3 shadow-lg home-card-main'>
					<div className='row'>
						<div className='col'>
							<div className='col d-flex justify-content-between'>
								<div className=' p-5 col-md-4 d-flex justify-content-center'>
									<div className=''>
										<Image src={user} />
									</div>
									<div className='ms-4 home-card-1-word'>
										<div>90+</div>
										<div>Staf</div>
									</div>
								</div>
								<div className=' p-5 col-md-4 d-flex justify-content-center'>
									<div className=''>
										<Image src={location} />
									</div>
									<div className='ms-4 home-card-1-word'>
										<div>30+</div>
										<div>Stores</div>
									</div>
								</div>
								<div className=' p-5 col-md-4 d-flex justify-content-center'>
									<div className=''>
										<Image src={user} />
									</div>
									<div className='ms-4 home-card-1-word'>
										<div>800+</div>
										<div>Customers</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeCard1;
