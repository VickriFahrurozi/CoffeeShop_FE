/** @format */

import axios from 'axios';
import Swal from 'sweetalert2';

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
	Swal.fire('Logout Success', '', 'success');
	return {
		type: 'AUTH_LOGOUT',
	};
};

export const AuthLogin = (formData) => {
	return (dispatch) => {
		dispatch(LoginRequest());
		axios({
			method: 'POST',
			url: 'http://localhost:9999/api/v1/auth/login',
			data: {
				email: formData.email,
				password: formData.password,
			},
		})
			.then((res) => {
				dispatch(LoginSuccess(res.data.data));
				Swal.fire(res.data.message, '', 'success');
			})
			.catch((err) => {
				dispatch(LoginError(Swal.fire(err.response.data.message, '', 'error')));
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
			url: 'http://localhost:9999/api/v1/auth/register',
			data: {
				email: formData.email,
				phoneNumber: formData.phoneNumber,
				password: formData.password,
				confirmpassword: formData.confirmpassword,
			},
		})
			.then((res) => {
				dispatch(RegisterSuccess(res.data));
				Swal.fire(res.data.message, '', 'success');
			})
			.catch((err) => {
				dispatch(RegisterError(alert(err.response.data.message)));
			});
	};
};
