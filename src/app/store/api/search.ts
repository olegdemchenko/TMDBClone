import { baseApi } from './base';
import { MultiSearchResults } from '../../APIInfo';

type MultiSearchRequest = {
  query: string;
  page: number;
};

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMultiSearch: builder.query<MultiSearchResults, MultiSearchRequest>({
      query: ({ query, page }) => (
        { url: '/search/multi', method: 'get', params: { query, page } }
      ),
    }),
  }),
});

export const {
  useGetMultiSearchQuery,
} = searchApi;
