import { baseApi } from './base';
import {
  TVDetails,
  TVListResult,
  CreditsResults,
  VideosResults,
  ImagesResults,
  TVKeywordsResults,
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
    getTVCredits: builder.query<CreditsResults, number>({
      query: (id) => ({
        url: dynamicPaths.tvCredits(id),
        method: 'get',
        params: { id },
      }),
    }),
    getTVVideos: builder.query<VideosResults, number>({
      query: (id) => ({
        url: dynamicPaths.tvVideos(id),
        method: 'get',
      }),
    }),
    getTVImages: builder.query<ImagesResults, number>({
      query: (id) => ({
        url: dynamicPaths.tvImages(id),
        method: 'get',
      }),
    }),
    getTVRecommendations: builder.query<TVListResult, [number, number]>({
      query: ([id, page]) => ({
        url: dynamicPaths.tvRecommendations(id),
        method: 'get',
        params: { page },
      }),
    }),
    getTVKeywords: builder.query<TVKeywordsResults, number>({
      query: (id) => ({
        url: dynamicPaths.tvKeywords(id),
        method: 'get',
      }),
    }),
  }),
});

export const {
  useGetTVDetailsQuery,
  useGetTVCreditsQuery,
  useGetTVVideosQuery,
  useGetTVImagesQuery,
  useGetTVRecommendationsQuery,
  useGetTVKeywordsQuery,
} = TVApi;
