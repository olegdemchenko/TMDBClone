import { MovieListItem } from './movie';

export enum MediaTypes {
  movie = 'movie',
  tv = 'tv',
  person = 'person',
}

export interface MovieListItemMedia extends MovieListItem {
  media_type: MediaTypes.movie;
}

export interface TVListItemMedia {
  poster_path?: string | null;
  popularity?: number;
  id?: number;
  overview?: string;
  backdrop_path?: string | null;
  media_type: MediaTypes.tv;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_average?: number;
  vote_count: number;
  name?: string;
  original_name?: string;
}

export interface PersonListItemMedia {
  profile_path: string | null;
  adult: boolean;
  id: number;
  media_type: MediaTypes.person;
  known_for: (TVListItemMedia | MovieListItemMedia)[];
  name: string;
}

export interface MultiSearchResults {
  page: number;
  total_pages: number;
  total_results: number;
  results: (MovieListItemMedia | TVListItemMedia | PersonListItemMedia)[];
}
