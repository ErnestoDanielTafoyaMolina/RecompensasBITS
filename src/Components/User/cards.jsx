import React from "react";
import { Card} from "react-bootstrap";
import Model from "./Model"

function Cartas(props){
    const imgProducto = props.NameImage;
    const nombreProduct=props.NombreP;
    const DescProduct=props.InfoP
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgProducto} />
                <Card.Body>
                    <Card.Title>{nombreProduct}</Card.Title>
                    <Card.Text>
                        {DescProduct}
                    </Card.Text>
                    <Model /> 
                </Card.Body>
            </Card>
        
        </>
    )
}
export default Cartas;