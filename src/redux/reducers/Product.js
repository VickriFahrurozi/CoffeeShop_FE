/** @format */

import { getProduct } from '../actions/Product';

const initialState = {
	loading: false,
	data: {
		list: [],
		totalRow: '',
		totaldata: '',
		totalpage: '',
	},
	error: '',
};

const fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_PRODUCT_REQUEST':
			return { ...state, loading: true };
		case 'GET_PRODUCT_ERROR':
			return { ...state, loading: false, data: {}, error: action.payload };
		case 'GET_PRODUCT_SUCCESS':
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
