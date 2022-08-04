/** @format */
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../redux/actions/Product';
import { addOrder } from '../../redux/actions/Product';
const ProductDetailRight = (data) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const produk = useSelector((indexreducer) => indexreducer.singleproduct);
	const auth = useSelector((indexreducer) => indexreducer.auth);
	console.log(auth.data.id, 'ini auth');
	console.log(router.query.productdetail, 'ini auth');
	const list = data.data[0];
	const dataprodukreal = produk.data.list[0];
	const category = list.product_category;
	console.log(dataprodukreal.product_category);
	const [dataproduct, setdataproduct] = useState({
		size: 'R',
		delivery: 'dinein',
		quantity: 1,
		price: 15000,
		payment_method: 'cash',
		name: '',
	});

	useEffect(() => {
		dispatch(getSingleProduct(router.query.productdetail));
	}, []);

	return (
		<>
			<div className='card p-5 product-detail-card me-5 ms-5'>
				<div className='product-detail-description justify-content-start'>
					<div className='product-detail-word'>{list.product_detail}</div>
					<div className='product-detai-description-word'>
						{list.product_description}
					</div>
					{category != 'addon' ? (
						<>
							<div className='d-flex justify-content-center mt-5 text-dark fw-bold'>
								Choose a Size
							</div>
							<div className='d-flex justify-content-center mt-4 mb-5'>
								{dataproduct.size == 'R' ? (
									<>
										<div className='card bg-light p-4 rounded-circle'>
											<button className='btn btn-success Product-detail-size fw-bold '>
												{' '}
												R{' '}
											</button>
										</div>
									</>
								) : (
									<>
										<div className='card bg-warning p-4 rounded-circle'>
											<button
												className='btn btn-warning Product-detail-size fw-bold'
												onClick={() => {
													setdataproduct((prevData) => ({
														...prevData,
														size: 'R',
													}));
												}}
											>
												{' '}
												R{' '}
											</button>
										</div>
									</>
								)}

								{dataproduct.size == 'L' ? (
									<>
										<div className='card bg-light p-4 rounded-circle me-5 ms-5'>
											<button className='btn btn-success Product-detail-size fw-bold '>
												{' '}
												L{' '}
											</button>
										</div>
									</>
								) : (
									<>
										<div className='card bg-warning p-4 rounded-circle ms-5 me-5'>
											<button
												className='btn btn-warning Product-detail-size fw-bold'
												onClick={() => {
													setdataproduct((prevData) => ({
														...prevData,
														size: 'L',
													}));
												}}
											>
												{' '}
												L{' '}
											</button>
										</div>
									</>
								)}
								{dataproduct.size == 'XL' ? (
									<>
										<div className='card bg-light p-4 rounded-circle'>
											<button className='btn btn-success Product-detail-size fw-bold '>
												{' '}
												XL{' '}
											</button>
										</div>
									</>
								) : (
									<>
										<div className='card bg-warning p-4 rounded-circle'>
											<button
												className='btn btn-warning Product-detail-size fw-bold'
												onClick={() => {
													setdataproduct((prevData) => ({
														...prevData,
														size: 'XL',
													}));
												}}
											>
												{' '}
												XL{' '}
											</button>
										</div>
									</>
								)}
							</div>
						</>
					) : (
						<>
							{/* {setdataproduct((prevData) => ({
								...prevData,
								price: dataprodukreal.price_range,
							}))} */}
						</>
					)}
				</div>
				<div className='d-flex justify-content-center col-12'>
					<div className='col-md-12 col-sm-12 '>
						<div className='d-flex justify-content-center mb-4 product-detail-description text-dark fw-bold'>
							Choose Delivery Method
						</div>
						<div className='d-flex justify-content-center col-12'>
							{dataproduct.delivery == 'dinein' ? (
								<>
									<button
										className='btn btn-success col-3 detail-product-delivery-button '
										onClick={() => {
											setdataproduct((prevData) => ({
												...prevData,
												name: dataprodukreal.product_name,
											}));
										}}
									>
										Dine In
									</button>
								</>
							) : (
								<>
									<button
										className='btn btn-warning col-3 detail-product-delivery-button'
										onClick={() => {
											setdataproduct((prevData) => ({
												...prevData,
												delivery: 'dinein',
												name: dataprodukreal.product_name,
											}));
										}}
									>
										Dine In
									</button>
								</>
							)}
							{dataproduct.delivery == 'takeaway' ? (
								<>
									<button className='btn btn-success col-3 detail-product-delivery-button me-5 ms-5'>
										Take Away
									</button>
								</>
							) : (
								<>
									<button
										className='btn btn-warning col-3 detail-product-delivery-button me-5 ms-5'
										onClick={() => {
											setdataproduct((prevData) => ({
												...prevData,
												delivery: 'takeaway',
											}));
										}}
									>
										Take Away
									</button>
								</>
							)}
							{dataproduct.delivery == 'delivery' ? (
								<>
									<button className='btn btn-success col-3 detail-product-delivery-button'>
										Delivery
									</button>
								</>
							) : (
								<>
									<button
										className='btn btn-warning col-3 detail-product-delivery-button'
										onClick={() => {
											setdataproduct((prevData) => ({
												...prevData,
												delivery: 'delivery',
											}));
										}}
									>
										Delivery
									</button>
								</>
							)}
						</div>
					</div>
				</div>
				<div className=' d-flex justify-content-center col-12'>
					<div className=' col-12'>
						<div className='card  p-5 col-12 product-detail-checkout '>
							<div className='d-flex justify-content-start col-12'>
								<div className='col-2'>
									<Image
										className='rounded-circle'
										src={`http://localhost:9999/upload/${list.product_picture}`}
										width={'100'}
										height={'100'}
									/>
								</div>
								<div className='d-flex col-2 justify-content-center'>
									<div className='fw-bold mt-4 ms-3 home-favorite-big-word'>
										{dataproduct.size}
									</div>
									<div className='mt-4 ms-3 home-favorite-big-word'>
										x{dataproduct.quantity}
									</div>
								</div>
								<div className='Product-detail-size fw-bold mt-4 ms-5 col d-flex justify-content-end'>
									<button
										className='col-4  btn btn-primary fw-bold me-5 detail-product-delivery-button'
										onClick={() => {
											{
												dataproduct.quantity != 1 ? (
													<>
														{setdataproduct((prevData) => ({
															...prevData,
															quantity: dataproduct.quantity - 1,
															price: dataproduct.price - 15000,
														}))}
													</>
												) : (
													<></>
												);
											}
										}}
									>
										-
									</button>
									<button
										className='col-4  btn btn-primary fw-bold detail-product-delivery-button '
										onClick={() => {
											setdataproduct((prevData) => ({
												...prevData,
												quantity: dataproduct.quantity + 1,
												price: dataproduct.price + 15000,
											}));
										}}
									>
										+
									</button>
								</div>
							</div>
							<div className='col-12 d-flex mt-4'>
								<div className='col-6 home-favorite-big-word d-flex justify-content-center'>
									RP.{dataproduct.price}
								</div>
								<div className='col-6 d-flex justify-content-end'>
									<button
										className='btn btn-success detail-product-delivery-button col-11'
										onClick={() => {
											dispatch(
												addOrder(
													dataproduct.name,
													auth.data.id,
													router.query.productdetail,
													dataproduct.price,
													dataproduct.delivery,
													dataproduct.payment_method,
													dataproduct.size,
													dataproduct.quantity
												)
											);
										}}
									>
										Checkout
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetailRight;
