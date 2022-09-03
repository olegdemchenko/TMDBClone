import React from 'react';
import { css } from '@emotion/react';
import notFound from './assets/notFound.svg';
import noAvatar from './assets/noAvatar.svg';
import {
  commonImgStyles,
  commonWrapperStyles,
  imgWidthStyles,
  wrapperBackgroundStyles,
} from './styles';

interface LogoProps {
  type: 'media' | 'person';
  path: string;
  imgName: string | null | undefined;
}

function Logo({ path, imgName, type }: LogoProps) {
  if (!imgName) {
    return (
      <div css={css([commonWrapperStyles, wrapperBackgroundStyles])}>
        <img
          src={type === 'media' ? notFound : noAvatar}
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
