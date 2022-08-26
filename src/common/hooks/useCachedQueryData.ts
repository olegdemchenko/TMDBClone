import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { moviesApi, TVApi } from '../../app/store/api';

type QueryHookParams = number;

type MoviesEndpointsKeys =
  | 'getPopularMovies'
  | 'getTopRatedMovies'
  | 'getNowPlayingMovies'
  | 'getUpcomingMovies';

type TVEndpointsKeys =
  | 'getPopularTVShows'
  | 'getOnTVShows'
  | 'getAiringTVShows'
  | 'getTopRatedTVShows';

type FilteredMoviesEndpoint = typeof moviesApi.endpoints[MoviesEndpointsKeys];

type TVEndpoints = typeof TVApi.endpoints[TVEndpointsKeys];

type Endpoints = FilteredMoviesEndpoint | TVEndpoints;

const selectCachedData = (endpoint: Endpoints, page: number) => {
  const selectors = Array.from({ length: page }, (v, index) =>
    endpoint.select(index + 1)
  );
  return createSelector(selectors, (...cachedResults) =>
    cachedResults.reduce(
      (acc, { data }) => [...acc, ...(data?.results ?? [])],
      []
    )
  );
};

export function useCachedQueryData(endpoint: Endpoints) {
  return (param: QueryHookParams) => {
    const queryRes = endpoint.useQuery(param);
    const storedData = useSelector(selectCachedData(endpoint, param));
    return { ...queryRes, data: storedData };
  };
}

export type SendQuery = ReturnType<typeof useCachedQueryData>;
