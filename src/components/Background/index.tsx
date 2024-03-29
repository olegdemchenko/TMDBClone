import React from 'react';
import { css } from '@emotion/react';
import { imagePaths } from '../../routes';

interface WrapperProps {
  imagePath: string | null | undefined;
  children?: React.ReactNode;
}

function Background({ imagePath, children }: WrapperProps) {
  return (
    <div
      css={css({
        backgroundImage: `linear-gradient(rgba(95,137,179,0.9), rgba(95,137,179,0.9)), url(${imagePaths.moviePosters.detailsBackground}${imagePath})`,
      })}
    >
      {children}
    </div>
  );
}

export default Background;
