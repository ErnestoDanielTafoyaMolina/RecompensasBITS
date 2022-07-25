import React from "react";
import './usersTable.css'

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
            <button className="btn btn-success">Aceptar</button>
            <button className="btn btn-danger">Rechazar</button>
            </td>
        </tr>
        </>
    )
}

export default TablasUsuario;  