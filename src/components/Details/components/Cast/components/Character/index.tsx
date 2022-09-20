import React from 'react';
import { imagePaths } from '../../../../../../routes';
import Logo from '../../../../../Logo';
import { logoSizeStyles, textWrapperStyles } from './styles';

interface CharacterProps {
  name?: string;
  character?: string;
  profilePath?: string | null;
  id: number;
}

function Character({ name, character, profilePath, id }: CharacterProps) {
  return (
    <div className='me-3'>
      <div css={logoSizeStyles}>
        <Logo
          type='person'
          path={imagePaths.moviePosters.cast}
          imgName={profilePath}
          borderRadius='top'
        />
      </div>
      <div className='p-2' css={textWrapperStyles}>
        <h6 className='m-0 fw-bold'>{name}</h6>
        <p className='m-0'>{character}</p>
      </div>
    </div>
  );
}

export default Character;
