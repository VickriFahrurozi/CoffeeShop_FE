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
const addOrderRequest = () => {
	return {
		type: 'ADD_ORDER_REQUEST',
	};
};
const addOrderSuccess = (data) => {
	return {
		type: 'ADD_ORDER_SUCCESS',
		payload: data,
	};
};
const addOrderError = (error) => {
	return {
		type: 'ADD_ORDER_ERROR',
		payload: error,
	};
};

const getOrderRequest = () => {
	return {
		type: 'GET_ORDER_REQUEST',
	};
};
const getOrderSuccess = (data) => {
	return {
		type: 'GET_ORDER_SUCCESS',
		payload: data,
	};
};
const getOrderError = (error) => {
	return {
		type: 'GET_ORDER_ERROR',
		payload: error,
	};
};
const updateOrderRequest = () => {
	return {
		type: 'UPDATE_ORDER_REQUEST',
	};
};
const updateOrderSuccess = (data) => {
	return {
		type: 'UPDATE_ORDER_SUCCESS',
		payload: data,
	};
};
const updateOrderError = (error) => {
	return {
		type: 'UPDATE_ORDER_ERROR',
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
export const addOrder = (
	name,
	profile,
	product,
	price,
	address,
	payment,
	size,
	quantity
) => {
	return (dispatch) => {
		dispatch(updateOrderRequest()); //PAKE THEN CATCH
		axios({
			method: 'POST',
			url: `http://localhost:9999/api/v1/product/order?name=${name}&profile_id=${profile}&product_id=${product}&order_price=${price}&order_address=${address}&order_payment_method=${payment}&order_size=${size}&order_quantity=${quantity}`,
		})
			.then((res) => {
				//success
				dispatch(addOrderSuccess(res.data));
				alert('Order Berhasil Ditambahkan');
			})
			.catch((err) => {
				dispatch(addOrderError(err.response));
				alert('Order Gagal');
			});
	};
};

export const getOrder = (id) => {
	return (dispatch) => {
		dispatch(getOrderRequest()); //PAKE THEN CATCH
		axios({
			method: 'GET',
			url: `http://localhost:9999/api/v1//product/order/id?id=${id}`,
		})
			.then((res) => {
				//success
				dispatch(getOrderSuccess(res.data));
			})
			.catch((err) => {
				dispatch(getOrderError(err.response));
			});
	};
};
export const updateOrder = (id, status) => {
	return (dispatch) => {
		dispatch(getOrderRequest()); //PAKE THEN CATCH
		axios({
			method: 'PATCH',
			url: `http://localhost:9999/api/v1/product/order/status?order_id=${id}&status=${status}`,
		})
			.then((res) => {
				//success
				dispatch(updateOrderSuccess(res.data));
			})
			.catch((err) => {
				dispatch(updateOrderError(err.response));
			});
	};
};
