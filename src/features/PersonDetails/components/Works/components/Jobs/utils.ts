import { PlayedAt, WorkedAt } from '../../../../../../app/TMDBAPIInterfaces';

export function isJobMovie(job: PlayedAt | WorkedAt) {
  return job.media_type === 'movie';
}

export function getReleaseDate(job: PlayedAt | WorkedAt) {
  const workAppearanceDate = isJobMovie(job)
    ? 'release_date'
    : 'first_air_date';
  return job[workAppearanceDate]
    ? new Date(job[workAppearanceDate] as string)
    : null;
}
