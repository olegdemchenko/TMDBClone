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
  staticBackgroundStyles,
  hiddenImgStyles,
} from './styles';

interface LogoProps {
  type: 'media' | 'person';
  path: string;
  imgName: string | null | undefined;
  borderRadius: BorderRadiusTypes;
  noStretch?: true;
}

function Logo({ path, imgName, type, borderRadius, noStretch }: LogoProps) {
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
  const imgSrc = `${path}${imgName}`;
  return (
    <div
      css={[
        commonWrapperStyles,
        borderRadiusStyles,
        noStretch ? staticBackgroundStyles(imgSrc) : {},
      ]}
    >
      <img
        css={[defaultImgStyles, noStretch ? hiddenImgStyles : {}]}
        src={imgSrc}
        alt='Logo'
      />
    </div>
  );
}

export default Logo;
