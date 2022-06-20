import { createApi } from '@reduxjs/toolkit/query/react';
import { MultiSearchResults } from '../APIInterfaces';
import axiosBaseQuery from './axiosBaseQuery';

const baseUrl = 'https://api.themoviedb.org/3';
type MultiSearchRequest = {
  query: string;
  page: number;
};

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: axiosBaseQuery({ baseUrl }),
  endpoints: () => ({

  }),
});
