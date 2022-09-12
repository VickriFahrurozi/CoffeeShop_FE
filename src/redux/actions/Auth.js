/** @format */

import axios from 'axios';

const LoginRequest = () => {
	return {
		type: 'LOGIN_REQUEST',
	};
};

const LoginSuccess = (data) => {
	return {
		type: 'LOGIN_SUCCESS',
		payload: data,
	};
};

const LoginError = (error) => {
	return {
		type: 'LOGIN_ERROR',
		payload: error,
	};
};


export const AuthLogout = () => {
	alert('Logout Success');
	return {
		type: 'AUTH_LOGOUT',
	};
};

export const AuthLogin = (formData) => {
	return (dispatch) => {
		dispatch(LoginRequest());
		axios({
			method: 'POST',
			url: 'https://seahorse-app-bmw8s.ondigitalocean.app/auth/login',
			data: {
				email: formData.email,
				password: formData.password,
			},
		})
			.then((res) => {
				dispatch(LoginSuccess(res.data.data));
				alert(res.data.message);
			})
			.catch((err) => {
				dispatch(LoginError(alert(err.response.data.message)));
			});
	};
};

const RegisterRequest = () => {
	return {
		type: 'REGISTER_REQUEST',
	};
};

const RegisterSuccess = (data) => {
	return {
		type: 'REGISTER_SUCCESS',
		payload: data,
	};
};

const RegisterError = (error) => {
	return {
		type: 'REGISTER_ERROR',
		payload: error,
	};
};

export const AuthRegister = (formData) => {
	return (dispatch) => {
		dispatch(RegisterRequest());
		axios({
			method: 'POST',
			url: 'https://seahorse-app-bmw8s.ondigitalocean.app/auth/register',
			data: {
				email: formData.email,
				phoneNumber: formData.phoneNumber,
				password: formData.password,
				confirmpassword: formData.confirmpassword,
			},
		})
			.then((res) => {
				dispatch(RegisterSuccess(res.data));
				alert(res.data.message);
			})
			.catch((err) => {
				dispatch(RegisterError(alert(err.response.data.message)));
			});
	};
};
