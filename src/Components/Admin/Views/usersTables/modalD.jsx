import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import _default from 'react-bootstrap/Modal';
import Modal from 'react-bootstrap/Modal';


function ModalD() {
  const [show, setShow] = useState(false);

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

export default ModalD;