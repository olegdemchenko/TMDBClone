import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { TVApi } from '../../../../../../app/store/api';
import { RootState } from '../../../../../../app/store/store';
import { useRetrieveIdFromLocation } from '../../../../../../common/hooks';
import { BorderRadiuses, ThemeColors } from '../../../../../../common/styles';
import Logo from '../../../../../Logo';
import { imagePaths } from '../../../../../../routes';

const containerStyles = css({
  border: `2px solid ${ThemeColors.lightGray}`,
  borderRadius: BorderRadiuses.medium,
});

const logoSiseStyles = css({
  width: 154,
  height: 230,
});

function extractYearFromDate(date: string) {
  return new Date(date).getFullYear();
}

function extractDayFromDate(date: string) {
  return new Date(date).getDate();
}

function extractMonthFromDate(date: string) {
  return new Date(date).getMonth();
}

function Season() {
  const tvShowId = useRetrieveIdFromLocation();
  const { data: tvShowDetails } = useSelector((state: RootState) =>
    TVApi.endpoints.getTVDetails.select(tvShowId)(state)
  );
  if (!tvShowDetails) {
    return null;
  }
  const { status, seasons } = tvShowDetails;
  const lastSeason = [...seasons].sort(
    (a, b) => b.season_number - a.season_number
  )[0];
  const { t } = useTranslation('details');
  return (
    <div className='py-4'>
      <h4 className='pb-4 m-0'>
        {status === 'ended' ? t('lastSeason') : t('currentSeason')}
      </h4>
      <div className='d-flex' css={containerStyles}>
        <div className='flex-shrink-0' css={logoSiseStyles}>
          <Logo
            type='media'
            path={imagePaths.tvPosters.seasonLogo}
            imgName={lastSeason.poster_path}
            borderRadius='left'
          />
        </div>
        <div className='px-3 py-4 d-flex flex-column justify-content-center'>
          <h4 className='m-0'>{lastSeason.name}</h4>
          <p className='fw-bold mb-4'>
            {extractYearFromDate(lastSeason.air_date)} |{' '}
            {lastSeason.episode_count} {t('episodes')}
          </p>
          <p className='m-0'>
            {lastSeason.overview
              ? lastSeason.overview
              : t('seasonDefaultOverview', {
                  seasonNumber: lastSeason.season_number,
                  showName: tvShowDetails.name,
                  day: extractDayFromDate(lastSeason.air_date),
                  month: t(
                    `months.${extractMonthFromDate(lastSeason.air_date)}`
                  ),
                  year: extractYearFromDate(lastSeason.air_date),
                })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Season;
