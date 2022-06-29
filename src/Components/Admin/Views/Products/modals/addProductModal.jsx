import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { useState, useEffect} from "react";

import axios from 'axios';

import AddIcon from '@mui/icons-material/Edit';



function AddProductModal(props){
    //post hooks
    const [posts, setPosts] = useState([]);
    const url='http://localhost:3001/api/products';
    useEffect(()=>{
      const getPosts = async () => {
        const { data: res } = await axios.get(url);
        setPosts(res);
      };
      getPosts();
    },[]);

    const addPost = async () =>{
      try {
        const post = {
          name:'name',
          desc:'desc',
          price:2,
          stock:'stock',
          image:'image'
        };
        await axios.post(url,post);
        setPosts([post,...posts]);
      } catch (error) {
        console.log(error,'jaja que pendejo el servidor no lo quiere aaaaaaah')
      }
    }
    //modal hooks
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   return(<>

    <Button variant="success" onClick={handleShow}>
            <AddIcon fontSize="small" />
            Añadir Producto
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Añadir Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="producto..." 
                        name='name'/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="breve descripcion del producto..." 
                        name='desc'/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="precio en BITS" 
                        name='price' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>¿Está disponible el producto?</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="precio en BITS" 
                        name='stock' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control 
                        type="file" 
                        placeholder="producto..." 
                        name='image'/>
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="outline-success" onClick={addPost}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>

    </>)
}
export default AddProductModal;