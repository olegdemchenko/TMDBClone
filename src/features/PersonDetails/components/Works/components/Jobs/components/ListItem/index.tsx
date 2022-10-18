import { css } from '@emotion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeColors } from '../../../../../../../../common/styles';
import { defaultYearStyles, emptyYearStyles, circleStyles } from './styles';

type ListItemProps = {
  typeOfWork: 'cast' | 'crew';
  year: string | null;
  workName?: string;
  episodesCount?: number | null;
  position?: string;
};

function ListItem({
  typeOfWork,
  workName,
  episodesCount,
  position,
  year,
}: ListItemProps) {
  const { t } = useTranslation('details');
  return (
    <p className='m-0 pb-3 d-flex'>
      <span className='flex-shrink-0'>
        <span css={css([defaultYearStyles, year ? {} : emptyYearStyles])}>
          {year}
        </span>
        <span className='fw-bold' css={circleStyles}>
          ⚪
        </span>
      </span>
      <span className='flex-shrink-1 ps-4 pe-2'>
        <span className='d-inline-block fw-bold'>{workName}</span>
        {episodesCount && (
          <span className='fw-lighter'>{` (${episodesCount} ${t('episode', {
            count: episodesCount,
          })}) `}</span>
        )}
        {position && (
          <>
            <span css={css({ color: ThemeColors.gray })}>
              {typeOfWork === 'cast' ? ' as ' : ' ... '}
            </span>
            <span>{position}</span>
          </>
        )}
      </span>
    </p>
  );
}

export default ListItem;
