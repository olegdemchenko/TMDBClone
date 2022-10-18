import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../app/store/store';
import { useRetrieveIdFromLocation } from '../../../../../../common/hooks';
import { peopleApi } from '../../../../../../app/store/api';
import { PlayedAt, WorkedAt } from '../../../../../../app/TMDBAPIInterfaces';
import { extractYearFromDate } from '../../../../../../common/utils';
import { getReleaseDate } from './utils';
import JobsList from './components/JobsList';

function groupWorksByYears(works: (PlayedAt | WorkedAt)[]) {
  return _.groupBy(works, (work: PlayedAt | WorkedAt) => {
    const releaseDate = getReleaseDate(work);
    return releaseDate ? extractYearFromDate(releaseDate) : '-';
  });
}

function Jobs() {
  const { t } = useTranslation('details');
  const personId = useRetrieveIdFromLocation();
  const { data: allWorks } = useSelector((state: RootState) =>
    peopleApi.endpoints.getPersonCombinedCredits.select(personId)(state)
  );

  if (!allWorks) {
    return null;
  }
  const roles = groupWorksByYears(allWorks.cast ?? []);
  const departments: Exclude<WorkedAt['department'], undefined>[] = [
    'Sound',
    'Production',
    'Crew',
    'Lightning',
    'Creator',
    'Writing',
    'Directing',
  ];
  const crewWorksByDepartments = departments.reduce((acc, currDepartment) => {
    const worksByCurrDepartment =
      allWorks.crew?.filter(
        ({ department }) => department === currDepartment
      ) ?? [];
    return worksByCurrDepartment.length > 0
      ? [...acc, [currDepartment, worksByCurrDepartment] as const]
      : acc;
  }, []);

  const worksByDepartmentsGroupedByYears = crewWorksByDepartments.map(
    ([departmentName, departmentWorks]) =>
      [departmentName, groupWorksByYears(departmentWorks)] as const
  );

  return (
    <div>
      <h5 className='pt-4 pb-2 m-0 fw-bold'>{t('acting')}</h5>
      <JobsList jobs={Object.entries(roles).reverse()} typeOfWork='cast' />
      {worksByDepartmentsGroupedByYears.map(([department, works]) => (
        <React.Fragment key={_.uniqueId()}>
          <h5 className='pt-4 pb-2 m-0 fw-bold'>
            {t(department.toLowerCase())}
          </h5>
          <JobsList jobs={Object.entries(works).reverse()} typeOfWork='crew' />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Jobs;
