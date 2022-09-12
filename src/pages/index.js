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
		console.log(data, 'ini datanyaa');
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
		`https://seahorse-app-bmw8s.ondigitalocean.app/product?limit=3&page=1&order_by=product_buy_count&sort=desc&category=coffee`
	);
	console.log(res, 'ini resnya');
	const data = await res.text();
	return { props: { data } };
}

export default home;

// export async function getServerSideProps() {
// 	const res = await axios.get(
// 		`https://seahorse-app-bmw8s.ondigitalocean.app/product?limit=3&page=1&order_by=product_buy_count&sort=desc&category=coffee`,
// 		{
// 			headers: {
// 				Accept: 'application/json, text/plain, */*',
// 				'User-Agent': '*',
// 			},
// 		}
// 	);

// 	console.log(res, 'ini resnya loh');
// 	const data = await res.json();
// 	return { props: { data } };
// }