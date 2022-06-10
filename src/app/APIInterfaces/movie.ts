export interface MovieListResults {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  original_date?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface MovieList {
  page: number;
  total_pages: number;
  total_results: number;
  results: (MovieListResults)[]
}
