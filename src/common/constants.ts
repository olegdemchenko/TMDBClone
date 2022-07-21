export const moviesPaths = {
  popular: '',
  'now playing': 'now-playing',
  'top rated': 'top-rated',
  upcoming: 'upcoming',
} as const;

export const tvShowsPaths = {
  popular: '',
  'airing today': 'airing-today',
  'on tv': 'on-tv',
  'top rated': 'top-rated',
} as const;

export const peoplePaths = {
  'popular people': 'popular',
} as const;

export const dropdownPaths = {
  movies: {
    popular: `/movie/${moviesPaths.popular}`,
    'now playing': `/movie/${moviesPaths['now playing']}`,
    'top rated': `/movie/${moviesPaths['top rated']}`,
    upcoming: `/movie/${moviesPaths.upcoming}`,
  },
  'tv shows': {
    popular: `/tv/${tvShowsPaths.popular}`,
    'airing today': `/tv/${tvShowsPaths['airing today']}`,
    'on tv': `/tv/${tvShowsPaths['on tv']}`,
    'top rated': `/tv/${tvShowsPaths['top rated']}`,
  },
  people: {
    'popular people': `/people/${peoplePaths['popular people']}`,
  },
} as const;
