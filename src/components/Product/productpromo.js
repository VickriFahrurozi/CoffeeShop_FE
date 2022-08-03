/** @format */
import Image from 'next/image';
import { halloween, mothersday, sundaymorning } from '../asset/assetauth';
const ProductPromo = () => {
	return (
		<>
			<div className='mb-5'>
				<div className='col d-flex justify-content-center home-favorite-big-word text-warning'>
					Promo Today
				</div>
				<div className='home-favorite-small-word'>
					<div className='col d-flex justify-content-center'>
						Coupons will be updated every weeks.
					</div>
					<div className='col d-flex justify-content-center'>
						Check them out!
					</div>
				</div>
			</div>
			<div className='card col-12 bg-outline-dark product-promo'>
				<div className='col d-flex'>
					<div className='col-4 promo-image pt-4 d-flex justify-content-center'>
						<Image src={mothersday} />
					</div>
					<div className='col-8 product-promo-coupon'>
						<div className='product-promo-title '>HAPPY MOTHER’S DAY!</div>
						<div className=' product-promo-sub-title'>
							Get one of our favorite <br /> menu for free!
						</div>
					</div>
				</div>
			</div>
			<div className='card col-12 bg-info product-promo '>
				<div className='col d-flex'>
					<div className='col-4 promo-image pt-4 d-flex justify-content-center'>
						<Image src={halloween} />
					</div>
					<div className='col-8 product-promo-coupon'>
						<div className='product-promo-title '>
							Get a cup of coffee for free on sunday morning
						</div>
						<div className=' product-promo-sub-title'>Only at 7 to 9 AM</div>
					</div>
				</div>
			</div>
			<div className='card col-12 bg-warning product-promo '>
				<div className='col d-flex'>
					<div className='col-4 promo-image pt-4 d-flex justify-content-center'>
						<Image src={mothersday} />
					</div>
					<div className='col-8 product-promo-coupon'>
						<div className='product-promo-title '>HAPPY MOTHER’S DAY!</div>
						<div className=' product-promo-sub-title'>
							Get one of our favorite <br /> menu for free!
						</div>
					</div>
				</div>
			</div>
			<div className='card col-12 bg-success product-promo '>
				<div className='col d-flex'>
					<div className='col-4 promo-image pt-4 d-flex justify-content-center'>
						<Image src={sundaymorning} />
					</div>
					<div className='col-8 product-promo-coupon'>
						<div className='product-promo-title '>HAPPY HALLOWEEN!</div>
						<div className=' product-promo-sub-title'>
							Do you like chicken wings? Get 1 free only if you buy pinky
							promise
						</div>
					</div>
				</div>
			</div>
			<div>
				<button className='col-12 btn btn-primary product-promo-apply-coupon'>
					Apply Coupon
				</button>
			</div>
		</>
	);
};

export default ProductPromo;
