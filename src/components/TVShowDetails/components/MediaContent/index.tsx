import React from 'react';
import { css } from '@emotion/react';
import CenteredContainer from '../../../CenteredContainer';
import Cast from '../../../Cast';
import Media from '../../../Media';

function MediaContent() {
  const infoWidth = 300;
  return (
    <CenteredContainer>
      <div className='d-flex'>
        <div css={css({ width: `calc(100% - ${infoWidth}px)` })}>
          <Cast mediaType='tv' />
          <hr />
          <Media mediaType='tv' />
        </div>
        <div className='px-4' css={css({ width: infoWidth })} />
      </div>
    </CenteredContainer>
  );
}

export default MediaContent;
