/* eslint-disable no-param-reassign, import/no-cycle */
import { configureStore } from '@reduxjs/toolkit/';
import { tmdbApi } from './api';

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(tmdbApi.middleware)
  ),
});

export type RootState = ReturnType<typeof store.getState>;
