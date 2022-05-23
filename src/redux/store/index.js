import { configureStore } from '@reduxjs/toolkit';

// Reducers
import productReducer from '../reducers/productReducer';
import loginReducer from '../reducers/loginReducer';

export default configureStore({
	reducer: {
		product: productReducer,
		user: loginReducer,
	},
});
