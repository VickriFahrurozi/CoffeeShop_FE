/** @format */

import { getProduct } from '../actions/Product';

const initialState = {
	loading: false,
	data: {
		message: '',
		status: '',
		result: {},
	},
	error: '',
};

const fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'ADD_ORDER_REQUEST':
			return { ...state, loading: true };
		case 'ADD_ORDER_ERROR':
			return { ...state, loading: false, data: {}, error: action.payload };
		case 'ADD_ORDER_SUCCESS':
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
