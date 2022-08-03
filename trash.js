/** @format */
import Image from 'next/image';
import { loginimage } from './asset/assetauth';

const login = () => {
	return (
		<>
			<div className='container row  '>
				<div className='col'>
					<div className='col d-flex justify-content-center'>
						<div>
							<Image className='loginimage' src={loginimage} alt='login' />
						</div>

						<div className='col-sm-12 col-md-6 card login-card'>
							<div className='d-flex justify-content-b'>
								<div>Coffe Shop</div>
								<div>Login</div>
							</div>
							<div className=''>
								<button className='btn btn-warning mb-3'>Login</button>
								<button className='btn btn-danger'>Google</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default login;

<>
	{typeof window !== undefined ? (
		<>
			<div className='row'>
				<button className='btn btn-primary mb-3'>
					<div>{changes}</div>
				</button>
				<button
					className='btn btn-primary mb-3'
					onClick={() => {
						window.location.reload();
					}}
				>
					<div>Ini Home</div>
				</button>
				<button className='btn btn-primary mb-3'>
					<div>Ini Home</div>
				</button>
				<button className='btn btn-primary'>
					<div>Ini Home</div>
				</button>
			</div>
		</>
	) : (
		<></>
	)}
</>;

/** @format */
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSingleProduct } from '../../redux/actions/Product';
// import Image from 'next/image';
// import Link from 'next/link';
// import ProductDetailLeft from './ProductDetailLeft';
// import ProductDetailRight from './ProductDetailRight';

// const ProductDetailLayout = (data) => {
// 	const dispatch = useDispatch();
// 	const dataprodduk = useSelector((state) => state.singleproduct);
// 	const [Refetch, setRefetch] = useState();
// 	const [ProductList, setProductList] = useState({
// 		id: 1,
// 	});
// 	useEffect(() => {
// 		console.log(ProductList.id, 'ini ke dispatch loh');
// 		dispatch(getSingleProduct(ProductList.id));
// 	}, [Refetch]);
// 	console.log(data.data, 'data id dari props');
// 	const { list } = dataprodduk.data;
// 	return (
// 		<>
// 			<div className='container-fluid'>
// 				<div className='row'>Favorite & Promo-</div>
// 				<div className='row'>
// 					<div className='col-12 justify-content-center d-md-flex'>
// 						<div className='col-md-5 col-sm-12 justify-content-center'>
// 							<ProductDetailLeft data={list} />
// 						</div>
// 						<div className='col-md-7 col-sm-12 bg-warning'>
// 							<ProductDetailRight data={list} />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default ProductDetailLayout;
