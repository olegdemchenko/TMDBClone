/* eslint-disable no-param-reassign, import/no-cycle */
import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { MovieListItem } from '../../APIInterfaces';
import { tmdbApi } from '../api';

interface MoviesByCategories {
  popularIds: number[],
  upcomingIds: number[],
  topIds: number[],
  nowPlayingIds: number[],
}

const movieAdapter = createEntityAdapter<MovieListItem>();
const moviesSlice = createSlice({
  name: 'movies',
  initialState: movieAdapter.getInitialState<MoviesByCategories>({
    popularIds: [],
    upcomingIds: [],
    topIds: [],
    nowPlayingIds: [],
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
    builder.addMatcher(
      tmdbApi.endpoints.getUpcomingMovies.matchFulfilled,
      (state, { payload }) => {
        state.upcomingIds = [...state.upcomingIds, ...payload.results.map(({ id }) => id)];
        movieAdapter.setMany(state, payload.results);
      },
    );
    builder.addMatcher(
      tmdbApi.endpoints.getTopRatedMovies.matchFulfilled,
      (state, { payload }) => {
        state.topIds = [...state.topIds, ...payload.results.map(({ id }) => id)];
        movieAdapter.setMany(state, payload.results);
      },
    );
    builder.addMatcher(
      tmdbApi.endpoints.getNowPlayingMovies.matchFulfilled,
      (state, { payload }) => {
        state.nowPlayingIds = [...state.nowPlayingIds, ...payload.results.map(({ id }) => id)];
        movieAdapter.setMany(state, payload.results);
      },
    );
  },
});

export const selectPopularMovies = createSelector(
  (state: RootState) => state.movies,
  (movies) => movies.popularIds.reduce((acc, id) => [...acc, movies.entities[id]], []),
);

export const selectUpcomingMovies = createSelector(
  (state: RootState) => state.movies,
  (movies) => movies.upcomingIds.reduce((acc, id) => [...acc, movies.entities[id]], []),
);

export const selectTopRatedMovies = createSelector(
  (state: RootState) => state.movies,
  (movies) => movies.topIds.reduce((acc, id) => [...acc, movies.entities[id]], []),
);

export const selectNowPlayingMovies = createSelector(
  (state: RootState) => state.movies,
  (movies) => movies.nowPlayingIds.reduce((acc, id) => [...acc, movies.entities[id]], []),
);

export default moviesSlice;
