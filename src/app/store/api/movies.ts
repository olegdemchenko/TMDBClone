import { baseApi } from './base';
import {
  MovieListResult,
  MovieDetails,
  VideosResults,
  ImagesResults,
  CreditsResults,
  MovieKeywordsResults,
} from '../../TMDBAPIInterfaces';
import { dynamicPaths, moviesPathNames } from '../../../routes';

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
    getMovieDetails: builder.query<MovieDetails, number>({
      query: (movieId) => ({
        url: dynamicPaths.movieDetails(movieId),
        method: 'get',
      }),
    }),
    getMovieVideos: builder.query<VideosResults, number>({
      query: (movieId) => ({
        url: dynamicPaths.movieVideos(movieId),
        method: 'get',
      }),
    }),
    getMovieImages: builder.query<ImagesResults, number>({
      query: (movieId) => ({
        url: dynamicPaths.movieImages(movieId),
        method: 'get',
      }),
    }),
    getMovieRecommendations: builder.query<MovieListResult, [number, number]>({
      query: ([movieId, page]) => ({
        url: dynamicPaths.movieRecommendations(movieId),
        method: 'get',
        params: { page },
      }),
    }),
    getMovieCredits: builder.query<CreditsResults, number>({
      query: (movieId) => ({
        url: dynamicPaths.movieCredits(movieId),
        method: 'get',
      }),
    }),
    getMovieKeywords: builder.query<MovieKeywordsResults, number>({
      query: (movieId) => ({
        url: dynamicPaths.movieKeywords(movieId),
        method: 'get',
      }),
    }),
  }),
});

export const {
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
  useGetMovieImagesQuery,
  useGetMovieRecommendationsQuery,
  useGetMovieCreditsQuery,
  useGetMovieKeywordsQuery,
} = moviesApi;
