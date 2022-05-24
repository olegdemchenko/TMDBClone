const origin = 'https://api.themoviedb.org';
const version = '3';

const routes = {
  getMultiSearch: (query:string) => {
    const url = new URL([origin, version, 'search', 'multi'].join('/'));
    url.searchParams.append('query', query);
    return url;
  },
};

export default routes;
