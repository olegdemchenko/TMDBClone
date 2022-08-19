import { MovieListItemMedia, TVListItemMedia } from './search';

export interface People {
  profile_path: string;
  adult: boolean;
  id: number;
  known_for: (MovieListItemMedia | TVListItemMedia)[];
  name: string;
  popularity: number;
}
