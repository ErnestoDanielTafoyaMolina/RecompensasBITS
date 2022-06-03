import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from './../../Assets/logo-bits.png';

import './navBaru.css';

function NavBaru(){

    return (
        <section>      
        <Navbar className="bg-blue" variant="dark">
            <Container className="containerP">
            
            <Navbar.Brand href="#home">
              <Image src={logo} className="logoP" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <h3>Home</h3>
              </Nav.Link>
              <Nav.Link href="#features">
                <h3>Catalogo</h3>
              </Nav.Link>
            </Nav>
            </Container>
          </Navbar>

        </section>
    )
}
export default NavBaru;