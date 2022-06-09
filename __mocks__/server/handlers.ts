import { rest } from 'msw';
import { 
  MultiSearchResults, 
  TVListResultsMedia, 
  Error,
  MediaTypes,
  MovieListResultsMedia
} from '../../src/app/APIInterfaces';
import { paths } from '../../src/routes/routes';
import SearchQueries from './testQueries';

const movieSearchRes: TVListResultsMedia = {
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

export const movieListResult: MovieListResultsMedia = {
  poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
  adult: false,
  overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
  release_date: "2014-10-10",
  genre_ids: [
    18,
    10402
  ],
  id: 244786,
  media_type: MediaTypes.movie,
  original_language: "en",
  title: "Whiplash",
  backdrop_path: "/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
  popularity: 10.776056,
  vote_count: 2059,
  video: false,
  vote_average: 8.29
}

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
  rest.get(paths.multiSearch, (req, res, ctx) => {
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
  rest.get(paths.popularMovies, (req, res, ctx) => {
    const resp: MultiSearchResults = {
      page: 1,
      results: Array(20).fill(movieListResult).map((movie) => ({ ...movie, id: Math.random() })),
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
