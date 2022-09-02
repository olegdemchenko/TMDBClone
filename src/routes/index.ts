export const origin = 'https://api.themoviedb.org/3';
const imagesOrigin = 'https://image.tmdb.org/t/p';

export const searchPathNames = {
  multiSearch: '/search/multi',
};

export const moviesPathNames = {
  popularMovies: '/movie/popular',
  nowPlayingMovies: '/movie/now_playing',
  topRatedMovies: '/movie/top_rated',
  upcomingMovies: '/movie/upcoming',
};

export const tvPathsNames = {
  popularShows: '/tv/popular',
  airingTodayShows: '/tv/airing_today',
  onTVShows: '/tv/on_the_air',
  topRatedShows: '/tv/top_rated',
};

export const peoplePathNames = {
  popularPeople: '/person/popular',
};

type PathsKeys =
  | keyof typeof searchPathNames
  | keyof typeof moviesPathNames
  | keyof typeof peoplePathNames
  | keyof typeof tvPathsNames;

export const pathsSegments = Object.fromEntries(
  [moviesPathNames, tvPathsNames, peoplePathNames, tvPathsNames]
    .map((coll) => Object.entries(coll))
    .flat()
    .map(([key, path]) => [key, path.replace(/^\/[a-z]+\//, '')])
) as {
  [Key in PathsKeys]: string;
};

export const paths = [
  searchPathNames,
  moviesPathNames,
  peoplePathNames,
  tvPathsNames,
]
  .map((pathMap) => Object.entries(pathMap))
  .flat()
  .map(([key, value]) => [key, `${origin}${value}`])
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) as {
  [Key in PathsKeys]: string;
};

export const dynamicPaths = {
  movieDetails: (movieId: number) => `/movie/${movieId}`,
};

export const imagePaths = {
  searchResIcon: `${imagesOrigin}/w92/`,
  gallerySlidePoster: {
    medium: `${imagesOrigin}/w154/`,
    large: `${imagesOrigin}/w300/`,
  },
  peoplePosters: {
    medium: `${imagesOrigin}/w185/`,
  },
  detailsPosters: {
    medium: `${imagesOrigin}/w300/`,
    large: `${imagesOrigin}/original/`,
  },
};

export function convertMediaParamsToPathSegment(id: number, name: string) {
  return `${id}-${name.split(' ').join('-')}`;
}

export function extractIDFromMediaPath(path?: string) {
  return path?.match(/^([0-9]+)-/)?.[1] ?? 0;
}

export const detailsPaths = {
  movie: (id: number, title: string) =>
    `/movie/${convertMediaParamsToPathSegment(id, title)}`,
  tv: (id: number, title: string) =>
    `/tv/${convertMediaParamsToPathSegment(id, title)}`,
  people: (id: number, name: string) =>
    `/person/${convertMediaParamsToPathSegment(id, name)}`,
};
