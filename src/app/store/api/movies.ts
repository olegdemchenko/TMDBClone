import { baseApi } from './base';
import { MovieListResult } from '../../APIInfo';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MovieListResult, number>({
      query: (page) => ({ url: '/movie/popular', method: 'get', params: { page } }),
    }),
    getNowPlayingMovies: builder.query<MovieListResult, number>({
      query: (page) => ({ url: '/movie/now_playing', method: 'get', params: { page } }),
    }),
    getTopRatedMovies: builder.query<MovieListResult, number>({
      query: (page) => ({ url: '/movie/top_rated', method: 'get', params: { page } }),
    }),
    getUpcomingMovies: builder.query<MovieListResult, number>({
      query: (page) => ({ url: '/movie/upcoming', method: 'get', params: { page } }),
    }),
  }),
});
