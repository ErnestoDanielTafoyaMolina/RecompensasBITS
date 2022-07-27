import React from "react";
import {Button, Modal, Form} from 'react-bootstrap'
import { useState, useEffect} from "react";
//peticion
import {getUniqueProduct } from '../../../../../api/petitions_index';
import axios from 'axios';

import EditIcon from '@mui/icons-material/Edit';
function EditModals (props) {
    //hooks
    const [posts, setPosts] = useState({
      id:'',
      name:'',
      desc:'',
      price:0,
      stock:'',
      img:null

    });
        const [producto, setProducto] = useState(null);
    
        useEffect(()=>{
          const idProducto=props.idProducto;
          getUniqueProduct( idProducto, setProducto );
        }, [props.idProducto])


        const cambioDeValor = (name,valor)=>{
          switch(name){
            case 'name':
              console.log('nombre',valor);
              setPosts({...posts,name:valor})
              break
            case 'desc':
              console.log('descripcion',valor);
              setPosts({...posts,desc:valor})
              break
            case 'price':
              console.log('precio',valor);
              setPosts({...posts,price:parseInt(valor)})
              break
            case 'stock':
              console.log('¿Hay?',valor);
              setPosts({...posts,stock:valor})
              break
            case 'img':
              console.log('img',valor);
              setPosts({...posts,img:valor})
              break        
            default:
              console.log('nada seleccionado')
          }
        }

        const UpdatePost = async (id,state) =>{
          try{
            await axios.put(`https://bitsrecompensas-api.azurewebsites.net/api/products/${id}`,state);
          } catch (error) {
            console.log('error',error)
          }
        }

        const updateProductById = (id)=>{
          UpdatePost(props.idProducto,posts);
          props.setGuardado(true);
          handleClose();
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
                            <Form className="label">id:{producto.Id_Producto}</Form>
                            <Form.Group className="mb-3">
                                  <Form.Label>Nombre del Producto</Form.Label>
                                  <Form.Control 
                                      type="text" 
                                      defaultValue={producto.Nombre_Producto} 
                                      onBlur={(e) => cambioDeValor('name',e.target.value)}
                                      />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                  <Form.Label>Descripcion</Form.Label>
                                  <Form.Control 
                                      type="text" 
                                      defaultValue={producto.Descripcion} 
                                      onBlur={(e) => cambioDeValor('desc',e.target.value)}
                                      />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                  <Form.Label>Precio</Form.Label>
                                  <Form.Control 
                                      type="number" 
                                      defaultValue={producto.Precio} 
                                      onBlur={(e) => cambioDeValor('price',e.target.value)}
                                      />
                              </Form.Group>

                              <Form.Group className="mb-3">
                                  <Form.Label>¿Está disponible el producto?</Form.Label>
                                  <Form.Control 
                                      type="text" 
                                      defaultValue={producto.Existencia} 
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
              <Button variant="outline-success" onClick={(e)=>updateProductById()}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
        
    export default EditModals