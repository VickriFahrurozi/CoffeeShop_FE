/** @format */
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer.js';

const home = ({ changes }) => {
	return (
		<>
			<Footer />
		</>
	);
};

export default home;

export async function getStaticProps(context) {
	return {
		props: { changes: 'World' },

		// will be passed to the page component as props
	};
}
