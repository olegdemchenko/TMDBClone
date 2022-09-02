import React from 'react';
import { css } from '@emotion/react';
import notFound from './assets/notFound.svg';
import {
  commonImgStyles,
  commonWrapperStyles,
  imgWidthStyles,
  wrapperBackgroundStyles,
} from './styles';

interface LogoProps {
  path: string;
  imgName: string | null | undefined;
}

function Logo({ path, imgName }: LogoProps) {
  if (!imgName) {
    return (
      <div css={css([commonWrapperStyles, wrapperBackgroundStyles])}>
        <img
          src={notFound}
          css={css([commonImgStyles, imgWidthStyles])}
          alt='Logo'
        />
      </div>
    );
  }
  return (
    <div css={[commonWrapperStyles]}>
      <img css={commonImgStyles} src={`${path}${imgName}`} alt='Logo' />
    </div>
  );
}

export default Logo;
