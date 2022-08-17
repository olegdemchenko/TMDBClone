import { baseApi } from './base';
import { TVListResult } from '../../TMDBAPIInterfaces';

export const TVApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularTVShows: builder.query<TVListResult, number>({
      query: (page) => ({
        url: '/tv/popular',
        method: 'get',
        params: { page },
      }),
    }),
    getAiringTVShows: builder.query<TVListResult, number>({
      query: (page) => ({
        url: '/tv/airing_today',
        method: 'get',
        params: { page },
      }),
    }),
    getOnTVShows: builder.query<TVListResult, number>({
      query: (page) => ({
        url: '/tv/on_the_air',
        method: 'get',
        params: { page },
      }),
    }),
    getTopRatedTVShows: builder.query<TVListResult, number>({
      query: (page) => ({
        url: '/tv/top_rated',
        method: 'get',
        params: { page },
      }),
    }),
  }),
});
