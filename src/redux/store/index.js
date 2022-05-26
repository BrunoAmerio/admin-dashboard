import { configureStore } from '@reduxjs/toolkit';

// Reducers
import dataReducer from '../reducers/dataReducer';
import loginReducer from '../reducers/loginReducer';

export default configureStore({
	reducer: {
		data: dataReducer,
		user: loginReducer,
	},
});
