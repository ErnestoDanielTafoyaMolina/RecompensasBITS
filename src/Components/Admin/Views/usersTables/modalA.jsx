import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import _default from 'react-bootstrap/Modal';
import Modal from 'react-bootstrap/Modal';


function ModalA() {
  const [show, setShow] = useState(false);

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
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalA;