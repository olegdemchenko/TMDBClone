import { baseApi } from './base';
import { MultiSearchResults } from '../../TMDBAPIInterfaces';
import { searchPathNames } from '../../../routes';

type MultiSearchRequest = {
  query: string;
  page: number;
};

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMultiSearch: builder.query<MultiSearchResults, MultiSearchRequest>({
      query: ({ query, page }) => ({
        url: searchPathNames.multiSearch,
        method: 'get',
        params: { query, page },
      }),
    }),
  }),
});

export const { useGetMultiSearchQuery } = searchApi;
