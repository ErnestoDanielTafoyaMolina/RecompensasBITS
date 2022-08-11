import React from 'react';
import { Button, Modal, Form} from 'react-bootstrap'
import { useState } from "react";

import axios from 'axios';

import AddIcon from '@mui/icons-material/Add';

import './../../../admin.css';



function AddProductModal(props){
    //post hooks
    
    const [posts, setPosts] = useState({
      name:'',
      desc:'',
      price:0,
      stock:'',
      img:''
    });
    
    
    const url='https://backendbits.herokuapp.com/api/products';

    const cambioDeValor = (name,valor)=>{
      switch(name){
        case 'name':
          console.log('nombre',valor);
          setPosts({...posts,name:valor})
          espacioListo(true);
          break
        case 'desc':
          console.log('descripcion',valor);
          setPosts({...posts,desc:valor});
          espacioListo1(true);
          break
        case 'price':
          console.log('precio',valor);
          setPosts({...posts,price:parseInt(valor)});
          espacioListo2(true);
          break
        case 'stock':
          console.log('¿Hay?',valor);
          setPosts({...posts,stock:valor});
          espacioListo3(true);
          break
        case 'img':
          console.log('img',valor);
          setPosts({...posts,img:valor});
          espacioListo(true);
          break        
        default:
          console.log('nada seleccionado')
      }
    }

    const addPost = async (e) =>{

      try{
        await axios.post(url,posts);
        console.log(posts);
      } catch (error) {
        console.log('error',error)
      }
      handleClose();
      handleClose1();
      props.setGuardado(true);
      setPosts({...posts, name:'', desc:'', price:'', stock:''});
      
    // }
    }

    const validarForm= async (e)=>{
      if (posts.name===''||posts.desc===''|| posts.price===''|| posts.stock===''){
        cambiarFormularioValido(true);
        console.log('Llena los campos');
      }else{
        cambiarFormularioValido(false);
        handleShow2();
      }
    }
   

    //modal hooks
    const [formularioValido, cambiarFormularioValido]=useState(false);

    const [espacioL, espacioListo]=useState(false);
    const [espacioL1, espacioListo1]=useState(false);
    const [espacioL2, espacioListo2]=useState(false);
    const [espacioL3, espacioListo3]=useState(false);

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
  

    const handleClose = () => {
      setShow(false); 
      cambiarFormularioValido(false);
      espacioListo(false);
      espacioListo1(false);
      espacioListo2(false);
      espacioListo3(false);
    };

    const handleClose1=()=> {
      setShow2(false);
    }

    const handleShow = () => setShow(true);
    const handleShow2 =() => setShow2(true);
    
    
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
                {formularioValido===true && espacioL===false ?(
                  <Form.Group className="mb-3 errorF">
                  <Form.Label>Nombre del Producto</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="producto..." 
                      onBlur={(e) => cambioDeValor('name',e.target.value)}
                      required
                      />
                      
              </Form.Group>
                ):(
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="producto..." 
                        onBlur={(e) => cambioDeValor('name',e.target.value)}
                        required
                        />
                </Form.Group>
                )}

                {formularioValido===true && espacioL1===false?(
                  <Form.Group className="mb-3 errorF">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="breve descripcion del producto..." 
                      onBlur={(e) => cambioDeValor('desc',e.target.value)}
                      required
                      />
              </Form.Group>
                ):(
                  <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="breve descripcion del producto..." 
                        onBlur={(e) => cambioDeValor('desc',e.target.value)}
                        required
                        />
                </Form.Group>
                )}
                {formularioValido===true && espacioL2===false?(
                  <Form.Group className="mb-3 errorF">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control 
                      type="number" 
                      placeholder="precio en BITS" 
                      onBlur={(e) => cambioDeValor('price',e.target.value)}
                      required    
                      />
              </Form.Group>
                ):(
                  <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="precio en BITS" 
                        onBlur={(e) => cambioDeValor('price',e.target.value)}
                        required    
                        />
                </Form.Group>
                )}
                {formularioValido===true && espacioL3===false ?(
                  <Form.Group className="mb-3 errorF">
                  <Form.Label>¿Está disponible el producto?</Form.Label>
                  <Form.Control 
                      type="text" 
                      placeholder="¿Está disponible?" 
                      onBlur={(e) => cambioDeValor('stock',e.target.value)}
                      required
                      />
              </Form.Group>
                ):(
                  <Form.Group className="mb-3">
                    <Form.Label>¿Está disponible el producto?</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="¿Está disponible?" 
                        onBlur={(e) => cambioDeValor('stock',e.target.value)}
                        required
                        />
                </Form.Group>
                )}
                <Form.Group className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control 
                        type="file" 
                        placeholder="producto..." 
                        onChange={(e) => cambioDeValor('img',e.target.value)}
                        />
                </Form.Group>

            </Form>
            </Modal.Body>
            
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="success" onClick={(e)=>validarForm()} >
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show2} onHide={handleClose1} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Confirmación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>¿Desea agregar <b>{posts.name}</b> con el precio <b>${posts.price}</b>?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1}>
                Cancelar
              </Button>
              <Button variant="success" onClick={(e)=>addPost()} >
                Confirmar
              </Button>
            </Modal.Footer>

          </Modal>
        

    </>)
}
export default AddProductModal;