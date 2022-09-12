/** @format */
import { useRouter } from 'next/router';
import { NavbarLogin } from '../../components/navbar';
import Footer from '../../components/footer';
import ProductDetailLayout from '../../components/Product/ProductDetail';
/** @format */
const productdetail = () => {
	const router = useRouter();
	return (
		<>
			<NavbarLogin />
			<ProductDetailLayout data={router.query.productdetail} />
			<Footer />
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch(
		`https://seahorse-app-bmw8s.ondigitalocean.app/product?limit=3&page=1&order_by=product_buy_count&sort=desc&category=coffee`
	);
	const data = await res.text();
	return { props: { data } };
}

export default productdetail;
