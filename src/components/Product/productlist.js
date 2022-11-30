/** @format */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/Product';
import Image from 'next/image';
import Link from 'next/link';

const ProductList = () => {
	const [Refetch, setRefetch] = useState();
	const [ProductList, setProductList] = useState({
		limit: 20,
		page: 1,
		order_by: 'product_buy_count',
		sort: 'desc',
		category: 'all',
	});
	const dispatch = useDispatch();
	const data = useSelector((state) => state.product);
	const { list } = data.data;
	console.log(list, 'ini data product');
	useEffect(() => {
		dispatch(
			getProduct(
				ProductList.limit,
				ProductList.page,
				ProductList.order_by,
				ProductList.sort,
				ProductList.category
			)
		);
	}, [Refetch]);

	return (
		<>
			<div className='col-12 justify-content-center'>
				<nav className='navbar navbar-light '>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0 col-md-12 col-sm-12 '>
						<div className='d-flex justify-content-around '>
							<li className='nav-item  active '>
								{ProductList.category == 'all' ? (
									<>
										<a className='nav-link navbar-font text-warning' href='#'>
											<span className='sr-only'>Favorite & Promo</span>
										</a>
									</>
								) : (
									<>
										<a
											className='nav-link navbar-font '
											href='#'
											onClick={() => {
												setProductList((prevData) => ({
													...prevData,
													limit: 20,
													page: 1,
													order_by: 'product_buy_count',
													sort: 'desc',
													category: 'all',
												}));
												setRefetch(!Refetch);
											}}
										>
											Favorite & Promo <span className='sr-only'></span>
										</a>
									</>
								)}
							</li>
							<li className='nav-item '>
								{ProductList.category == 'coffee' ? (
									<>
										<a className='nav-link navbar-font text-warning' href='#'>
											<span className='sr-only'>Coffee</span>
										</a>
									</>
								) : (
									<>
										<a
											className='nav-link navbar-font '
											href='#'
											onClick={() => {
												setProductList((prevData) => ({
													...prevData,
													limit: 20,
													page: 1,
													order_by: 'product_name',
													sort: 'asc',
													category: 'coffee',
												}));
												setRefetch(!Refetch);
											}}
										>
											Coffee <span className='sr-only'></span>
										</a>
									</>
								)}
							</li>
							<li className='nav-item '>
								{ProductList.category == 'noncoffee' ? (
									<>
										<a className='nav-link navbar-font text-warning' href='#'>
											<span className='sr-only'>Non-Coffee</span>
										</a>
									</>
								) : (
									<>
										<a
											className='nav-link navbar-font '
											href='#'
											onClick={() => {
												setProductList((prevData) => ({
													...prevData,
													limit: 20,
													page: 1,
													order_by: 'product_name',
													sort: 'asc',
													category: 'noncoffee',
												}));
												setRefetch(!Refetch);
											}}
										>
											Non-Coffee <span className='sr-only'></span>
										</a>
									</>
								)}
							</li>
							<li className='nav-item '>
								{ProductList.category == 'food' ? (
									<>
										<a className='nav-link navbar-font text-warning' href='#'>
											<span className='sr-only'>Foods</span>
										</a>
									</>
								) : (
									<>
										<a
											className='nav-link navbar-font '
											href='#'
											onClick={() => {
												setProductList((prevData) => ({
													...prevData,
													limit: 20,
													page: 1,
													order_by: 'product_name',
													sort: 'asc',
													category: 'food',
												}));
												setRefetch(!Refetch);
											}}
										>
											Foods <span className='sr-only'></span>
										</a>
									</>
								)}
							</li>
							<li className='nav-item '>
								{ProductList.category == 'addon' ? (
									<>
										<a className='nav-link navbar-font text-warning' href='#'>
											<span className='sr-only'>Add-ons</span>
										</a>
									</>
								) : (
									<>
										<a
											className='nav-link navbar-font '
											href='#'
											onClick={() => {
												setProductList((prevData) => ({
													...prevData,
													limit: 20,
													page: 1,
													order_by: 'product_name',
													sort: 'asc',
													category: 'addon',
												}));
												setRefetch(!Refetch);
											}}
										>
											Add-ons <span className='sr-only'></span>
										</a>
									</>
								)}
							</li>
						</div>
					</ul>
				</nav>
			</div>
			<div className=''>
				<div className='col-12 col d-flex flex-wrap justify-content-sm-evenly justify-content-md-start ms-md-5'>
					{list?.map((item, index) => {
						return (
							<>
								<div className='card bg-outline-dark ms-sm-1 ms-md-4 col-md-2 col-sm-4 mt-5'>
									<div className=' d-flex justify-content-center'>
										<Image
											className='home-favorite-product-image p-2'
											// loader={myLoader(item.product_picture)}
											src={`http://localhost:9999/upload/${item.product_picture}`}
											width={'100'}
											height={'200'}
										/>
									</div>
									<div className='home-favorite-product-name mt-4 justify-content-center d-flex'>
										{item.product_name}
									</div>

									<div className=' d-flex justify-content-center '>
										IDR {item.price_range}
									</div>
									<div className='d-flex justify-content-center mt-4 home-favorite-order-button'>
										<Link href={`/Product/${item.product_id}`}>
											<button className='btn btn-outline-warning col-9 mb-4 '>
												Order Now
											</button>
										</Link>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ProductList;
