/** @format */
import styles from '../../../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';
import { NavbarLogin, Navbar } from '../../components/navbar';
import Product from '../../components/Product/Product';
import Link from 'next/link';
const productuser = (data) => {
	const router = useRouter();
	const [Refetch, setRefetch] = useState();
	const { isLogin } = useSelector((indexreducer) => indexreducer.auth);
	useEffect(() => {
		if (isLogin == false) {
			router.replace(`/LoginRegister/login`);
		}
	}, [isLogin]);

	return (
		<>
			<NavbarLogin />
			<Product />
			<Footer />
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch(
		`https://seahorse-app-bmw8s.ondigitalocean.app/api/v1/product?limit=3&page=1&order_by=product_buy_count&sort=desc&category=coffee`
	);
	console.log(res, 'ini resnya');
	const data = await res.text();
	return { props: { data } };
}

export default productuser;

{
	/* <button
className='btn btn-primary'
onClick={() => {
	dispatch(AuthLogout());
	setRefetch(!Refetch);
}}
>
Logout
</button> */
}
