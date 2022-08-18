const origin = 'https://api.themoviedb.org/3';

export const pathNames = {
  multiSearch: '/search/multi',
  popularMovies: '/movie/popular',
  nowPlayingMovies: '/movie/now_playing',
  topRatedMovies: '/movie/top_rated',
  upcomingMovies: '/movie/upcoming',
};

export const paths = Object.entries(pathNames)
  .map(([key, value]) => [key, `${origin}${value}`])
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) as {
  [Key in keyof typeof pathNames]: string;
};

export const imagePaths = {
  searchResIcon: 'https://image.tmdb.org/t/p/w92/',
  gallerySlidePoster: {
    medium: 'https://image.tmdb.org/t/p/w154/',
    large: 'https://image.tmdb.org/t/p/w300/',
  },
};
