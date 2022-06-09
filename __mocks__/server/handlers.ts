import { rest } from 'msw';
import { 
  MultiSearchResults, 
  TVSearchInfo, 
  Error,
  MediaTypes
} from '../../src/app/APIInterfaces';
import { getUrl } from '../../src/routes/routes';
import SearchQueries from '../testQueries';

const movieSearchRes: TVSearchInfo = {
  poster_path: null,
  popularity: 1,
  id: 24511,
  overview: '',
  backdrop_path: null,
  vote_average: 0,
  media_type: MediaTypes.tv,
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
  rest.get(getUrl('search', 'multi').toString(), (req, res, ctx) => {
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
  rest.get(getUrl('movie', 'popular').toString(), (req, res, ctx) => {
    const resp: MultiSearchResults = {
      page: 1,
      results: Array(20).fill(movieSearchRes),
      total_pages: 1,
      total_results: 100
    }
    return res(
      ctx.status(200),
      ctx.json(resp)
    )
  })
];

export default handlers;
