export interface MovieListItem {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface MovieListResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieListItem[];
}

type MovieStatus =
  | 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled';

interface MovieGenre {
  id: number;
  name: string;
}

export interface ProductionCompanies {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  iso_639_1: string;
  name: string;
}

export interface MovieDetails {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: {} | null;
  budget?: number;
  genres?: MovieGenre[];
  homepage?: string | null;
  id: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: ProductionCompanies[];
  production_countries?: ProductionCountries[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguages[];
  status?: MovieStatus;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface VideosResults {
  id: number;
  results: VideoDetails[];
}

export interface VideoDetails {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official: boolean;
  published_at?: string;
  id?: string;
}

export interface BackdropDetails {
  aspect_ratio?: number;
  file_path?: string;
  height?: number;
  iso_639_1?: null | string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface PosterDetails {
  aspect_ratio?: number;
  file_path?: string;
  height?: number;
  iso_639_1?: null | string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface ImagesResults {
  id: number;
  backdrops: BackdropDetails[];
  posters: PosterDetails[];
}
