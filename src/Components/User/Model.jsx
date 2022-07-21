// eslint-disable-next-line 
import React from "react";
import {Button, Modal} from 'react-bootstrap'
import { useState, useEffect} from "react";
//peticion
import {getUniqueProduct} from '../../api/petitions_index';



import axios from 'axios';



function Modals (props) {
//hooks
    
      
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // const NP=props.name;
    // const IP=props.info;


    const [producto, setProducto] = useState(null);
    
      useEffect(()=>{
        const idProducto=props.id;
        getUniqueProduct( idProducto, setProducto );
        
      }, [props.id]);


    const [prod, setProd]=useState({
      idP:''
    });
    

  // function handleSubmit (e){
  //   e.preventDefault();
  //   console.log('You clicked submit.', producto.Id_Producto, 'your number User is' );
    
  //   setShow(false);
    
  // }

  // const handleSubmit = async ()=>{
  //   console.log('Submit', producto.Id_Producto);
  //   handleClose();
  // }

  const url='http://192.168.10.191:3001/api/pendientes';

  const applyProd = async () => {
    setProd({...prod,idP:producto.Id_Producto})
    console.log('Solicitado',prod);
    try{
      await axios.post(url,prod.idP);
      console.log('Solicitado',prod);
    } catch(error){
      console.log('Error ',error);
    }
    //props.setGuardado(true);
    handleClose();
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
          <p>Ha seleccionado el producto: <b>{producto.Id_Producto} {producto.Nombre_Producto}</b> con el precio: <b>{producto.Precio}</b> Bits ¿Seguro que quiere adquirirlo?
          
          </p>  
          ):(
            'Cargando...'
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={(e)=>applyProd()}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
    
export default Modals
