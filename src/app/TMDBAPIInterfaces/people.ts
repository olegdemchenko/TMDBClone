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

export interface PersonDetails {
  birthday?: string | null;
  known_for_department?: string;
  deathday?: string | null;
  id: number;
  name?: string;
  also_known_as?: string[];
  gender: 1 | 2;
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  profile_path?: string | null;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string | null;
}

export interface PlayedAt {
  id: number;
  original_language?: string;
  episode_count?: number;
  overview?: string;
  origin_country?: string[];
  original_name?: string;
  genre_ids?: number[];
  name?: string;
  media_type?: 'movie' | 'tv';
  poster_path?: string | null;
  first_air_date?: string;
  vote_average?: number;
  vote_count?: number;
  character?: string;
  backdrop_path?: string | null;
  popularity?: number;
  credit_id?: string;
  original_title?: string;
  video?: boolean;
  release_date?: string;
  title?: string;
  adult?: boolean;
}

type JobInfo = {
  department?:
    | 'Crew'
    | 'Sound'
    | 'Production'
    | 'Directing'
    | 'Lightning'
    | 'Writing'
    | 'Creator';
  job?: string;
};

export type WorkedAt = Omit<PlayedAt, 'character'> & JobInfo;

export interface CombinedCreditsRes {
  id: number;
  cast?: PlayedAt[];
  crew?: WorkedAt[];
}
