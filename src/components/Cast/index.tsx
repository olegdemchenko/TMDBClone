import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Actor } from '../../app/TMDBAPIInterfaces';
import {
  useGetTVCreditsQuery,
  useGetMovieCreditsQuery,
} from '../../app/store/api';
import GrowingSpinner from '../GrowingSpinner';
import Character from './components/Character';
import ShadowWrapper from '../ShadowWrapper';
import Slider from '../../features/MovieDetails/components/Slider';
import { useRetrieveIdFromLocation } from '../../common/hooks';
import { isDataDefined } from '../../common/utils';
import { detailsPaths } from '../../routes';

interface CastProps {
  mediaType: 'tv' | 'movie';
}

function Cast({ mediaType }: CastProps) {
  const entityId = useRetrieveIdFromLocation();
  const queries = {
    movie: useGetMovieCreditsQuery,
    tv: useGetTVCreditsQuery,
  };
  const { data, isLoading, isError, error } = queries[mediaType](entityId);

  const { t } = useTranslation('details');
  if (isLoading) {
    return (
      <div>
        <GrowingSpinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </div>
    );
  }
  isDataDefined(data);
  const cast = data.cast ?? [];
  return (
    <div className='pb-4'>
      <h4 className='m-0'>{t('cast')}</h4>
      {cast.length > 0 ? (
        <ShadowWrapper>
          <Slider>
            {(data?.cast as Actor[]).map(
              ({ name, character, id, profile_path }) => (
                <Link to={detailsPaths.people(id, name ?? '')} key={id}>
                  <div className='py-4'>
                    <Character
                      name={name}
                      character={character}
                      profilePath={profile_path}
                    />
                  </div>
                </Link>
              )
            )}
          </Slider>
        </ShadowWrapper>
      ) : (
        <div className='d-flex align-items-center'>
          <p>
            {t('noCastData', {
              mediaType: mediaType === 'movie' ? t('movie') : t('tv'),
            })}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cast;
