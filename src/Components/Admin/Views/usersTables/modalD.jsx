import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
// import _default from 'react-bootstrap/Modal';
import Modal from 'react-bootstrap/Modal';
import {getPendientPetitions, DeclinedPetitions} from '../../../../api/petitions_index'


function ModalD(props) {
  const [show, setShow] = useState(false);

  const [peticion, setPeticion] = useState({
    Id:''
   });
   useEffect(()=>{
    const idPeticion=props.idPeticion;
    getPendientPetitions( idPeticion, setPeticion );
  }, [props.idPeticion])
  
  const Eliminarp  = (id) =>{
    DeclinedPetitions(props.idPeticion);
    console.log(props.idPeticion);
    props.setGuardado(true);
    handleClose()
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Rechazar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DENEGAR PETICION</Modal.Title>
        </Modal.Header>
        <Modal.Body>Al denegar esta peticion se le llegara a notificar a el empleado el motivo del rechazo de su peticion.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={(Eliminarp)}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalD;