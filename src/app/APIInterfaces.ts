export enum MediaTypes {
  movie = 'movie',
  tv = 'tv',
  person = 'person',
}

export interface MovieSearchInfo {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  original_date?: string;
  genre_ids?: number[];
  id: number;
  media_type: MediaTypes.movie;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface TVSearchInfo {
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

export interface PersonSearchInfo {
  profile_path: string | null;
  adult: boolean;
  id: number;
  media_type: MediaTypes.person;
  known_for: (TVSearchInfo | MovieSearchInfo)[];
  name: string;
}

export interface Error {
  status_code: number;
  status_message: string;
}

export interface MultiSearchResults {
  page: number;
  total_pages: number;
  total_results: number;
  results: (MovieSearchInfo | TVSearchInfo | PersonSearchInfo)[];
}
