import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import {
  MovieListItemMedia,
  TVListItemMedia,
  MediaTypes,
} from '../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../routes';
import Logo from '../../../../components/Logo';

interface PersonInfoProps {
  name: string;
  avatar: string | null;
  works: (MovieListItemMedia | TVListItemMedia)[];
}

const photoStyles = css({
  width: 92,
  height: 92,
});

function PersonInfo({ name, avatar, works }: PersonInfoProps) {
  const { t } = useTranslation('results');
  return (
    <div className='d-flex mb-3'>
      <div className='flex-shrink-0 overflow-hidden' css={photoStyles}>
        <Logo
          type='person'
          borderRadius='all'
          path={imagePaths.searchResIcon}
          imgName={avatar}
        />
      </div>
      <div className='d-flex flex-column info flex-grow-1 ps-3 justify-content-center'>
        <h6 className='fw-bold m-0 name'>{name}</h6>
        <div className='movies'>
          {t('acting')}:
          {works
            .map((elem) =>
              elem.media_type === MediaTypes.movie ? elem.title : elem.name
            )
            .join(', ')}
        </div>
      </div>
    </div>
  );
}

export default PersonInfo;
