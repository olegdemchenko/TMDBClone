import { createApi } from '@reduxjs/toolkit/query/react';
import {
  MultiSearchResults,
  MovieListResult,
  TVListResult,
} from '../../APIInfo';
import axiosBaseQuery from './axiosBaseQuery';

type MultiSearchRequest = {
  query: string;
  page: number;
};

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: axiosBaseQuery,
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getMultiSearch: builder.query<MultiSearchResults, MultiSearchRequest>({
      query: ({ query, page }) => (
        { url: '/search/multi', method: 'get', params: { query, page } }
      ),
    }),
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
    getPopularTVShows: builder.query<TVListResult, number>({
      query: (page) => ({ url: '/tv/popular', method: 'get', params: { page } }),
    }),
    getAiringTVShows: builder.query<TVListResult, number>({
      query: (page) => ({ url: '/tv/airing_today', method: 'get', params: { page } }),
    }),
    getOnTVShows: builder.query<TVListResult, number>({
      query: (page) => ({ url: '/tv/on_the_air', method: 'get', params: { page } }),
    }),
    getTopRatedTVShows: builder.query<TVListResult, number>({
      query: (page) => ({ url: '/tv/top_rated', method: 'get', params: { page } }),
    }),
  }),
});

export const {
  useGetMultiSearchQuery,
} = tmdbApi;
