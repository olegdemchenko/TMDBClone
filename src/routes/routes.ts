const origin = 'https://api.themoviedb.org';
const version = '3';
const APIKey = '93e4398b13ae3ceac59da26477413183';

type RouteFunc = (...params: (string | number | null)[]) => URL;

export const getUrl = (...path: string[]) => new URL([origin, version, ...path].join('/'));

const routes = {
  getMultiSearch: (query:string | null, page: number) => {
    const url = getUrl('search', 'multi');
    if (query) {
      url.searchParams.append('query', query);
    }
    url.searchParams.append('page', String(page));
    return url;
  },
};

function addKey(routesFunc: RouteFunc) {
  return (...params: (string | null)[]) => {
    const url = routesFunc(...params);
    url.searchParams.set('api_key', APIKey);
    return url.toString();
  };
}

const ApiKeyRoutes = Object.fromEntries(
  Object.entries(routes).map(([funcName, funcBody]) => ([funcName, addKey(funcBody)])),
);

export default ApiKeyRoutes;
