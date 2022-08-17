/* eslint-disable no-param-reassign, import/no-cycle */
import { configureStore } from '@reduxjs/toolkit/';
import { baseApi } from './api/base';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
