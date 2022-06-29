import React from "react";
import {Button, Modal, Form} from 'react-bootstrap'
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
                          <Form>
                          <Form.Group className="mb-3">
                              <Form.Label>Nombre del Producto</Form.Label>
                              <Form.Control 
                                  type="text" 
                                  placeholder="producto..." 
                                  name='name'
                                  value={producto.Nombre_Producto}/>
                          </Form.Group>
          
                          <Form.Group className="mb-3">
                              <Form.Label>Descripcion</Form.Label>
                              <Form.Control 
                                  type="text" 
                                  placeholder="breve descripcion del producto..." 
                                  name='desc'
                                  value={producto.Descripcion}/>
                          </Form.Group>
          
                          <Form.Group className="mb-3">
                              <Form.Label>Precio</Form.Label>
                              <Form.Control 
                                  type="number" 
                                  placeholder="precio en BITS" 
                                  name='price'
                                  value={producto.Precio} />
                          </Form.Group>
          
                          <Form.Group className="mb-3">
                              <Form.Label>¿Está disponible el producto?</Form.Label>
                              <Form.Control 
                                  type="text" 
                                  placeholder="precio en BITS" 
                                  name='stock'
                                  value={producto.Existencia} />
                          </Form.Group>
          
                          <Form.Group className="mb-3">
                              <Form.Label>Imagen</Form.Label>
                              <Form.Control 
                                  type="file" 
                                  placeholder="producto..." 
                                  name='image'
                                  value={producto.Imagen}/>
                          </Form.Group>
          
                      </Form> 
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