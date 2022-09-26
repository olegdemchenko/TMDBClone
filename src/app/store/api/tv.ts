import { baseApi } from './base';
import {
  TVDetails,
  TVListResult,
  CreditsResults,
} from '../../TMDBAPIInterfaces';
import { dynamicPaths, tvPathsNames } from '../../../routes';

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
    getTVDetails: builder.query<TVDetails, number>({
      query: (id) => ({
        url: dynamicPaths.tvDetails(id),
        method: 'get',
        params: { id },
      }),
    }),
    getTVAggregateCredits: builder.query<CreditsResults, number>({
      query: (id) => ({
        url: dynamicPaths.tvCredits(id),
        method: 'get',
        params: { id },
      }),
    }),
  }),
});

export const { useGetTVDetailsQuery, useGetTVAggregateCreditsQuery } = TVApi;
