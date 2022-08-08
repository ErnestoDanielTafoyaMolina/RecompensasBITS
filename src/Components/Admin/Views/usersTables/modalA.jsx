import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import _default from 'react-bootstrap/Modal';
import Modal from 'react-bootstrap/Modal';
import {getPendientPetitions, AceptedPetitions} from '../../../../api/petitions_index'


function ModalA(props) {
  const [show, setShow] = useState(false);
  
  
  const [peticion, setPeticion] = useState({
    Id:''
   });
   useEffect(()=>{
    const idPeticion=props.idPeticion;
    getPendientPetitions( idPeticion, setPeticion );
  }, [props.idPeticion])
  
  const Aceptarp  = (id) =>{
    AceptedPetitions(props.idPeticion);
    console.log(props.idPeticion)
    props.setGuardado(true);
    handleClose()
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Aceptar
      </Button>
 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ACEPTACION DE PETICION</Modal.Title>
        </Modal.Header>
        <Modal.Body>Al momento de continuar con la peticion, estas aceptando el canje de este producto, ademas de la resta de los puntos del empleado.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={Aceptarp}>
            Aceptar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalA;