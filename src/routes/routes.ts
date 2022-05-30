const origin = 'https://api.themoviedb.org';
const version = '3';
const APIKey = '93e4398b13ae3ceac59da26477413183';

type RouteFunc = (...params: (string | null)[]) => URL;

const routes = {
  getMultiSearch: (query:string | null) => {
    const url = new URL([origin, version, 'search', 'multi'].join('/'));
    if (query) {
      url.searchParams.append('query', query);
    }
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
