import React from 'react';
import _ from 'lodash';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../../../app/store/store';
import { useRetrieveIdFromLocation } from '../../../../../../common/hooks';
import { peopleApi } from '../../../../../../app/store/api';
import ShadowWrapper from '../../../../../../components/ShadowWrapper';
import MovieItem from './components/MovieItem';
import { detailsPaths } from '../../../../../../routes';

const sliderStyles = css({
  display: 'flex',
  columnGap: 20,
  flexWrap: 'nowrap',
  overflow: 'auto',
});

function KnownFor() {
  const { t } = useTranslation('details');
  const personId = useRetrieveIdFromLocation();
  const { data: worksDetails } = useSelector((state: RootState) =>
    peopleApi.endpoints.getPersonCombinedCredits.select(personId)(state)
  );

  if (!worksDetails) {
    return null;
  }

  const popularWorksToBePresented = 8;
  const mostPopularWorks = _.uniqBy(worksDetails.cast ?? [], 'id')
    .sort((a, b) => {
      const leftMoviePopularity = a.popularity ?? 0;
      const rightMoviePopularity = b.popularity ?? 0;
      return rightMoviePopularity - leftMoviePopularity;
    })
    .slice(0, popularWorksToBePresented);
  return (
    <div className='pt-4'>
      <h5 className='m-0 pt-4 fw-bold'>{t('knownFor')}</h5>
      <ShadowWrapper>
        <div className='pt-3' css={sliderStyles}>
          {mostPopularWorks.map(
            ({
              id,
              poster_path,
              original_title = '',
              name = '',
              media_type,
            }) => (
              <Link
                key={_.uniqueId()}
                to={
                  media_type === 'movie'
                    ? detailsPaths.movie(id, original_title)
                    : detailsPaths.tv(id, name)
                }
              >
                <MovieItem
                  posterSrc={poster_path}
                  name={media_type === 'movie' ? original_title : name}
                />
              </Link>
            )
          )}
        </div>
      </ShadowWrapper>
    </div>
  );
}

export default KnownFor;
