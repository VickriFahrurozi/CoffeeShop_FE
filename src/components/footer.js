/** @format */
import Image from 'next/image';
import {
	coffeelogo,
	facebook,
	instagram,
	twitter,
} from '../components/asset/assetauth';
const Footer = () => {
	return (
		<>
			<div className='col-12 d-flex ps-5 pe-5 mt-5 '>
				<div className='col-6 '>
					<div className='d-flex align-items-center '>
						<Image src={coffeelogo} />
						<div className='ms-3 login-coffe-shop-word navbar-brand-word'>
							{' '}
							Coffe Shop
						</div>
					</div>
					<div className='mt-4 footer-word'>
						Coffee Shop is a store that sells some <br /> good meals , and
						especially coffee. We <br /> provide high quality beans
					</div>
					<div className='d-flex mt-4 '>
						<div>
							<Image className='footer-3-logo' src={facebook} />
						</div>
						<div className='footer-logo footer-logo-twitter'>
							<Image src={twitter} />
						</div>
						<div>
							<Image className='footer-3-logo' src={instagram} />
						</div>
					</div>

					<div>
						<text className='copyright'>C</text> 2020 copyright
					</div>
				</div>
				<div className='col-6  pb-5 footer-right-content d-flex'>
					<div>
						<div className=' footer-word-right'>Product</div>
						<div className=' row footer-sub-word'>
							<div className='mt-3'>Download</div>
							<div className='mt-2 mb-2'>Location</div>
							<div>Blog</div>
							<div className='mt-3 mb-2'>Pricing</div>
							<div>Countries</div>
						</div>
					</div>
					<div>
						<div className=' footer-word-right'>Engage</div>
						<div className=' row footer-sub-word'>
							<div className='mt-3'>Coffee Shop ?</div>
							<div className='mt-2 mb-2'>FAQ</div>
							<div>About Us</div>
							<div className='mt-3 mb-2'>Privacy Policy</div>
							<div>Terms Of Service</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
