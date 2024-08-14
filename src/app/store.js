import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';
import arrayReducer from '../counter/arrayStore'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    array:arrayReducer,
  },
})