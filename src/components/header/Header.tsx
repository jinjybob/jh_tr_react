import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 fixed-top">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home" className="text-primary">
          <h1>댕댕이 목욕탕</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
