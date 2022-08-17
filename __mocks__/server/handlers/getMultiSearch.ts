import { rest } from 'msw';
import {
  MultiSearchResults,
  MediaTypes,
  MovieListItemMedia,
} from '../../../src/app/TMDBAPIInterfaces';
import { error } from './commonData';
import { paths } from '../../../src/routes/routes';

export const movieListResult: MovieListItemMedia = {
  poster_path: '/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg',
  adult: false,
  overview:
    'Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.',
  release_date: '2014-10-10',
  genre_ids: [18, 10402],
  id: 244786,
  media_type: MediaTypes.movie,
  original_language: 'en',
  title: 'Whiplash',
  backdrop_path: '/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg',
  popularity: 10.776056,
  vote_count: 2059,
  video: false,
  vote_average: 8.29,
};

const moviesPerPage = 20;
const multiSearchRes: MultiSearchResults = {
  page: 1,
  total_pages: 1000,
  total_results: 1000,
  results: [
    ...Array.from({ length: moviesPerPage }, () => ({
      ...movieListResult,
      id: Math.random(),
    })),
  ],
};

export enum SearchQueries {
  MultiSearch = 'multi-search',
  MultiSearchError = 'multi-search-error',
}

export default rest.get(paths.multiSearch, (req, res, ctx) => {
  const searchQuery = req.url.searchParams.get('query');
  const page = req.url.searchParams.get('page');
  if (searchQuery === SearchQueries.MultiSearch) {
    return res(ctx.status(200), ctx.json({ ...multiSearchRes, page }));
  }
  return res(ctx.status(404), ctx.json(error));
});
