import { configureStore } from '@reduxjs/toolkit';
import calcReducer from './components/calcSlice';


export default configureStore({
	reducer: { calc: calcReducer },
});
