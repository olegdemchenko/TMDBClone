import { MovieListResultsMedia } from './search';

export interface MovieList {
  page: number;
  total_pages: number;
  total_results: number;
  results: (MovieListResultsMedia)[]
}
