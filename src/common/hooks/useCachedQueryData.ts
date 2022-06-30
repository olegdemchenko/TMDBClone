import { QueryHooks } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { createSelector } from '@reduxjs/toolkit';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query';
import { ApiEndpointQuery } from '@reduxjs/toolkit/dist/query/core/module';
import { useSelector } from 'react-redux';
import { MovieListResult } from '../../app/APIInterfaces';
import { tmdbApi } from '../../app/store/api';
import axiosBaseQuery from '../../app/store/api/axiosBaseQuery';

type QueryHookParams = number;

type MovieEndpointQuery = QueryDefinition<
QueryHookParams,
typeof axiosBaseQuery,
any,
MovieListResult>;

export type SendQuery = ReturnType<typeof useCachedQueryData>;

type Endpoint = ApiEndpointQuery<
MovieEndpointQuery,
{ [K in Exclude<keyof typeof tmdbApi.endpoints, 'getMultiSearch'>]: MovieEndpointQuery }
> & QueryHooks<MovieEndpointQuery>;

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
