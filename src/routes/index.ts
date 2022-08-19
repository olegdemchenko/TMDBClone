const origin = 'https://api.themoviedb.org/3';
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
  | keyof typeof peoplePathNames;

export const paths = [searchPathNames, moviesPathNames, peoplePathNames]
  .map((pathMap) => Object.entries(pathMap))
  .flat()
  .map(([key, value]) => [key, `${origin}${value}`])
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) as {
  [Key in PathsKeys]: string;
};

export const imagePaths = {
  searchResIcon: `${imagesOrigin}/w92/`,
  gallerySlidePoster: {
    medium: `${imagesOrigin}/w154/`,
    large: `${imagesOrigin}/w300/`,
  },
};
