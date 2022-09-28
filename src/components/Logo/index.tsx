import React from 'react';
import { css } from '@emotion/react';
import notFound from './assets/notFound.svg';
import noAvatar from './assets/noAvatar.svg';
import {
  BorderRadiusTypes,
  defaultImgStyles,
  commonWrapperStyles,
  emptyImgStyles,
  wrapperBackgroundStyles,
  wrapperBorderStyles,
} from './styles';

interface LogoProps {
  type: 'media' | 'person';
  path: string;
  imgName: string | null | undefined;
  borderRadius: BorderRadiusTypes;
}

function Logo({ path, imgName, type, borderRadius }: LogoProps) {
  const borderRadiusStyles = wrapperBorderStyles[borderRadius];
  if (!imgName) {
    return (
      <div
        css={css([
          commonWrapperStyles,
          wrapperBackgroundStyles,
          borderRadiusStyles,
        ])}
      >
        <img
          src={type === 'media' ? notFound : noAvatar}
          css={css([emptyImgStyles])}
          alt='Logo'
        />
      </div>
    );
  }
  return (
    <div css={[commonWrapperStyles, borderRadiusStyles]}>
      <img css={defaultImgStyles} src={`${path}${imgName}`} alt='Logo' />
    </div>
  );
}

export default Logo;
