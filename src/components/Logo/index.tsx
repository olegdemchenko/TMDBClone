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
  width: number;
  height: number;
}

function Logo({ path, imgName, width, height }: LogoProps) {
  const wrapperSizeStyles = css({ width, height });

  if (!imgName) {
    return (
      <div
        css={css([
          commonWrapperStyles,
          wrapperSizeStyles,
          wrapperBackgroundStyles,
        ])}
      >
        <img
          src={notFound}
          css={css([commonImgStyles, imgWidthStyles])}
          alt='Logo'
        />
      </div>
    );
  }
  return (
    <div css={[commonWrapperStyles, wrapperSizeStyles]}>
      <img css={commonImgStyles} src={`${path}${imgName}`} alt='Logo' />
    </div>
  );
}

export default Logo;
