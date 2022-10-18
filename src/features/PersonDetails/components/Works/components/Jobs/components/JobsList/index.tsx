import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  PlayedAt,
  WorkedAt,
} from '../../../../../../../../app/TMDBAPIInterfaces';
import ListItem from '../ListItem';
import { getReleaseDate, isJobMovie } from '../../utils';
import { detailsPaths } from '../../../../../../../../routes';
import { listItemStyles, listStyles } from './styles';

interface JobsListProps {
  jobs: [string, (PlayedAt | WorkedAt)[]][];
  typeOfWork: 'cast' | 'crew';
}

function sortWorksByReleaseDate(works: (PlayedAt | WorkedAt)[]) {
  return _.sortBy(
    works,
    (work: PlayedAt | WorkedAt) => getReleaseDate(work) ?? Infinity
  ).reverse();
}

function isCastRole(work: PlayedAt | WorkedAt): work is PlayedAt {
  return (work as PlayedAt).character !== undefined;
}

function JobsList({ jobs, typeOfWork }: JobsListProps) {
  return (
    <ul css={listStyles}>
      {jobs.map(([year, group]) => (
        <li className='pt-3' key={_.uniqueId()} css={listItemStyles}>
          {sortWorksByReleaseDate(group).map((job) => {
            const nameOfJob = isJobMovie(job) ? job.original_title : job.name;
            const episodesCount = !isJobMovie(job) ? job.episode_count : null;
            const position = isCastRole(job) ? job.character : job.job;
            return (
              <Link
                key={_.uniqueId()}
                to={
                  isJobMovie(job)
                    ? detailsPaths.movie(job.id, job.original_title ?? '')
                    : detailsPaths.tv(job.id, job.name ?? '')
                }
              >
                <ListItem
                  typeOfWork={typeOfWork}
                  workName={nameOfJob}
                  episodesCount={episodesCount}
                  year={year === '-' ? null : year}
                  position={position}
                />
              </Link>
            );
          })}
        </li>
      ))}
    </ul>
  );
}

export default JobsList;
