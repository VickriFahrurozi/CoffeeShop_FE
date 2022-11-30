/** @format */

import { NavbarLogin } from '../../components/navbar';
import { useSelector, useDispatch } from 'react-redux/';
import Footer from '../../components/footer';
import { useEffect } from 'react';
import { getOrder } from '../../redux/actions/Product';
import { useState } from 'react';
import { getProduct } from '../../redux/actions/Product';
const Order = () => {
	const data = useSelector((indexreducer) => indexreducer.auth);
	const dataorder = useSelector((indexreducer) => indexreducer.getorder);
	const { list } = dataorder.data;
	console.log(list, 'ini listnyaaa');
	const [view, setview] = useState({
		view: false,
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrder(data.data.id));
	}, []);

	return (
		<>
			<NavbarLogin />

			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12'>
						<div className='col-12 d-flex justify-content-center  bg-light mb-3 user-order'>
							<div className='col-3'>Nama Produk</div>
							<div className='col-1'>Jumlah</div>
							<div className='col-1'>Size</div>
							<div className='col-2'>Harga</div>
							<div className='col-2'>Payment</div>
							<div className='col-2'>Status</div>
						</div>
						{list?.map((item, index) => {
							return (
								<>
									<div className='col-12 d-flex justify-content-center  bg-light mb-2 user-order'>
										<div className='col-3'>{item.product_name}</div>
										<div className='col-1'>{item.order_quantity} Pcs</div>
										<div className='col-1'>{item.order_size}</div>
										<div className='col-2'>{item.order_price}</div>
										<div className='col-2'>{item.order_payment_method}</div>
										<div className='col-2'>{item.order_status}</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

// export async function getServerSideProps() {
// // const dataauth = useSelector((indexreducer) => indexreducer.auth);
// 	const res = await fetch(
// 		`http://localhost:9999/api/v1//product/order/id?id=2`
// 	);
// 	const userorder = await res.json();
// 	return { props: { userorder } };
// }

export default Order;
