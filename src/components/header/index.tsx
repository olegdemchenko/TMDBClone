import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Logo from './assets/img/headerLogo.svg';
import Menu from './NavBar';
import { useHideOnScroll } from '../../common/hooks';
import {
  headerBasicStyle,
  headerVisibleStyle,
  headerInvisibleStyle,
  logoStyles,
} from './styles';

function Header() {
  const [headerRef, isVisible] = useHideOnScroll();

  const headerStyles = css(
    headerBasicStyle,
    isVisible ? headerVisibleStyle : headerInvisibleStyle
  );

  return (
    <header
      ref={headerRef}
      css={headerStyles}
      data-visibility={isVisible ? 'visible' : 'invisible'}
    >
      <Container fluid='lg'>
        <Nav className='p-3'>
          <Nav.Item>
            <Link to='/'>
              <img
                className='align-bottom'
                css={logoStyles}
                src={Logo}
                alt='logo'
              />
            </Link>
          </Nav.Item>
          <Row className='justify-content-between flex-grow-1'>
            <Col className='d-flex align-items-end'>
              <Nav.Item>
                <Menu />
              </Nav.Item>
            </Col>
          </Row>
        </Nav>
      </Container>
    </header>
  );
}

export default Header;
