import { baseApi } from './base';
import { PopularPeopleResult } from '../../TMDBAPIInterfaces';
import { peoplePathNames } from '../../../routes';

export const peopleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularPeople: builder.query<PopularPeopleResult, number>({
      query: (page) => ({
        url: peoplePathNames.popularPeople,
        method: 'get',
        params: { page },
      }),
    }),
  }),
});

export const { useGetPopularPeopleQuery } = peopleApi;
