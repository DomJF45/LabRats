import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import labReducer from '../features/lab/labSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lab: labReducer
  }
})