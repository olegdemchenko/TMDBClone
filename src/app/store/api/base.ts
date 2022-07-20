import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const baseApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: axiosBaseQuery,
  keepUnusedDataFor: 3600,
  endpoints: () => ({}),
});
