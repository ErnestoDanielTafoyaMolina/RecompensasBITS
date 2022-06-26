// eslint-disable-next-line   
import React, {useEffect, useState} from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from './../../Assets/logo-bits.png';
import {getUniqueUser} from '../../../api/petitions_index';

import './navBaru.css';



function NavBaru(props){

  

    const [usuario, setUsuario] = useState(null);

    useEffect(()=>{
      const idUsuario=props.id
        getUniqueUser( idUsuario, setUsuario );
    }, [props.id])



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
            <Navbar.Text className="bits">
              TUS BITS
              {usuario != null ? (
             <div>{usuario.Bits}</div>):(
             <p>CargandoBits...</p>)}
            </Navbar.Text>
          </Navbar>

        </section>
    )
}
export default NavBaru;