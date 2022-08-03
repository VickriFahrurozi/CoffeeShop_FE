/** @format */

const ProductDetailRight = (data) => {
	const list = data.data[0];
	return (
		<>
			<div className='card p-5 product-detail-card me-5 ms-5'>
				<div className='product-detail-description justify-content-start'>
					<div className='product-detail-word'>{list.product_detail}</div>
					<div className='product-detai-description-word'>
						{list.product_description}
					</div>
					<div className='d-flex justify-content-center mt-5 text-dark fw-bold'>
						Choose a Size
					</div>
					<div className='d-flex justify-content-center mt-4'>
						<div className='card bg-warning p-4 rounded-circle'>
							<button className='btn btn-warning Product-detail-size fw-bold '>
								{' '}
								R{' '}
							</button>
						</div>
						<div className='card bg-warning p-4 rounded-circle ms-5 me-5'>
							<button className='btn btn-warning Product-detail-size fw-bold '>
								{' '}
								L{' '}
							</button>
						</div>
						<div className='card bg-warning p-4 rounded-circle'>
							<button className='btn btn-warning Product-detail-size fw-bold'>
								XL
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetailRight;
