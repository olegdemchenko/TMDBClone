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

function setSearchParam(url: URL, name: string, value: string) {
  url.searchParams.set(name, value);
  return url;
}

function addKey(routesFunc: RouteFunc) {
  return (...params: (string | number | null)[]) => (
    setSearchParam(routesFunc(...params), 'api_key', APIKey).toString()
  );
}

const routes: Routes = {
  getMultiSearch: (query:string, page:number) => (
    setSearchParam(setSearchParam(new URL(paths.multiSearch), 'query', query), 'page', String(page))
  ),
  getPopularMovies: (page: number) => setSearchParam(new URL(paths.popularMovies), 'page', String(page)),
};

const ApiKeyRoutes = Object.fromEntries(
  Object.entries(routes).map(([funcName, funcBody]) => ([funcName, addKey(funcBody)])),
);

export default ApiKeyRoutes;
