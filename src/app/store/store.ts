import { configureStore } from '@reduxjs/toolkit/';
import { tmdbApi } from './api';
import moviesSlice from './slices/movies';

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    movies: moviesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(tmdbApi.middleware)
  ),
});

export type RootState = ReturnType<typeof store.getState>;
