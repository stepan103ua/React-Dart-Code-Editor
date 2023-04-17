import { configureStore, combineReducers } from '@reduxjs/toolkit';

import auth from './reducers/authSlice';
import { apiSlice } from './api/apiSlice';

const rootReducer = combineReducers({
  auth,
  [apiSlice.reducerPath]: apiSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;
