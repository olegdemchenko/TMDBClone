import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { dynamicPaths, imagePaths } from '../../../../../../routes';
import Arrow from '../Arrow';
import { imageWrapperStyles, modalStyles } from './styles';
import { containerStyles, imagesStyles } from '../commonStyles';

interface YoutubePlayerProps {
  videoKey: string;
  name?: string;
}

function YoutubePlayer({ videoKey, name = '' }: YoutubePlayerProps) {
  const [isPlayerOpened, openPlayer] = useState(false);

  const handleOpenPlayer = () => openPlayer(true);
  const handleClosePlayer = () => openPlayer(false);

  return (
    <div>
      <div css={[containerStyles, imageWrapperStyles]}>
        <img
          css={imagesStyles}
          src={imagePaths.youtubeThumbnails.getLinkToMq(videoKey)}
          alt={videoKey}
        />
        <Arrow width={30} handleClick={handleOpenPlayer} />
      </div>
      <Modal
        show={isPlayerOpened}
        onHide={handleClosePlayer}
        centered
        css={modalStyles}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width='100%'
            height='100%'
            src={dynamicPaths.youtubeEmbeddedVideo(videoKey)}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default YoutubePlayer;
