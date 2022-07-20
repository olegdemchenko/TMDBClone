import { QueryHooks } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { createSelector } from '@reduxjs/toolkit';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query';
import { ApiEndpointQuery } from '@reduxjs/toolkit/dist/query/core/module';
import { useSelector } from 'react-redux';
import {
  MovieListResult,
} from '../../app/TMDBAPIInterfaces';
import { moviesApi } from '../../app/store/api';
import axiosBaseQuery from '../../app/store/api/axiosBaseQuery';

type QueryHookParams = number;

type MovieQuery = QueryDefinition<
QueryHookParams,
typeof axiosBaseQuery,
any,
MovieListResult>;

export type SendQuery = ReturnType<typeof useCachedQueryData>;

type Endpoint = ApiEndpointQuery<
MovieQuery,
{ [K in keyof typeof moviesApi.endpoints]: MovieQuery }
> & QueryHooks<MovieQuery>;

const selectCachedData = (endpoint: Endpoint, page: number) => {
  const selectors = Array.from(
    { length: page },
    (v, index) => endpoint.select(index + 1),
  );
  return createSelector(
    selectors,
    (...cachedResults) => (
      cachedResults.reduce((acc, { data }) => [...acc, ...(data?.results ?? [])], [])
    ),
  );
};

export function useCachedQueryData(
  endpoint: Endpoint,
) {
  return (param: QueryHookParams) => {
    const queryRes = endpoint.useQuery(param);
    const storedData = useSelector(selectCachedData(endpoint, param));
    return { ...queryRes, data: storedData };
  };
}
