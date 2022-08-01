/** @format */

import { combineReducers } from 'redux';

import AuthLogin from './AuthLogin';
const rootReducer = combineReducers({
	auth: AuthLogin,
});

export default rootReducer;
