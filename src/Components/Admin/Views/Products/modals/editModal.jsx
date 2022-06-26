import React from "react";
import {Button, Modal} from 'react-bootstrap'
import { useState, useEffect} from "react";
//peticion
import {getUniqueProduct} from '../../../../../api/petitions_index';

import EditIcon from '@mui/icons-material/Edit';
function EditModals (props) {
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
    
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            <EditIcon fontSize="small" />
            Editar
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { producto != null ? (
              <p>Ha seleccionado el producto:{producto.Nombre_Producto} con el precio: {producto.Precio} Bits Confirmar para guardar cambios</p>  
              ):(
                'Cargando...'
              )}
            </Modal.Body>
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
        
    export default EditModals