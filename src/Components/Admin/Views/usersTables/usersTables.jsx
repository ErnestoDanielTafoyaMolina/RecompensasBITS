import React from "react";
import ModalA from "./modalA";
import ModalD from "./modalD";
import './usersTable.css'

function TablasPeticion(props){
    const idPeticion = props.idPeticion;
    const NombreUsuario= props.NombreUsuario;
    const NombreProducto= props.NombreProducto;
    const estado = props.Estado;
    



    const rechazarPeticion = () =>{
        
    }
    return(
        <> 
        <tr key={idPeticion}>
            <td>{idPeticion}</td>
            <td>{NombreUsuario}</td>
            <td>{NombreProducto}</td>
            <td>{estado}</td>
            <td>
            <ModalA/>
            <ModalD/>
            </td>
        </tr>
        </>
    )
}

export default TablasPeticion;  