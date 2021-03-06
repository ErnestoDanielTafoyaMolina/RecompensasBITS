// eslint-disable-next-line 
//import dependencies
import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
//import components
import TablasUsuario from "../usersTables/usersTables";
//import petitions
import { getUsers } from "../../../../api/petitions_index";

function Request(){
    //hooks
    const [users, setUsters]= useState(null);

    useEffect(()=>{
        getUsers(setUsters)
    },[])

return(
    <>
    <h1>Usuarios</h1>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rol</th>
            <th>Bits</th>
            </tr>
        </thead>

        <tbody>
            {users != null ?(
                users.map(usuario =>(
                    <TablasUsuario key={usuario.Nombre}
                    idUsuario={usuario.Id_usuario}
                    nombreUsuario={usuario.Nombre}
                    apellidoUsuario={usuario.Apellido}
                    rolUsuario={usuario.Rol}
                    Bits={usuario.Bits}
                    />
                ))
            ):('Cargando...')}
        </tbody>

        </Table>
    </>
)
}
export default Request;