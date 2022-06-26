import React, { useState } from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import './../../admin.css';

//---ICONS---


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Cartas(props){

    //hooks
    const [show, setShow] = useState(false);
    //modal settings
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const idProducto=props.id;
    const imgProducto = props.img;
    const nombreProduct=props.name;
    const DescProduct = props.info;
    const PrecioProducto=props.price;
    const stock=props.disponibility;

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgProducto} />
                <Card.Body>
                    <Card.Title>{nombreProduct}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li><b>Informacion: </b>{DescProduct}</li>
                            <li><b>Precio: </b>{PrecioProducto}</li>
                            <li><b>¿En existencia? </b>{stock}</li>
                        </ul>
                    </Card.Text>

                        <div className="buttons">
                            {/*Modal para editar*/}
                            <Button variant="primary" onclick={handleShow}>
                                <EditIcon fontSize="small"/>
                                Edit
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <Button  variant="danger">
                                <DeleteIcon fontSize="small"/>
                                Delete</Button>
                            </div>
                        </Card.Body>
                </Card>
        </>
    )
}
export default Cartas;