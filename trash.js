/** @format */
import Image from 'next/image';
import { loginimage } from './asset/assetauth';

const login = () => {
	return (
		<>
			<div className='container row  '>
				<div className='col'>
					<div className='col d-flex justify-content-center'>
						<div>
							<Image className='loginimage' src={loginimage} alt='login' />
						</div>

						<div className='col-sm-12 col-md-6 card login-card'>
							<div className='d-flex justify-content-b'>
								<div>Coffe Shop</div>
								<div>Login</div>
							</div>
							<div className=''>
								<button className='btn btn-warning mb-3'>Login</button>
								<button className='btn btn-danger'>Google</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default login;

<>
	{typeof window !== undefined ? (
		<>
			<div className='row'>
				<button className='btn btn-primary mb-3'>
					<div>{changes}</div>
				</button>
				<button
					className='btn btn-primary mb-3'
					onClick={() => {
						window.location.reload();
					}}
				>
					<div>Ini Home</div>
				</button>
				<button className='btn btn-primary mb-3'>
					<div>Ini Home</div>
				</button>
				<button className='btn btn-primary'>
					<div>Ini Home</div>
				</button>
			</div>
		</>
	) : (
		<></>
	)}
</>;
