/** @format */
import axios from 'axios';
const getProductRequest = () => {
	return {
		type: 'GET_PRODUCT_REQUEST',
	};
};
const getProductSuccess = (data) => {
	return {
		type: 'GET_PRODUCT_SUCCESS',
		payload: data,
	};
};
const getProductError = (error) => {
	return {
		type: 'GET_PRODUCT_ERROR',
		payload: error,
	};
};
const getSingleProductRequest = () => {
	return {
		type: 'GET_SINGLE_PRODUCT_REQUEST',
	};
};
const getSingleProductSuccess = (data) => {
	return {
		type: 'GET_SINGLE_PRODUCT_SUCCESS',
		payload: data,
	};
};
const getSingleProductError = (error) => {
	return {
		type: 'GET_SINGLE_PRODUCT_ERROR',
		payload: error,
	};
};

export const getProduct = (limit, page, order_by, sort, category) => {
	return (dispatch) => {
		dispatch(getProductRequest()); //PAKE THEN CATCH
		axios({
			method: 'GET',
			url: `http://localhost:9999/api/v1//product?limit=${limit}&page=${page}&order_by=${order_by}&sort=${sort}&category=${category}`,
		})
			.then((res) => {
				//success
				dispatch(getProductSuccess(res.data));
			})
			.catch((err) => {
				dispatch(getProductError(err.response));
			});
	};
};
export const getSingleProduct = (id) => {
	return (dispatch) => {
		dispatch(getSingleProductRequest()); //PAKE THEN CATCH
		axios({
			method: 'GET',
			url: `http://localhost:9999/api/v1/product/id?id=${id}`,
		})
			.then((res) => {
				//success
				dispatch(getSingleProductSuccess(res.data));
			})
			.catch((err) => {
				dispatch(getSingleProductError(err.response));
			});
	};
};
