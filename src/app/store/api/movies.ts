import { baseApi } from './base';
import { MovieListResult } from '../../TMDBAPIInterfaces';
import { pathNames } from '../../../routes/routes';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MovieListResult, number>({
      query: (page) => ({
        url: pathNames.popularMovies,
        method: 'get',
        params: { page },
      }),
    }),
    getNowPlayingMovies: builder.query<MovieListResult, number>({
      query: (page) => ({
        url: pathNames.nowPlayingMovies,
        method: 'get',
        params: { page },
      }),
    }),
    getTopRatedMovies: builder.query<MovieListResult, number>({
      query: (page) => ({
        url: pathNames.topRatedMovies,
        method: 'get',
        params: { page },
      }),
    }),
    getUpcomingMovies: builder.query<MovieListResult, number>({
      query: (page) => ({
        url: pathNames.upcomingMovies,
        method: 'get',
        params: { page },
      }),
    }),
  }),
});
