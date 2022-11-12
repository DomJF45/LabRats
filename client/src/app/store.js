import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import labReducer from '../features/lab/labSlice';
import { loadState, saveState } from './localStorage'

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lab: labReducer
  },
  persistedState
});

store.subscribe(() => {
  saveState(store.getState());
});

const rootReducer = combineReducers({
  auth: authReducer,
  lab: labReducer
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}