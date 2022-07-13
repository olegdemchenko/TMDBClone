import {
  MovieListItem,
} from '../../app/APIInfo';
import { SortAlg } from '../filter/constants';

interface FilterParams {
  sortAlg?: SortAlg
}

function filter(params: FilterParams, movies: MovieListItem[]) {
  return movies;
}

export default filter;
