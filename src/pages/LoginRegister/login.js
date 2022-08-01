/** @format */
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	coffeelogo,
	googlelogo,
	loginimage2,
} from '../../components/asset/assetauth';
import Footer from '../../components/footer';
import { AuthLogin } from '../../redux/actions/Auth';
const login = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [Refetch, setRefetch] = useState();
	const [LoginData, setLoginData] = useState({
		email: '',
		password: '',
	});
	const { loading, data, error, isLogin } = useSelector(
		(indexreducer) => indexreducer.auth
	);
	const handlelogin = async (e) => {
		e.preventDefault();
		dispatch(AuthLogin(LoginData));
		setRefetch(!Refetch);
	};

	useEffect(() => {
		if (isLogin == true && data.role == 222) {
			// router.replace(`/User/homeuser`, `/User/homeuser/${data.id}`);
			router.replace(`/User/homeuser`);
			// router.push('/LoginRegister/register');
		} else if (isLogin == true && data.role == 111) {
			router.replace(`http://localhost:3000/`);
		}
	}, [Refetch]);
	return (
		<>
			<div className='container-fluid login-container-fluid '>
				<div className='row'>
					<div className='col d-flex login-content-left  flex-row-reverse login-content-left-a'>
						<Image className='img-fluid ' src={loginimage2} />
					</div>
					<div className='col-sm-12 col-md-6 d-flex card login-card  ps-4'>
						<div className='login-content-right '>
							<div className='login-top-word d-flex justify-content-between '>
								<div className='d-flex align-items-center login-coffe-shop-word-responsive'>
									<Image src={coffeelogo} />
									<div className='ms-2 login-coffe-shop-word'>Coffe Shop</div>
								</div>
								<div>
									<div className='login-word'>Login</div>
								</div>
							</div>

							<div className='login-field justify-content-center'>
								<div>
									<div className='login-text font-style-responsive'>
										Email Address :
									</div>
									<input
										className='login-text-input col-12'
										type='email'
										required
										placeholder='Enter Your Email Address'
										onChange={(e) => {
											setLoginData((prevState) => ({
												...prevState,
												email: e.target.value,
											}));
										}}
									/>
								</div>
								<div>
									<div className='login-text login-text-password font-style-responsive'>
										Password :
									</div>
									<input
										className='login-text-input col-12'
										type='password'
										required
										placeholder='Enter Your Password'
										onChange={(e) => {
											setLoginData((prevState) => ({
												...prevState,
												password: e.target.value,
											}));
										}}
									/>
								</div>
								<div>
									<div className='login-text login-forgot-password font-style-responsive'>
										Forgot Password ?
									</div>
								</div>
							</div>
							<div className='row login-button col-md-10 justify-content-center'>
								<button
									className='btn btn-warning  mb-4 login-basic col-md-10 col-sm-8 shadow-lg'
									onClick={(e) => {
										handlelogin(e);
									}}
								>
									Login
								</button>

								<button className='btn btn-light login-google col-md-10 col-sm-8  shadow-lg'>
									<div className=''>
										<Image className='pt-2 ' src={googlelogo} /> Login with
										Google{' '}
									</div>
								</button>
							</div>

							<div className='row login-button col-md-10 login-button-sign-up justify-content-center'>
								<div className='login-dont-have-account mb-4 font-style-responsive'>
									Don't Have an Account ?
								</div>
								<Link href='/LoginRegister/register'>
									<button className='btn btn-info  mb-4 login-sign-up login-basic col-md-10 col-sm-8  shadow-lg'>
										Sign Up Here
									</button>
								</Link>
							</div>
							<div className='login-main-footer'>
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default login;
