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
      query: (page) => ({ url: '/movie/popular', method: 'get', params: { page } }),
    }),
    getNowPlayingMovies: builder.query<MovieList, void>({
      query: (page) => ({ url: '/movie/now_playing', method: 'get', params: { page } }),
    }),
    getTopRatedMovies: builder.query<MovieList, void>({
      query: (page) => ({ url: '/movie/top_rated', method: 'get', params: { page } }),
    }),
    getUpcomingMovies: builder.query<MovieList, void>({
      query: (page) => ({ url: '/movie/upcoming', method: 'get', params: { page } }),
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
