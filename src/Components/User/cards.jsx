// eslint-disable-next-line 
import React, { useEffect, useState } from "react";
import { Card  } from "react-bootstrap";
import Model from "./Model"

function Cartas(props){
    const idProduct=props.id;
    const imgProducto = props.NameImage;
    const nombreProduct=props.NombreP;
    const DescProduct=props.InfoP;
    const price = props.price;
    const disponibility = props.disponibility;
    
    const [guardado, setGuardado] = useState(false);

    useEffect(()=>{
        setGuardado(false)
    },[guardado])

    const idU=props.idU;
    // const [usuario, setUsuario] = useStat(null);

    // useEffect(()=>{
    //   const idUsuario=props.idU
    //     getUniqueUser( idUsuario, setUsuario );
    // }, [props.idU]);
    

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgProducto} />
                <Card.Body>
                    <Card.Title>{nombreProduct}</Card.Title>
                    <Card.Text>
                    <ul>
                            <li>Descripcion: {DescProduct}</li>
                            <li>Precio: {price} Bits</li>
                            <li>¿Hay en existencia?: {disponibility}</li>
                        </ul>
                    </Card.Text>
                    
                    <Model id={idProduct} idU={idU} setGuardado={setGuardado}/> 
                </Card.Body>
            </Card>
        
        </>
    )
}
export default Cartas;