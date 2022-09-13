/** @format */

import { NavbarAdmin } from '../../components/navbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateOrder } from '../../redux/actions/Product';
import { useRouter } from 'next/router';

const Adminorder = (data) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const datalogin = useSelector((indexreducer) => indexreducer.auth);
	const [status, setstatus] = useState({
		status: 'A',
	});
	const [Refetch, setRefetch] = useState();
	const { list } = data.data;

	useEffect(() => {
		console.log(datalogin.isLogin, 'ini data nya');
		console.log(datalogin.data.role, 'ini data nya');
		if (datalogin.isLogin == false || datalogin.data.role != 222) {
			if (datalogin.isLogin == true || datalogin.data.role == 222) {
				router.replace(`/User/homeuser`);
			} else if (datalogin.isLogin == false || !datalogin.data.role) {
				router.replace(`/`);
			}
		}
	}, [datalogin]);
	return (
		<>
			<NavbarAdmin />
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
										<div className='col-2'>
											<select
												class='form-select form-select-sm'
												aria-label='.form-select-sm example'
												onChange={(e) => {
													setstatus((prevState) => ({
														...prevState,
														status: e.target.value,
													}));
													console.log(
														item.orders_id,
														status.status,
														`ID ${item.orders_id} Status Menjadi ${status.status}`
													);
													dispatch(updateOrder(item.orders_id, status.status));
													setRefetch(!Refetch);
												}}
											>
												{item.order_status == 'waiting' ? (
													<>
														<option selected>Pilih Status</option>
														<option value='canceled'>canceled</option>
														<option value='accepted'>accepted</option>
														<option value='onprocess'>onprocess</option>
														<option value='done'>done</option>
													</>
												) : (
													<>
														{item.order_status == 'accepted' ? (
															<>
																<option selected>Pilih Status</option>
																<option value='onprocess'>onprocess</option>
																<option value='done'>done</option>
															</>
														) : (
															<>
																{item.order_status == 'onprocess' ? (
																	<>
																		<option selected>Pilih Status</option>
																		<option value='done'>done</option>
																	</>
																) : (
																	<></>
																)}
															</>
														)}
													</>
												)}
											</select>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	// const dataauth = useSelector((indexreducer) => indexreducer.auth);
	const res = await fetch(
		`https://seahorse-app-bmw8s.ondigitalocean.app/api/v1/product/order/all`
	);
	const data = await res.json();
	return { props: { data } };
}

export default Adminorder;
