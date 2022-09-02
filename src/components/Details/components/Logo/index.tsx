import React from 'react';
import { css } from '@emotion/react';
import notFound from './assets/notFound.svg';
import { BorderRadiuses } from '../../../../common/styles';
import { imagePaths } from '../../../../routes';

interface LogoProps {
  path: string | null | undefined;
  width: number;
  height: number;
}

function Logo({ path, width, height }: LogoProps) {
  const commonStyles = css({
    width,
    height,
    borderRadius: BorderRadiuses.medium,
    overflow: 'hidden',
  });

  if (!path) {
    return (
      <div
        css={css([
          commonStyles,
          {
            backgroundColor: 'rgba(219, 219, 219)',
            textAlign: 'center',
            verticalAlign: 'middle',
          },
        ])}
      >
        <img src={notFound} css={css({ width: '50%' })} alt='Logo' />
      </div>
    );
  }
  return (
    <div css={commonStyles}>
      <img src={`${imagePaths.detailsPosters.medium}/${path}`} alt='Logo' />
    </div>
  );
}

export default Logo;
