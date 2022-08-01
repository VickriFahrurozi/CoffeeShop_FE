/** @format */
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer.js';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthLogout } from '../redux/actions/Auth';
import Navbar from '../components/navbar';
import Home from '../components/Home/Home';
const home = (data) => {
	const { list, totalpage, totalrow, totaldata } = data;
	const dispatch = useDispatch();
	const router = useRouter();
	const [Refetch, setRefetch] = useState();
	const { isLogin } = useSelector((indexreducer) => indexreducer.auth);
	const myLoader = ({ src }) => {
		return `http://localhost:9999/upload/${src}`;
	};
	useEffect(() => {
		if (isLogin == true) {
			router.replace(`/User/homeuser`);
		}
	}, [Refetch]);

	return (
		<>
			<Navbar />
			<Home data={data} />
			<Footer />
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
