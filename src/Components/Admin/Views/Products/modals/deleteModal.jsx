import React from "react";
import {Button, Modal} from 'react-bootstrap'
import { useState, useEffect} from "react";
//peticion
import {getUniqueProduct, deleteProductById} from '../../../../../api/petitions_index';

import DeleteIcon from '@mui/icons-material/Delete';
function DeleteModals (props) {
//hooks
    const [producto, setProducto] = useState(null);

    useEffect(()=>{
      const idProducto=props.idProducto;
      getUniqueProduct( idProducto, setProducto );
    }, [props.idProducto])
      
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const NP=props.name;
  // const IP=props.info;
    const eliminar = (id)=>{
      deleteProductById(props.idProducto);
      window.location.reload();
    }
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <DeleteIcon fontSize="small" />
            Eliminar
 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { producto != null ? (
          <p>Ha seleccionado el producto:{producto.Nombre_Producto} con el precio: {producto.Precio} Bits ¿Seguro que quiere eliminarlo?</p>  
          ):(
            'Cargando...'
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="outline-success" onClick={eliminar}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
    
export default DeleteModals
