const origin = 'https://api.themoviedb.org/3';
const APIKey = '93e4398b13ae3ceac59da26477413183';

type RouteFunc = (...params: (string | number | null)[]) => URL;

type Routes = {
  [Key in keyof typeof paths as `get${Capitalize<Key>}`]: RouteFunc
};

export const paths = {
  multiSearch: `${origin}/search/multi`,
  popularMovies: `${origin}/movie/popular`,
};

const routes: Routes = {
  getMultiSearch: (query, page) => {
    const url = new URL(paths.multiSearch);
    if (query) {
      url.searchParams.append('query', query as string);
    }
    url.searchParams.append('page', String(page));
    return url;
  },
  getPopularMovies: (page) => {
    const url = new URL(paths.popularMovies);
    url.searchParams.append('page', String(page));
    return url;
  },
};

function addKey(routesFunc: RouteFunc) {
  return (...params: (string | number | null)[]) => {
    const url = routesFunc(...params);
    url.searchParams.set('api_key', APIKey);
    return url.toString();
  };
}

const ApiKeyRoutes = Object.fromEntries(
  Object.entries(routes).map(([funcName, funcBody]) => ([funcName, addKey(funcBody)])),
);

export default ApiKeyRoutes;
