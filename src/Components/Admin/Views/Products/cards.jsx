// eslint-disable-next-line 
import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import { EditModals, DeleteModals } from './modals/modals'
import './../../admin.css';

//---ICONS---

function Cartas(props){

    const idProducto=props.id;
    const imgProducto = props.img;
    const nombreProduct=props.name;
    const DescProduct = props.info;
    const PrecioProducto=props.price;
    const stock=props.disponibility;

    return (
        <>
        <Card style={{ width: '18rem', padding:'10px' }} >
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
                            <EditModals 
                            idProducto={idProducto}
                            setGuardado={props.setGuardado}/>
                            {/*Modal para borrar*/}
                            <DeleteModals 
                            idProducto={idProducto}
                            setGuardado={props.setGuardado}/>
                        </div>
                        </Card.Body>
                </Card>
        </>
    )
}
export default Cartas;