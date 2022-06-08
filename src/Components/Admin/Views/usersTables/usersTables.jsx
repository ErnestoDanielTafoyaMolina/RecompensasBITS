import React from "react";
import './usersTable.css'

function TablasUsuario(props){
    const idUser = props.idUsuario;
    const nameUser = props.nombreUsuario;
    const lastNameUser = props.apellidoUsuario;
    const rolUser = props.rolUsuario;

    return(
        <> 
        <tr>
        <td>
            {idUser}</td>
            <td>{nameUser}</td>
            <td>{lastNameUser}</td>
            <td>{rolUser}</td>
        </tr>
        </>
    )
}

export default TablasUsuario;  