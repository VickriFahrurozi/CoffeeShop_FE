/** @format */

import { getProduct } from '../actions/Product';

const initialState = {
	loading: false,
	data: {
		message: '',
		status: '',
		list: [
			{
				orders_id: '',
				profile_id: 2,
				product_name: '',
				product_id: '',
				order_price: '',
				order_size: '',
				order_quantity: '',
				order_status: '',
				order_address: '',
				order_payment_method: '',
				order_payment_status: '',
				created_at: '',
				updated_at: '',
			},
		],
	},
	error: '',
};

const fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_ORDER_REQUEST':
			return { ...state, loading: true };
		case 'GET_ORDER_ERROR':
			return { ...state, loading: false, data: {}, error: action.payload };
		case 'GET_ORDER_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: '',
			};
		default:
			return state;
	}
};

export default fetch;
