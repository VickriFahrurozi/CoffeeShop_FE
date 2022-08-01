/** @format */
import Image from 'next/image';
import { homemapping } from '../asset/assetauth';
import { checklist } from '../asset/assetauth';
const HomeMapping = () => {
	return (
		<>
			<div className='container-fluid  p-5 home-mapping-responsive'>
				<div className='row '>
					<div className='col d-flex '>
						<div className='col-md-6 p-2 home-mapping-image d-flex'>
							<div className='col-md-2 '></div>
							<Image className='col-md-10' src={homemapping} />
						</div>
						<div className='col-md-6 p-2  '>
							<div className='home-mapping-big-word'>
								We Provide Good Coffee <br /> and Healthy Meals
							</div>
							<div className='home-mapping-small-word mt-3 mb-3'>
								You can explore the menu that we provide with fun and <br />{' '}
								have their own taste and make your day better.
							</div>
							<div>
								<div className='col d-flex mb-3  home-mapping-checklist-word'>
									<Image src={checklist} />
									<div className='ps-3'>High quality beans</div>
								</div>
								<div className='col d-flex mb-3  home-mapping-checklist-word'>
									<Image src={checklist} />
									<div className='ps-3'>
										Healthy meals, you can request the ingredients
									</div>
								</div>
								<div className='col d-flex mb-3  home-mapping-checklist-word'>
									<Image src={checklist} />
									<div className='ps-3'>
										Chat with our staff to get better experience for ordering
									</div>
								</div>
								<div className='col d-flex mb-3  home-mapping-checklist-word'>
									<Image src={checklist} />
									<div className='ps-3'>
										Free member card with a minimum purchase of IDR 200.000.s
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

export default HomeMapping;
