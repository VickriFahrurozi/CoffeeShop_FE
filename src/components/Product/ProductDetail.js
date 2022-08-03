/** @format */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../redux/actions/Product';
import Image from 'next/image';
import Link from 'next/link';
import ProductDetailLeft from './ProductDetailLeft';
import ProductDetailRight from './ProductDetailRight';

const ProductDetailLayout = (data) => {
	const dispatch = useDispatch();
	const dataprodduk = useSelector((state) => state.singleproduct);
	const [Refetch, setRefetch] = useState();
	const [ProductList, setProductList] = useState({
		id: data.data,
	});

	useEffect(() => {
		dispatch(getSingleProduct(ProductList.id));
	}, [Refetch]);
	const { list } = dataprodduk.data;

	return (
		<>
			<div className='container-fluid bg-light product-detail'>
				<div className='product-detail-navigation col d-flex'>
					Favorite & Promo-
					<div className='product-detail-brand'>{list[0].product_name}</div>
				</div>
				<div className='row'>
					<div className='col-12 justify-content-center d-md-flex'>
						<div className='col-md-5 col-sm-12 justify-content-center'>
							<ProductDetailLeft data={list} />
						</div>
						<div className='col-md-7 col-sm-12'>
							<ProductDetailRight data={list} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetailLayout;
