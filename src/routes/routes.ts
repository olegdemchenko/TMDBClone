const origin = 'https://api.themoviedb.org/3';

export const paths = {
  multiSearch: `${origin}/search/multi`,
  popularMovies: `${origin}/movie/popular`,
  nowPlayingMovies: `${origin}/movie/now_playing`,
  topRatedMovies: `${origin}/movie/top_rated`,
  upcomingMovies: `${origin}/movie/upcoming`,
};

export const imagePaths = {
  searchResIcon: 'https://image.tmdb.org/t/p/w92/',
  gallerySlidePoster: {
    medium: 'https://image.tmdb.org/t/p/w154/',
    large: 'https://image.tmdb.org/t/p/w300/',
  },
};

type Routes = {
  [Key in keyof typeof paths as `get${Capitalize<Key>}`]: RouteFunc;
};

type RouteFunc = (...params: (string | number | null)[]) => URL;

function setSearchParam(url: URL, name: string, value: string) {
  url.searchParams.set(name, value);
  return url;
}

const routes: Routes = {
  getMultiSearch: (query: string, page: number) =>
    setSearchParam(
      setSearchParam(new URL(paths.multiSearch), 'query', query),
      'page',
      String(page)
    ),
  getPopularMovies: (page: number) =>
    setSearchParam(new URL(paths.popularMovies), 'page', String(page)),
  getNowPlayingMovies: (page: number) =>
    setSearchParam(new URL(paths.nowPlayingMovies), 'page', String(page)),
  getTopRatedMovies: (page: number) =>
    setSearchParam(new URL(paths.topRatedMovies), 'page', String(page)),
  getUpcomingMovies: (page: number) =>
    setSearchParam(new URL(paths.upcomingMovies), 'page', String(page)),
};

export default routes;
