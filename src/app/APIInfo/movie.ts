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
  results: (MovieListItem)[]
}
