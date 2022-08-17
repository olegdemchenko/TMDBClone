import React from 'react';
import { css } from '@emotion/react';
import { ThemeColors } from '../../common/styles';
import logo from '../../assets/img/footerLogo.svg';

const footerStyles = css({
  backgroundColor: ThemeColors.darkBlue,
  textAlign: 'center',
  img: {
    width: '50%',
  },
});

function Footer() {
  return (
    <footer className='p-4' css={footerStyles}>
      <img src={logo} alt='footer logo' />
    </footer>
  );
}

export default Footer;
