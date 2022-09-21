import React from 'react';
import { css } from '@emotion/react';
import { ThemeColors } from '../../../../../../common/styles';

interface ArrowProps {
  width: number;
  handleClick: () => void;
}

const blockStyles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1000,
});

function Arrow({ width, handleClick }: ArrowProps) {
  const roundedShadowStyles = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 3 * width,
    height: 3 * width,
    borderRadius: '50%',
    backgroundColor: 'rgba(33, 37, 41, 0.5)',
  });

  const arrowContainerStyles = css({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    width: width * Math.cos(Math.PI / 6),
    height: width,
    overflow: 'hidden',
    transform: `translate(${width - width * Math.cos(Math.PI / 6)}px, 0)`,
  });

  const arrowStyles = css({
    flexShrink: 0,
    width,
    height: width * Math.cos(Math.PI / 6),
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: 'white',
    transform: 'rotate(-30deg) skew(30deg)',
    transformOrigin: '0 100%',
    '&:hover': {
      backgroundColor: ThemeColors.gray,
    },
  });

  return (
    <div css={blockStyles}>
      <div css={roundedShadowStyles}>
        <div css={arrowContainerStyles}>
          <button type='button' onClick={handleClick} css={arrowStyles} />
        </div>
      </div>
    </div>
  );
}

export default Arrow;
