/** @format */
import styles from '../../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer.js';
import { useRouter } from 'next/router';
import { Navbar } from '../components/navbar';
import Home from '../components/Home/Home';
const home = (data) => {
	const router = useRouter();
	const [Refetch, setRefetch] = useState();
	const { isLogin } = useSelector((indexreducer) => indexreducer.auth);
	useEffect(() => {
		if (isLogin == true) {
			router.replace(`/User/homeuser`);
		}
	}, [Refetch]);

	return (
		<>
			<Navbar />
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
		`http://localhost:9999/api/v1//product?limit=3&page=1&order_by=product_buy_count&sort=desc&category=coffee`
	);
	const data = await res.json();
	return { props: { data } };
}

export default home;
