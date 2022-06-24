/* eslint-disable no-param-reassign, import/no-cycle */
import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { MovieListItem } from '../../APIInterfaces';
import { tmdbApi } from '../api';

interface MoviesByCategories {
  popularIds: number[]
}

const movieAdapter = createEntityAdapter<MovieListItem>();
const moviesSlice = createSlice({
  name: 'movies',
  initialState: movieAdapter.getInitialState<MoviesByCategories>({
    popularIds: [],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      tmdbApi.endpoints.getPopularMovies.matchFulfilled,
      (state, { payload }) => {
        state.popularIds = [...state.popularIds, ...payload.results.map(({ id }) => id)];
        movieAdapter.setMany(state, payload.results);
      },
    );
  },
});

export const selectPopularMovies = createSelector(
  (state: RootState) => state.movies,
  (movies) => movies.popularIds.reduce((acc, id) => [...acc, movies.entities[id]], []),
);

export default moviesSlice;
