export const origin = 'https://api.themoviedb.org/3';
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
  | keyof typeof peoplePathNames
  | keyof typeof tvPathsNames;

export const pathsSegments = Object.fromEntries(
  [moviesPathNames, tvPathsNames, peoplePathNames, tvPathsNames]
    .map((coll) => Object.entries(coll))
    .flat()
    .map(([key, path]) => [key, path.replace(/^\/[a-z]+\//, '')])
) as {
  [Key in PathsKeys]: string;
};

export const paths = [
  searchPathNames,
  moviesPathNames,
  peoplePathNames,
  tvPathsNames,
]
  .map((pathMap) => Object.entries(pathMap))
  .flat()
  .map(([key, value]) => [key, `${origin}${value}`])
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}) as {
  [Key in PathsKeys]: string;
};

export const dynamicPaths = {
  movieDetails: (movieId: number) => `/movie/${movieId}`,
  movieVideos: (movieId: number) => `/movie/${movieId}/videos`,
  movieImages: (movieId: number) => `/movie/${movieId}/images`,
  movieCredits: (movieId: number) => `/movie/${movieId}/credits`,
  movieRecommendations: (movieId: number) =>
    `/movie/${movieId}/recommendations`,
  movieKeywords: (movieId: number) => `/movie/${movieId}/keywords`,
  youtubeEmbeddedVideo: (videoKey: string) =>
    `https://www.youtube.com/embed/${videoKey}`,
  tvDetails: (tvId: number) => `/tv/${tvId}`,
  tvCredits: (tvId: number) => `/tv/${tvId}/credits`,
  tvVideos: (tvId: number) => `/tv/${tvId}/videos`,
  tvImages: (tvId: number) => `/tv/${tvId}/images`,
  tvRecommendations: (tvId: number) => `/tv/${tvId}/recommendations`,
  tvKeywords: (tvId: number) => `/tv/${tvId}/keywords`,
  personDetails: (personId: number) => `/person/${personId}`,
  personCombinedCredits: (personId: number) =>
    `/person/${personId}/combined_credits`,
};

export const imagePaths = {
  searchResIcon: `${imagesOrigin}/w92/`,
  moviePosters: {
    mainPagePreview: `${imagesOrigin}/w154/`,
    filterPreview: `${imagesOrigin}/w300/`,
    detailsBackground: `${imagesOrigin}/original/`,
    detailsDescription: `${imagesOrigin}/w300/`,
    detailsBackdrops: `${imagesOrigin}/w780/`,
    detailsPosters: `${imagesOrigin}/w300/`,
    recommendations: `${imagesOrigin}/w500/`,
    cast: `${imagesOrigin}/w300/`,
  },
  tvPosters: {
    seasonLogo: `${imagesOrigin}/w154/`,
    networkLogo: `${imagesOrigin}/w45/`,
  },
  peoplePosters: {
    galleryPreview: `${imagesOrigin}/w185/`,
    detailsPhoto: `${imagesOrigin}/w300/`,
    playedAt: `${imagesOrigin}/w185/`,
  },
  youtubeThumbnails: {
    getLinkToMq: (key: string) =>
      `https://img.youtube.com/vi/${key}/hqdefault.jpg`,
  },
};

export function convertMediaParamsToPathSegment(id: number, name: string) {
  return `${id}-${name.split(' ').join('-')}`;
}

export function extractIDFromMediaPath(path?: string) {
  return path?.match(/^([0-9]+)-/)?.[1] ?? 0;
}

export const detailsPaths = {
  movie: (id: number, title: string) =>
    `/movie/${convertMediaParamsToPathSegment(id, title)}`,
  tv: (id: number, title: string) =>
    `/tv/${convertMediaParamsToPathSegment(id, title)}`,
  people: (id: number, name: string) =>
    `/person/${convertMediaParamsToPathSegment(id, name)}`,
};
