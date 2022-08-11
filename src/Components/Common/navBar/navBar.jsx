// eslint-disable-next-line 
import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from './../../Assets/logo-bits.png';

import './navBar.css';
import '../../../App.css';

import {Outlet, Link} from "react-router-dom";

function NavBar(){

    return (<>          
        <Navbar className="bg-blue md-12 " variant="dark">
            <Container className="containerP">
            
            <Navbar.Brand as={Link} to="/Products">
              <Image src={logo} className="logoP" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Requests">
                <h3>Peticiones</h3>
              </Nav.Link>
              <Nav.Link as={Link} to="/Products">
                <h3>Productos</h3>
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/Mail">
                <h3>Correo</h3>
              </Nav.Link> */}
            </Nav>
            </Container>
          </Navbar>
          <section>
            <Outlet></Outlet>
          </section>
    </>
    )
}

export default NavBar;