import React from "react";
import {Button, Modal, Form} from 'react-bootstrap'
import { useState, useEffect} from "react";
//peticion
import {getUniqueProduct} from '../../../../../api/petitions_index';
import axios from 'axios';

import EditIcon from '@mui/icons-material/Edit';
function EditModals (props) {
    //hooks
    const [posts, setPosts] = useState({
      name:'',
      desc:'',
      price:0,
      stock:'',
      img:null

    });
    const url='http://localhost:3001/api/products';
        const [producto, setProducto] = useState(null);
    
        useEffect(()=>{
          const idProducto=props.idProducto;
          getUniqueProduct( idProducto, setProducto );
        }, [props.idProducto])
        const cambioDeValor = (name,valor)=>{
          switch(name){
            case 'name':
              console.log('nombre',valor);
              setPosts({...posts,name:valor.target.value})
              break
            case 'desc':
              console.log('descripcion',valor);
              setPosts({...posts,desc:valor.target.value})
              break
            case 'price':
              console.log('precio',valor);
              setPosts({...posts,price:parseInt(valor.target.value)})
              break
            case 'stock':
              console.log('¿Hay?',valor);
              setPosts({...posts,stock:valor.target.value})
              break
            case 'img':
              console.log('img',valor);
              setPosts({...posts,img:valor.target.value})
              break        
            default:
              console.log('nada seleccionado')
          }
        }

        const UpdatePost = async () =>{
          try{
            await axios.post(url,posts);
          } catch (error) {
            console.log('error',error)
          }
        }
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
                                      placeholder={producto.Nombre_Producto} 
                                      onBlur={(e) => cambioDeValor('name',e.target.value)}
                                      />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                  <Form.Label>Descripcion</Form.Label>
                                  <Form.Control 
                                      type="text" 
                                      placeholder={producto.Descripcion} 
                                      onBlur={(e) => cambioDeValor('desc',e.target.value)}
                                      />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                  <Form.Label>Precio</Form.Label>
                                  <Form.Control 
                                      type="number" 
                                      placeholder={producto.Precio} 
                                      onBlur={(e) => cambioDeValor('price',e.target.value)}
                                      />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                  <Form.Label>¿Está disponible el producto?</Form.Label>
                                  <Form.Control 
                                      type="text" 
                                      placeholder={producto.Existencia} 
                                      onBlur={(e) => cambioDeValor('stock',e.target.value)}
                                      />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                  <Form.Label>Imagen</Form.Label>
                                  <Form.Control 
                                      type="file"  
                                      onBlur={(e) => cambioDeValor('img',e.target.value)}
                                      />
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
              <Button variant="outline-success" onClick={(e)=>UpdatePost()}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
        
    export default EditModals