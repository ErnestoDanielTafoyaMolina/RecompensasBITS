import React from "react";
import {Button, Modal} from 'react-bootstrap'
import { useState } from "react";

function Modals (props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const NP=props.name;
  // const IP=props.info;

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Agregar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Selcciono este producto, desea confirmar su canje</Modal.Body>  
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="outline-success" onClick={handleClose}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
    
export default Modals
