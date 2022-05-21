import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/img/logo.png';
import Menu from './Menu';

function Header() {
  return (
    <header className="header">
      <Container>
        <Nav>
          <Nav.Item>
            <Nav.Link href="#">
              <img className="logo" src={Logo} alt="logo" />
            </Nav.Link>
          </Nav.Item>
          <Row className="justify-content-between flex-grow-1">
            <Col>
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
