/** @format */
import Image from 'next/image';
import { checklist } from '../asset/assetauth';
const HomeFavorite = (data) => {
	const { list, totalpage, totalrow, totaldata } = data.data.data.data;
	return (
		<>
			<div className='container-fluid p-2'>
				<div className='row'>
					<div className='col '>
						<div className='col home-mapping-word'>
							<div className='justify-content-center d-flex home-favorite-big-word'>
								Here is People’s Favorite
							</div>
							<div className='justify-content-center d-flex home-favorite-small-word'>
								Let’s choose and have a bit taste of poeple’s favorite. It might
								be yours too!
							</div>
						</div>
						<div className='col d-md-flex justify-content-center col-sm-12  '>
							{list?.map((item, index) => {
								return (
									<>
										<div className='card p-5 bg-outline-dark ms-sm-1 ms-md-4 col-md-3 home-favorite-card mt-5'>
											<div className=' d-flex justify-content-center'>
												<Image
													className='home-favorite-product-image'
													// loader={myLoader(item.product_picture)}
													src={`https://seahorse-app-bmw8s.ondigitalocean.app/api/v1/${item.product_picture}`}
													width={'100'}
													height={'200'}
												/>
											</div>
											<div className='home-favorite-product-name mt-4 justify-content-center d-flex'>
												{item.product_name}
											</div>
											<div className='justify-content-center d-flex'>
												Terjual {item.product_buy_count} Pcs
											</div>
											<div className='col d-flex mb-3 justify-content-center home-mapping-checklist-word mt-5'>
												<Image src={checklist} />
												<div className='ps-3'>{item.product_detail}</div>
											</div>

											<div className=' d-flex justify-content-center home-favorite-product-price'>
												IDR {item.price_range}
											</div>
											<div className='d-flex justify-content-center mt-4 home-favorite-order-button'>
												<button className='btn btn-outline-warning col-6 '>
													{' '}
													Order Now
												</button>
											</div>
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeFavorite;
