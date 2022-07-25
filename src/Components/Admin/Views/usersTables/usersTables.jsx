import React from "react";
import ModalA from "./modalA";
import './usersTable.css';
import ModalD from "./modalD";


function TablasUsuario(props){
    const idPeticion = props.idPeticion;
    const idUsuario = props.idUsuario;
    const idProducto = props.idProducto;
    const estado = props.Estado;

    const rechazarPeticion = () =>{
        
    }
    return(
        <> 
        <tr key={idProducto}>
            <td>{idPeticion}</td>
            <td>{idUsuario}</td>
            <td>{idProducto}</td>
            <td>{estado}</td>
            <td>
            <ModalA/>
            <ModalD/>

            </td>
        </tr>
        </>
    )
}

export default TablasUsuario;  