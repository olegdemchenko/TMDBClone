import { baseApi } from './base';
import { TVListResult } from '../../TMDBAPIInterfaces';
import { tvPathsNames } from '../../../routes';

export const TVApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularTVShows: builder.query<TVListResult, number>({
      query: (page) => ({
        url: tvPathsNames.popularShows,
        method: 'get',
        params: { page },
      }),
    }),
    getAiringTVShows: builder.query<TVListResult, number>({
      query: (page) => ({
        url: tvPathsNames.airingTodayShows,
        method: 'get',
        params: { page },
      }),
    }),
    getOnTVShows: builder.query<TVListResult, number>({
      query: (page) => ({
        url: tvPathsNames.onTVShows,
        method: 'get',
        params: { page },
      }),
    }),
    getTopRatedTVShows: builder.query<TVListResult, number>({
      query: (page) => ({
        url: tvPathsNames.topRatedShows,
        method: 'get',
        params: { page },
      }),
    }),
  }),
});
