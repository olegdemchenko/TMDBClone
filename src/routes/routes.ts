const origin = 'https://api.themoviedb.org/3';

export const searchPathNames = {
  multiSearch: '/search/multi',
};

export const moviesPathNames = {
  popularMovies: '/movie/popular',
  nowPlayingMovies: '/movie/now_playing',
  topRatedMovies: '/movie/top_rated',
  upcomingMovies: '/movie/upcoming',
};

type PathsKeys = keyof typeof searchPathNames | keyof typeof moviesPathNames;

export const paths = [searchPathNames, moviesPathNames]
  .map((pathMap) => Object.entries(pathMap))
  .flat()
  .map(([key, value]) => [key, `${origin}${value}`])
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) as {
  [Key in PathsKeys]: string;
};

export const imagePaths = {
  searchResIcon: 'https://image.tmdb.org/t/p/w92/',
  gallerySlidePoster: {
    medium: 'https://image.tmdb.org/t/p/w154/',
    large: 'https://image.tmdb.org/t/p/w300/',
  },
};
