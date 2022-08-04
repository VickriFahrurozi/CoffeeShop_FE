/** @format */

import { combineReducers } from 'redux';

import AuthLogin from './AuthLogin';
import Product from './Product';
import SingleProduct from './SingleProduct';
import AddOrder from './AddOrder';
import GetOrder from './GetOrder';
import UpdateOrder from './updateorder';
const rootReducer = combineReducers({
	auth: AuthLogin,
	product: Product,
	singleproduct: SingleProduct,
	addorder: AddOrder,
	getorder: GetOrder,
	updateorder: UpdateOrder,
});

export default rootReducer;
