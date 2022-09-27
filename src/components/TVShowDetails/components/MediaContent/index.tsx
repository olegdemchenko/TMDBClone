import React from 'react';
import { css } from '@emotion/react';
import CenteredContainer from '../../../CenteredContainer';
import Cast from '../../../Cast';
import Media from '../../../Media';
import Recommendations from '../../../Recommendations';
import Season from './components/Season';
import Facts from './components/Facts';
import Keywords from '../../../Keywords';

function MediaContent() {
  const infoWidth = 300;
  return (
    <CenteredContainer>
      <div className='d-flex'>
        <div css={css({ width: `calc(100% - ${infoWidth}px)` })}>
          <Cast mediaType='tv' />
          <hr />
          <Season />
          <hr />
          <Media mediaType='tv' />
          <hr />
          <Recommendations mediaType='tv' />
        </div>
        <div className='px-4' css={css({ width: infoWidth })}>
          <Facts />
          <Keywords mediaType='tv' />
        </div>
      </div>
    </CenteredContainer>
  );
}

export default MediaContent;
