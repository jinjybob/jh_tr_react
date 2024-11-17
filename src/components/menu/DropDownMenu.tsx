import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const DropdownMenu: React.FC = () => {
  return (
    <Nav className="justify-content-center mb-4">
      <NavDropdown title="메뉴 1" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/1.1">액션 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.2">액션 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.3">액션 3</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="메뉴 2" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/2.1">액션 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.2">액션 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.3">액션 3</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="메뉴 3" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">액션 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">액션 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">액션 3</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="메뉴 4" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/4.1">액션 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.2">액션 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.3">액션 3</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="메뉴 5" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/5.1">액션 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.2">액션 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.3">액션 3</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default DropdownMenu;
