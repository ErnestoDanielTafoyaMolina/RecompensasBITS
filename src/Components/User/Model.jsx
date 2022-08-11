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
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 =()=> setShow1(false); 

  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  
    // const NP=props.name;
    // const IP=props.info;

  
  
  
    const [producto, setProducto] = useState();

      useEffect(()=>{
        const idProducto=props.id;
        getUniqueProduct( idProducto, setProducto);
      }, [props.id]);

    
    const [prod, setProd]=useState({
      idU:'',
      idP:''
    });

    const idU=props.idU;

    const url='https://backendbits.herokuapp.com/petition/pendient';

  const applyProd = async (Id_Producto:any, idU:any) => {
      await setProd({...prod,idU:idU, idP:Id_Producto});
    if(prod.idU===''){
      console.log('No hay datos en prod');
    }else{
      await setProd({...prod,idU:props.idU, idP:Id_Producto});
      try{
        await axios.post(url,prod);
        console.log(prod);
      } catch(error){
        console.log('Error ',error);
      }
      props.setGuardado(true);
      handleClose();
      handleClose1();
    }
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
          <p>Ha seleccionado el producto: <b>{producto.Nombre_Producto}</b> con el precio: <b>{producto.Precio}</b> Bits ¿Seguro que quiere adquirirlo?
          
          </p>  
          ):(
            'Cargando...'
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" 
          onClick={()=>{
            handleShow1();
            applyProd(producto.Id_Producto, idU)
          }

          }
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Confirmación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            { producto != null ? (
          <p>¿Está seguro de adquirir: <b>{producto.Nombre_Producto}</b> con el precio: <b>{producto.Precio}</b> Bits?
          </p>  
          ):(
            'Cargando...'
          )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1}>
                Cancelar
              </Button>
              <Button variant="success" onClick={(e)=>applyProd(producto.Id_Producto, idU)} >
                Confirmar
              </Button>
            </Modal.Footer>

          </Modal>

    </>
  );
}
    
export default Modals
