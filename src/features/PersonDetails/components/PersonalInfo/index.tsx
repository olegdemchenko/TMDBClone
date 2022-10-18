import React from 'react';
import { css } from '@emotion/react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { peopleApi } from '../../../../app/store/api';
import { RootState } from '../../../../app/store/store';
import { useRetrieveIdFromLocation } from '../../../../common/hooks';
import { PersonDetails } from '../../../../app/TMDBAPIInterfaces';

const normalizeStyles = css({
  '& h5, & h6, & p': {
    margin: 0,
  },
});

function PersonalInfo() {
  const { t } = useTranslation('details');
  const personId = useRetrieveIdFromLocation();
  const { data: personDetails } = useSelector((state: RootState) =>
    peopleApi.endpoints.getPersonDetails.select(personId)(state)
  );

  if (!personDetails) {
    return null;
  }

  const genders = {
    1: 'male',
    2: 'female',
  } as {
    [Key in PersonDetails['gender']]: string;
  };
  return (
    <div className='m-0 pt-4' css={normalizeStyles}>
      <h5 className='fw-bold'>{t('personalInfo')}</h5>
      <h6 className='pt-2 fw-bold'>{t('knownFor')}</h6>
      <p className=''>{personDetails.known_for_department ?? '-'}</p>
      <h6 className='pt-3 fw-bold'>{t('gender')}</h6>
      <p className=''>
        {personDetails.gender
          ? t(`genders.${genders[personDetails.gender]}`)
          : '-'}
      </p>
      <h6 className='pt-3 fw-bold'>{t('birthday')}</h6>
      <p className=''>{personDetails.birthday ?? '-'}</p>
      {personDetails.deathday && (
        <>
          <h6>{t('deathday')}</h6>
          <p>{personDetails.deathday}</p>
        </>
      )}
      <h6 className='pt-3 fw-bold'>{t('placeOfBirth')}</h6>
      <p>{personDetails.place_of_birth ?? '-'}</p>
      <h6 className='pt-3 fw-bold'>{t('knownAs')}</h6>
      <div>
        {personDetails.also_known_as?.map((name) => (
          <p key={_.uniqueId()}>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default PersonalInfo;
