import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import {
  MovieListResultsMedia,
  TVListResultsMedia,
  MediaTypes,
} from '../../app/APIInterfaces';
import noAvatar from '../../assets/img/noAvatar.jpg';
import { imagePaths } from '../../routes/routes';

interface PersonInfoProps {
  name: string;
  avatar: string | null;
  works: (MovieListResultsMedia | TVListResultsMedia)[];
}

const photoStyles = css({
  width: 92,
  height: 92,
  borderRadius: 10,
  img: {
    marginTop: -15,
  },
});

function PersonInfo({
  name,
  avatar,
  works,
}: PersonInfoProps) {
  const { t } = useTranslation('results');
  const photo = avatar ? `${imagePaths.searchResIcon}${avatar}` : noAvatar;
  return (
    <div className="d-flex mb-3">
      <div className="flex-shrink-0 overflow-hidden" css={photoStyles}>
        <img src={photo} alt="icon" />
      </div>
      <div className="d-flex flex-column info flex-grow-1 ps-3 justify-content-center">
        <h6 className="fw-bold m-0 name">{name}</h6>
        <div className="movies">
          {t('acting')}
          :
          {works.map((elem) => (
            elem.media_type === MediaTypes.movie ? elem.title : elem.name
          )).join(', ')}
        </div>
      </div>
    </div>
  );
}

export default PersonInfo;
