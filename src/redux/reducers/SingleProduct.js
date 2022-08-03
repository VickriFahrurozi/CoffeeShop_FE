/** @format */
const initialState = {
	loading: false,
	data: {
		list: [''],
	},
	error: '',
};

const fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_SINGLE_PRODUCT_REQUEST':
			return { ...state, loading: true };
		case 'GET_SINGLE_PRODUCT_ERROR':
			return { ...state, loading: false, data: {}, error: action.payload };
		case 'GET_SINGLE_PRODUCT_SUCCESS':
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
