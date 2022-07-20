export enum SortAlg {
  popularityDesc = 'popularityDesc',
  popularityAsc = 'popularityAsc',
  ratingDesc = 'ratingDesc',
  ratingAsc = 'ratingAsc',
  releaseDateDesc = 'releaseDateDesc',
  releaseDateAsc = 'releaseDateAsc',
  titleAZ = 'titleAZ',
  titleZA = 'titleZA',
}

export const languages = {
  english: 'en',
  german: 'de',
  french: 'fr',
  spanish: 'es',
  japanese: 'ja',
  portuguese: 'pt',
  italian: 'it',
  russian: 'ru',
  chinese: 'zh',
  none: '',
};

export enum UserVotes {
  min = 0,
  max = 500,
}

export enum UserScore {
  min = 0,
  max = 10,
}

export const genres = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  scienceFiction: 878,
  tvMovie: 10770,
  thriller: 53,
  war: 10752,
  western: 37,
};
