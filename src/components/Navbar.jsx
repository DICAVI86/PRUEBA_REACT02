import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
        <Navbar>
            <Container>
                <Navbar.Brand>Libreria Bongo</Navbar.Brand>
                <Nav>
                    <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to={"/carrito"}>Carro: $0</Nav.Link>
                </Nav>
            </Container>

        </Navbar>
  )
}

export default NavBar