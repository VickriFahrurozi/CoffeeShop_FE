/** @format */
import ProductList from './productlist';
import ProductPromo from './productpromo';
const Product = () => {
	return (
		<>
			<div className='container-fluid '>
				<div className='col d-flex'>
					<div className='col-md-3 d-sm-none d-md-block p-5 border-right border-dark'>
						<ProductPromo />
					</div>
					<div className='col-md-9 p-5 col-sm-12 product-main '>
						<ProductList />
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
