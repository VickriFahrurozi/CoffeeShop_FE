/** @format */

import { combineReducers } from 'redux';

import AuthLogin from './AuthLogin';
import Product from './Product';
import SingleProduct from './SingleProduct';
const rootReducer = combineReducers({
	auth: AuthLogin,
	product: Product,
	singleproduct: SingleProduct,
});

export default rootReducer;
