import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/img/headerLogo.svg';
import Menu from './Menu';
import useHideOnScroll from '../../common/hooks';

function Header() {
  const [headerRef, isVisible] = useHideOnScroll();

  const headerClasses = cn('header', {
    visible: isVisible,
    hidden: !isVisible,
  });

  return (
    <header className={headerClasses} ref={headerRef}>
      <Container fluid="lg">
        <Nav className="p-3">
          <Nav.Item>
            <Nav.Link href="#" className="p-0 pe-3">
              <Link to="/">
                <img className="align-bottom logo" src={Logo} alt="logo" />
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Row className="justify-content-between flex-grow-1">
            <Col className="d-flex align-items-end">
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
