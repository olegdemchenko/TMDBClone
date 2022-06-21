import { createApi } from '@reduxjs/toolkit/query/react';
import {
  MultiSearchResults,
  MovieList,
} from '../APIInterfaces';
import axiosBaseQuery from './axiosBaseQuery';

type MultiSearchRequest = {
  query: string;
  page: number;
};

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getMultiSearch: builder.query<MultiSearchResults, MultiSearchRequest>({
      query: ({ query, page }) => (
        { url: '/search/multi', method: 'get', params: { query, page } }
      ),
    }),
    getPopularMovies: builder.query<MovieList, void>({
      query: () => ({ url: '/movie/popular', method: 'get', params: {} }),
    }),
    getNowPlayingMovies: builder.query<MovieList, void>({
      query: () => ({ url: '/movie/now_playing', method: 'get', params: {} }),
    }),
    getTopRatedMovies: builder.query<MovieList, void>({
      query: () => ({ url: '/movie/top_rated', method: 'get', params: {} }),
    }),
    getUpcomingMovies: builder.query<MovieList, void>({
      query: () => ({ url: '/movie/upcoming', method: 'get', params: {} }),
    }),
  }),
});

export const {
  useGetMultiSearchQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetUpcomingMoviesQuery,
} = tmdbApi;
