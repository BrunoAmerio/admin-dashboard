import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
	name: 'user',
	initialState: {
		id: '',
		email: '',
		loading: false,
		failure: false,
	},
	reducers: {
		initLogin: state => {
			state.loading = true;
		},
		fetchDataUser: (state, action) => {
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.loading = false;
		},
		loginFailure: state => {
			state.failure = true;
		},
	},
});

export const { initLogin, fetchDataUser, loginFailure } = userReducer.actions;

export default userReducer.reducer;
