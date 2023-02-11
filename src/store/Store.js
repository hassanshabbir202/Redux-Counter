import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../counterSlice/CounterSlice';

export const store = configureStore({
  reducer: counterSlice,
});