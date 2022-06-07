const origin = 'https://api.themoviedb.org';
const version = '3';
const APIKey = '93e4398b13ae3ceac59da26477413183';

type RouteFunc = (...params: (string | number | null)[]) => URL;

type Getters = 'multiSearch';

type Routes<Keys extends string, PathFunc> = {
  [Key in Keys as `get${Capitalize<Key>}`]: PathFunc
};

export const getUrl = (...path: string[]) => new URL([origin, version, ...path].join('/'));

const routes: Routes<Getters, RouteFunc> = {
  getMultiSearch: (query, page) => {
    const url = getUrl('search', 'multi');
    if (query) {
      url.searchParams.append('query', query as string);
    }
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
