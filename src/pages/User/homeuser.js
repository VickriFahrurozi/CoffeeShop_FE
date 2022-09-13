/** @format */
import styles from '../../../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';
import { NavbarLogin, Navbar } from '../../components/navbar';
import Home from '../../components/Home/Home';
const homeuser = (data) => {
	const router = useRouter();
	const [Refetch, setRefetch] = useState();
	const datalogin = useSelector((indexreducer) => indexreducer.auth);
	console.log(datalogin.isLogin, 'asfiujshf');
	useEffect(() => {
		if (datalogin.isLogin == false) {
			router.replace(`/LoginRegister/login`);
		} else if (datalogin.isLogin == true && datalogin.data.role == 222) {
			router.replace(`/Admin/Adminorder`);
		}
	}, [Refetch]);

	return (
		<>
			<NavbarLogin />
			<Home data={data} />
			<div className='bg-light'>
				<div className={styles['main-footer']}>
					<Footer />
				</div>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch(
		`https://seahorse-app-bmw8s.ondigitalocean.app/api/v1/product?limit=3&page=1&order_by=product_buy_count&sort=desc&category=coffee`
	);
	const data = await res.text();
	return { props: { data } };
}

export default homeuser;

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
