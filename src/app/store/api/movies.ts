import { baseApi } from './base';
import { MovieListResult } from '../../TMDBAPIInterfaces';
import { moviesPathNames } from '../../../routes/routes';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MovieListResult, number>({
      query: (page) => ({
        url: moviesPathNames.popularMovies,
        method: 'get',
        params: { page },
      }),
    }),
    getNowPlayingMovies: builder.query<MovieListResult, number>({
      query: (page) => ({
        url: moviesPathNames.nowPlayingMovies,
        method: 'get',
        params: { page },
      }),
    }),
    getTopRatedMovies: builder.query<MovieListResult, number>({
      query: (page) => ({
        url: moviesPathNames.topRatedMovies,
        method: 'get',
        params: { page },
      }),
    }),
    getUpcomingMovies: builder.query<MovieListResult, number>({
      query: (page) => ({
        url: moviesPathNames.upcomingMovies,
        method: 'get',
        params: { page },
      }),
    }),
  }),
});
