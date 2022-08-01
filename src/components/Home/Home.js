/** @format */

import HomeBanner from './homebanner';
import HomeMapping from './homemapping';
import HomeFavorite from './homefavorite';
import HomeStore from './homestore';
import HomePartner from './homepartner';
import HomeReview from './homereview';
import HomeCard from './homecard';
import HomeCard1 from './homecard1';
const Home = (data) => {
	return (
		<>
			<HomeBanner />
			<HomeCard1 />
			<HomeMapping />
			<HomeFavorite data={data} />
			<HomeStore />
			<HomePartner />
			<HomeReview />
			<HomeCard />
		</>
	);
};

export default Home;
