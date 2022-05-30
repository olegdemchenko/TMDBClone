import { rest } from 'msw';
import { MultiSearchResults, TVSearchInfo, Error } from '../../src/app/APIInterfaces';
import SearchQueries from '../testQueries';

const movieSearchRes: TVSearchInfo = {
  poster_path: null,
  popularity: 1,
  id: 24511,
  overview: '',
  backdrop_path: null,
  vote_average: 0,
  media_type: 'tv',
  first_air_date: '',
  origin_country: [
    'GB',
  ],
  genre_ids: [],
  original_language: 'en',
  vote_count: 0,
  name: 'Bradley',
  original_name: 'Bradley',
};

const multiSearchRes: MultiSearchResults = {
  page: 1,
  total_pages: 1,
  total_results: 1,
  results: [movieSearchRes],
};

const error: Error = {
  status_code: 404,
  status_message: 'Not Found',
};

const handlers = [
  rest.get('/3/search/multi', (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get('query');
    if (searchQuery === SearchQueries.MultiSearch) {
      return res(
        ctx.status(200),
        ctx.json(multiSearchRes),
      );
    }
    return res(
      ctx.status(404),
      ctx.json(error),
    );
  }),
];

export default handlers;
