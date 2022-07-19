// eslint-disable-next-line 
import React from "react";
import {Button, Modal} from 'react-bootstrap'
import { useState, useEffect} from "react";
//peticion
import {getUniqueProduct} from '../../api/petitions_index';

function Modals (props) {
//hooks
    const [producto, setProducto] = useState(null);

    useEffect(()=>{
      const idProducto=props.id;
      getUniqueProduct( idProducto, setProducto );
    }, [props.id])
      
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const NP=props.name;
  // const IP=props.info;

  function handleSubmit (e){
    e.preventDefault();

    const idProducto=props.id;

    console.log('You clicked submit.', idProducto);
    setShow(false);
  }

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Canjear este producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { producto != null ? (
          <p>Ha seleccionado el producto: <b>{producto.Nombre_Producto}</b> con el precio: <b>{producto.Precio}</b> Bits ¿Seguro que quiere adquirirlo?</p>  
          ):(
            'Cargando...'
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
    
export default Modals
