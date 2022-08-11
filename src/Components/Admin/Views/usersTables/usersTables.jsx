import React from "react";
import { useState } from "react";
import ModalA from "./modalA";
import ModalD from "./modalD";
import './usersTable.css'

function TablasPeticion(props){
    const idPeticion = props.idPeticion;
    const NombreUsuario= props.NombreUsuario;
    const Id_Usuario= props.Id_Usuario;
    const NombreProducto= props.NombreProducto;
    const Id_Producto= props.Id_Producto;
    const Precio= props.Precio;
    const estado = props.Estado;
    const setGuardado=props.setGuardado;
    



    const rechazarPeticion = () =>{
        
    }
    return(
        <> 
        <tr key={idPeticion}>
            <td>{idPeticion}</td>
            <td>{NombreUsuario}</td>
            <td>{NombreProducto}</td>
            <td>{Precio}</td>
            <td>{estado}</td>
            <td className="botones">
            <ModalA
            Id_usuario={Id_Usuario}
            Id_Producto={Id_Producto}
            Bits={Precio}
            idPeticion={idPeticion}
            setGuardado={setGuardado}
            
            />
            <ModalD
            idPeticion={idPeticion}
            setGuardado={setGuardado}/>
            </td>
        </tr>
        </>
    )
}

export default TablasPeticion;  