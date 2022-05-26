import { createSlice } from '@reduxjs/toolkit';
export const dataReducer = createSlice({
	name: 'data',
	initialState: {
		products: [],
		categories: [],
	},
	reducers: {
		filteredData: (state,action) => {
			console.log(action.payload)
			if(action.payload.type==='isProduct') state.products = state.products.filter(({id})=>id === action.payload.id);
			if(action.payload.type==='isCategorie') state.categories = state.categories.filter(({id})=>id === action.payload.id);
		},
		fetchDataData: (state, action) => {
			if(action.payload.type==='isProduct') state.products = [action.payload.data];
			if(action.payload.type==='isCategorie') state.categories = [action.payload.data];
		},
	},
});

export const { filteredData, fetchDataData} = dataReducer.actions;

export default dataReducer.reducer;
