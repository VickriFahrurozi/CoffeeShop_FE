/** @format */
import Image from 'next/image';
import { worldstore } from '../asset/assetauth';
const HomeStore = () => {
	return (
		<>
			<div className='container-fluid p-3 '>
				<div className='row p-3 '>
					<div className='col p-3  '>
						<div className='col'>
							<div className='col p-3 '>
								<div className='justify-content-center d-flex home-favorite-big-word'>
									Visit Our Store in the
								</div>
								<div className='justify-content-center d-flex home-favorite-big-word'>
									Spot on the Map Below
								</div>
							</div>
							<div className='col p-3 '>
								<div className='justify-content-center d-flex home-favorite-small-word'>
									See our store in every city on the spot and spen your good day
									there.
								</div>
								<div className='justify-content-center d-flex home-favorite-small-word'>
									See you soon!
								</div>
							</div>
						</div>
						<div className='col d-flex justify-content-center home-store-world-map'>
							<Image src={worldstore} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeStore;
