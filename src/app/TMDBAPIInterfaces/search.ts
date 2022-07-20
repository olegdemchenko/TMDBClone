import { MovieListItem } from './movie';
import { TVListItem } from './tv';

export enum MediaTypes {
  movie = 'movie',
  tv = 'tv',
  person = 'person',
}

export interface MovieListItemMedia extends MovieListItem {
  media_type: MediaTypes.movie;
}

export interface TVListItemMedia extends TVListItem {
  media_type: MediaTypes.tv;
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
