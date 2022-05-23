import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/img/logo.png';
import Menu from './Menu';

function Header() {
  const [position, setPosition] = useState(0);
  const [isVisible, setVisibility] = useState(true);
  const headerRef = useRef<HTMLBodyElement | null>(null);
  const toggleHeader = () => {
    if (headerRef.current && window.scrollY < headerRef.current.clientHeight) {
      return;
    }
    const isMoveUp = (window.scrollY - position) < 0;
    setVisibility(isMoveUp);
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleHeader);
    return () => window.removeEventListener('scroll', toggleHeader);
  });

  const headerClasses = cn('header', {
    visible: isVisible,
    hidden: !isVisible,
  });

  return (
    <header className={headerClasses} ref={headerRef}>
      <Container>
        <Nav className="p-3">
          <Nav.Item>
            <Nav.Link href="#" className="p-0 pe-3">
              <img className="align-bottom logo" src={Logo} alt="logo" />
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
