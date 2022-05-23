import { configureStore } from '@reduxjs/toolkit';
// reducer
import productReducer from '../reducers/productReducer';

export default configureStore({
	reducer: {
		product: productReducer,
	},
});
