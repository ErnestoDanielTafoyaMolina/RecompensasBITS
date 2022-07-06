import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { useState, useEffect} from "react";

import axios from 'axios';

import AddIcon from '@mui/icons-material/Edit';



function AddProductModal(props){
    //post hooks
    const [posts, setPosts] = useState({
      name:'',
      desc:'',
      price:0,
      stock:'',
      img:null

    });
    const url='http://localhost:3001/api/products';
    useEffect(()=>{
      const getPosts = async () => {
        const { data: res } = await axios.get(url);
        setPosts(res);
      };
      getPosts();
    },[]);
    const cambioDeValor = (name,valor)=>{
      switch(name){
        case 'name':
          console.log('nombre',valor);
          break
        case 'desc':
          console.log('descripcion',valor);
          break
        case 'price':
          console.log('precio',valor);
          break
        case 'stock':
          console.log('¿Hay?',valor);
          break
        case 'image':
          console.log('imagen',valor);
          break
        
        default:
          console.log('default',valor)
      }
    }

    const addPost = async () =>{
      console.log(cambioDeValor());
      try{
        await axios.post(url,posts);
      } catch (error) {
        console.log('error',error)
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
                        onBlur={(e) => cambioDeValor('name',e.target.value)}
                        required
                         />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="breve descripcion del producto..." 
                        onBlur={(e) => cambioDeValor('desc',e.target.value)}
                        required
                        />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="precio en BITS" 
                        onBlur={(e) => cambioDeValor('price',e.target.value)}
                        required    
                         />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>¿Está disponible el producto?</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="¿Está disponible?" 
                        onBlur={(e) => cambioDeValor('stock',e.target.value)}
                        required
                         />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control 
                        type="file" 
                        placeholder="producto..." 
                        onBlur={(e) => cambioDeValor('img',e.target.value)}
                        />
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="outline-success" onClick={(e)=>addPost()}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>

    </>)
}
export default AddProductModal;