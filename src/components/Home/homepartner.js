/** @format */
import Image from 'next/image';
import { netflix, reddit, amazon, discord, spotify } from '../asset/assetauth';
const HomePartner = () => {
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<div className='col'>
							<div className='d-flex justify-content-center home-favorite-big-word mt-5'>
								Our Partner
							</div>
							<div className='col d-flex justify-content-center mt-5'>
								<div className='me-2 home-partner-netflix'>
									<Image src={netflix} />
								</div>
								<div className='me-2'>
									<Image src={reddit} />
								</div>
								<div className='me-2 home-partner-amazon'>
									<Image src={amazon} />
								</div>
								<div className='me-2'>
									<Image src={discord} />
								</div>
								<div>
									<Image src={spotify} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePartner;
