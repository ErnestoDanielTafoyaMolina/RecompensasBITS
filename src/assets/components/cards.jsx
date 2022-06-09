import React from "react";
import { Card, Button } from "react-bootstrap"
import logo from '../img/noProductYet.png'

function CardsUsers(props){
    const nombreProducto = props.cardTitle;
    const descripcionProducto = props.cardText;
    const precioProducto = props.priceProduct;
    const disponibilidadProducto = props.disponibility;
    // const imagenProducto = props.imageProducto;
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{nombreProducto}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>Descripcion: {descripcionProducto}</li>
                            <li>Precio: {precioProducto} BITS</li>
                            <li>¿Hay en existencia?: {disponibilidadProducto}</li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default CardsUsers;