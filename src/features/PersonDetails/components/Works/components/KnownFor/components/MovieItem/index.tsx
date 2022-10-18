import React from 'react';
import { css } from '@emotion/react';
import Logo from '../../../../../../../../components/Logo';
import { imagePaths } from '../../../../../../../../routes';

type MovieItemProps = {
  posterSrc?: string | null;
  name?: string;
};

function MovieItem({ posterSrc, name = '-' }: MovieItemProps) {
  const itemWidth = 130;
  return (
    <div css={css({ width: itemWidth })}>
      <div css={css({ width: itemWidth, height: 200 })}>
        <Logo
          path={imagePaths.peoplePosters.playedAt}
          imgName={posterSrc}
          type='media'
          borderRadius='all'
        />
      </div>
      <p className='text-center'>{name}</p>
    </div>
  );
}

export default MovieItem;
