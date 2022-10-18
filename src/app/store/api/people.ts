import { baseApi } from './base';
import {
  CombinedCreditsRes,
  PersonDetails,
  PopularPeopleResult,
} from '../../TMDBAPIInterfaces';
import { dynamicPaths, peoplePathNames } from '../../../routes';

export const peopleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularPeople: builder.query<PopularPeopleResult, number>({
      query: (page) => ({
        url: peoplePathNames.popularPeople,
        method: 'get',
        params: { page },
      }),
    }),
    getPersonDetails: builder.query<PersonDetails, number>({
      query: (personId) => ({
        url: dynamicPaths.personDetails(personId),
        method: 'get',
      }),
    }),
    getPersonCombinedCredits: builder.query<CombinedCreditsRes, number>({
      query: (personId) => ({
        url: dynamicPaths.personCombinedCredits(personId),
        method: 'get',
      }),
    }),
  }),
});

export const {
  useGetPopularPeopleQuery,
  useGetPersonDetailsQuery,
  useGetPersonCombinedCreditsQuery,
} = peopleApi;
