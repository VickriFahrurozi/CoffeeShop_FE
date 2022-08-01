/** @format */
import styles from '../../../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AuthLogout } from '../../redux/actions/Auth';
const homeuser = () => {
	// const post = data.list.post;
	const dispatch = useDispatch();
	const router = useRouter();
	const [Refetch, setRefetch] = useState();
	const { isLogin } = useSelector((indexreducer) => indexreducer.auth);
	useEffect(() => {
		if (isLogin == false) {
			router.replace('/LoginRegister/login');
		}
	}, [Refetch]);

	return (
		<>
			{/* {post?.map((item, index) => {
				return (
					<>
						<div key={index}>{item.post_title}</div>
					</>
				);
			})} */}
			<button
				className='btn btn-primary'
				onClick={() => {
					dispatch(AuthLogout());
					setRefetch(!Refetch);
				}}
			>
				Logout
			</button>
			<Footer />
		</>
	);
};

// export async function getServerSideProps() {
// 	const res = await fetch(
// 		`http://localhost:3289/api/v1/post/accepted?limit=100&page=1&order_by=post_title&sort=DESC`
// 	);
// 	const data = await res.json();
// 	return { props: { data } };
// }

export default homeuser;
