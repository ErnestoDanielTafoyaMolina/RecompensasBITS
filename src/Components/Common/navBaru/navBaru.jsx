// eslint-disable-next-line   
import React, {useEffect, useState} from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from './../../Assets/logo-bits.png';
import {getUniqueUser} from '../../../api/petitions_index';

import {Link, Outlet} from "react-router-dom";

import './navBaru.css';




function NavBaru(props){

  
    const [usuario, setUsuario] = useState(null);

    useEffect(()=>{
      const idUsuario=props.id
        getUniqueUser( idUsuario, setUsuario );
    }, [props.id]);



    return (
        <>
        <section>
        <Navbar className="bg-blue" variant="dark">
            <Container className="containerP">

            
            <Navbar.Brand as={Link} to="/Principal">
              <Image src={logo} className="logoP" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Principal">
                <h3>Principal</h3>
              </Nav.Link>
              <Nav.Link as={Link} to="/Catalogo">
                <h3>Catalogo</h3>
              </Nav.Link>
              <Nav.Link as={Link} to="/Historial">
                <h3>Historial</h3>
              </Nav.Link>
            </Nav>
            </Container>
            <Navbar.Text className="bits">
             {usuario != null ? (
              <div>Usuario:  {usuario.Nombre} ${usuario.Bits} Bits</div>):(
              <p>Cargando Bits...</p>)}
              </Navbar.Text>
          </Navbar>
          </section>
        <section>
          <Outlet></Outlet>
        </section>
        </>
    )
}
export default NavBaru;