import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { peopleApi } from '../../../../app/store/api';
import { RootState } from '../../../../app/store/store';
import { useRetrieveIdFromLocation } from '../../../../common/hooks';
import Logo from '../../../../components/Logo';
import { imagePaths } from '../../../../routes';
import PersonalInfo from '../PersonalInfo';
import Works from '../Works';

function About() {
  const { t } = useTranslation('details');
  const personId = useRetrieveIdFromLocation();
  const { data: personDetails } = useSelector((state: RootState) =>
    peopleApi.endpoints.getPersonDetails.select(personId)(state)
  );
  if (!personDetails) {
    return null;
  }
  const asideContentWidth = 300;
  return (
    <div className='d-flex'>
      <div className='flex-shrink-0' css={css({ width: asideContentWidth })}>
        <div css={css({ height: 450 })}>
          <Logo
            type='person'
            path={imagePaths.peoplePosters.detailsPhoto}
            imgName={personDetails.profile_path}
            borderRadius='all'
          />
        </div>
        <PersonalInfo />
      </div>
      <div
        className='px-4'
        css={css({ width: `calc(100% - ${asideContentWidth}px)` })}
      >
        <h3 className='m-0 fw-bold'>{personDetails.name ?? t('noName')}</h3>
        <h5 className='pt-5 pb-2 fw-bold'>{t('biography')}</h5>
        <p className='m-0'>{personDetails.biography ?? t('noBiography')}</p>
        <Works />
      </div>
    </div>
  );
}

export default About;
