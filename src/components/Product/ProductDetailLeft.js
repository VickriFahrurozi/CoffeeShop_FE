/** @format */
import Image from 'next/image';
import Link from 'next/link';

const ProductDetailLeft = (data) => {
	const list = data.data[0];
	return (
		<>
			<div className='p-5'>
				<div className='col-12 d-flex justify-content-center'>
					<Image
						className='rounded-circle'
						src={`https://seahorse-app-bmw8s.ondigitalocean.app/${list.product_picture}`}
						width={'700'}
						height={'1000'}
					/>
				</div>
				<div className='col-12 d-flex justify-content-center product-detail-name'>
					{list.product_name}
				</div>
				<div className='col-12 d-flex justify-content-center product-detail-price'>
					IDR {list.price_range}
				</div>

				<div className='col d-flex justify-content-center mt-5'>
					<button className='btn btn-warning col-8 product-detail-button-add-chart'>
						Add To Chart
					</button>
				</div>
				<div className='col d-flex justify-content-center mt-3'>
					<button className='btn btn-warning col-8 product-detail-button-add-chart bg-warning text-dark fw-bold'>
						Ask A Staff
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductDetailLeft;
