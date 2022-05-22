import {configureStore} from '@reduxjs/toolkit';
//reducer
import productSlice from './slices/products';

export default configureStore({
    reducer:{
        productSlice,
    }
});

