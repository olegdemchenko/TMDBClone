import { MovieListItemMedia, TVListItemMedia } from './search';

export interface PopularPerson {
  profile_path?: string;
  adult?: boolean;
  id: number;
  known_for?: (MovieListItemMedia | TVListItemMedia)[];
  name?: string;
  popularity?: number;
}

export interface PopularPeopleResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: PopularPerson[];
}
