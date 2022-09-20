import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useTranslation } from 'react-i18next';
import { Actor } from '../../../../app/TMDBAPIInterfaces';
import { useGetMovieCreditsQuery } from '../../../../app/store/api';
import GrowingSpinner from '../../../GrowingSpinner';
import Character from './components/Character';
import { emptyContainerStyles, rowStyles } from './styles';
import ShadowWrapper from '../../../ShadowWrapper';

interface CastProps {
  movieId: number;
}

function Cast({ movieId }: CastProps) {
  const { t } = useTranslation('details');
  const { data, isLoading, isError, error } = useGetMovieCreditsQuery(movieId);
  if (isLoading) {
    return (
      <div css={emptyContainerStyles}>
        <GrowingSpinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div css={emptyContainerStyles}>
        <Alert variant='danger'>
          {error?.message ?? 'Unknown error has happened.'}
        </Alert>
      </div>
    );
  }
  return (
    <div>
      <h4>{t('cast')}</h4>
      {(data?.cast as []).length > 0 ? (
        <ShadowWrapper>
          <div className='py-4' css={rowStyles}>
            {(data?.cast as Actor[]).map(
              ({ name, character, id, profile_path }) => (
                <Character
                  name={name}
                  character={character}
                  key={id}
                  profilePath={profile_path}
                />
              )
            )}
          </div>
        </ShadowWrapper>
      ) : (
        <div css={emptyContainerStyles} className='d-flex align-items-center'>
          <p>{t('noCastData')}</p>
        </div>
      )}
    </div>
  );
}

export default Cast;
