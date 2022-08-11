import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import _default from 'react-bootstrap/Modal';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import { AceptedPetitions, updateBits} from '../../../../api/petitions_index'
import { ArrowForwardIosTwoTone } from '@mui/icons-material';


function ModalA(props) {
  const [show, setShow] = useState(false);
  
  const [email, setEmail] = useState({
    peticion:'Aceptada',
    email:'',
    mensaje:''
  });
  
  // const [resta,setResta] = useState({
  //   idUsuario:'',
  //   idProducto:'',
  //   bitsProducto:''
  // })
  
  

  const url ='https://backendbits.herokuapp.com/petition/mail';

  const idUsuario=props.Id_usuario;
  const idProducto=props.Id_Producto;
  const bitsProducto=props.Bits;

  const restarPuntos = async (e)=>{
    console.log(bitsProducto);
    console.log(idProducto);
    console.log(idUsuario);
    await updateBits(idUsuario,idProducto,bitsProducto);
    // setResta({...resta,idUsuario:idUsuario, idProducto:idProducto, bitsProducto:bitsProducto});
    // console.log(resta);
  } 

// cambi de valor en el formulario
  const onChangeValue = (name, value) =>{
    switch(name){
      case 'email':
        console.log('Peticion: ', 'Aceptada')
        setEmail({...email,peticion:'Aceptada'});
        console.log('Email: ',value);
        setEmail({...email,email:value});
        break;
      case 'mensaje':
        console.log('Mensaje: ', value);
        setEmail({...email,mensaje:value});
      break;
      // case 'resta':
      //   console.log('resta',resta)
      //   setResta({...resta,idUsuario:idUsuario, idProducto:idProducto, bitsProducto:bitsProducto});
      // break;
      default:
      console.log("a");
    }
  } 
//funcion para enviar el mensaje al endpoint
  const addEmailAndMesage = async (e)=>{
    AceptedPetitions(props.idPeticion);
    props.setGuardado(true);
    console.log(email)
    try {
      await axios.post(url, email);
      console.log(email)
    } catch (error) {
      console.log(error)
    }
    handleClose();
    setEmail({...email, name:'', desc:'', price:'', stock:''});
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Aceptar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ACEPTACION DE PETICION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{idUsuario} pidió {idProducto} con el precio {bitsProducto}</p>
          Al momento de dar click en aceptar, usted estará aceptando la peticion del usuario. Pero antes se requiere del correo del mismo y la razón de esta decisión
        <br/>
        <TextField 
        id="filled-basic" 
        label="email" 
        variant="filled" 
        placeholder='Escribe el email del usuario'
        onBlur={(e) => onChangeValue('email',e.target.value)} 
        />
        <br/>
        <TextField 
        id="filled-basic" 
        label="Asunto" 
        variant="filled" 
        placeholder='Escribe el motivo'
        onBlur={(e) => onChangeValue('mensaje',e.target.value)} 
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={(e)=>{
            addEmailAndMesage();
             restarPuntos(e);
            // onChangeValue('resta');
          }}>
            Aceptar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalA;