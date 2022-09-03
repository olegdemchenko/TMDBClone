import React from 'react';
import { css } from '@emotion/react';
import notFound from './assets/notFound.svg';
import noAvatar from './assets/noAvatar.svg';
import {
  BorderRadiusTypes,
  commonImgStyles,
  commonWrapperStyles,
  imgWidthStyles,
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
          css={css([commonImgStyles, imgWidthStyles])}
          alt='Logo'
        />
      </div>
    );
  }
  return (
    <div css={[commonWrapperStyles, borderRadiusStyles]}>
      <img css={commonImgStyles} src={`${path}${imgName}`} alt='Logo' />
    </div>
  );
}

export default Logo;
