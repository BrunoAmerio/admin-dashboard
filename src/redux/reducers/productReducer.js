import { createSlice } from '@reduxjs/toolkit';
export const productReducer = createSlice({
	name: 'products',
	initialState: {
		products: [],
	},
	reducers: {},
});
export default productReducer.reducer;
