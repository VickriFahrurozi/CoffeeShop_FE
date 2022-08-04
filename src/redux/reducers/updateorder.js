/** @format */

const initialState = {
	loading: false,
	data: {
		message: '',
		status: '',
		list: {},
	},
	error: '',
};

const fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'UPDATE_ORDER_REQUEST':
			return { ...state, loading: true };
		case 'UPDATE_ORDER_ERROR':
			return { ...state, loading: false, data: {}, error: action.payload };
		case 'UPDATE_ORDER_SUCCESS':
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
