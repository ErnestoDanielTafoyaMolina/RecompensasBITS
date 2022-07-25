// eslint-disable-next-line 
//import dependencies
import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
//import components
import TablasUsuario from "../usersTables/usersTables";
//import petitions
import { getPendientPetitions /*getUsers*/ } from "../../../../api/petitions_index";

function Request(){
    //hooks
    const [petitions, setPetitions]= useState(null);
    // const [users, setUsers] = useState(null)

    useEffect(()=>{
        getPendientPetitions(setPetitions);
        // getUsers(setUsers);
    },[])

return(
    <>
    <h2 className="center">Usuarios</h2>
        <div className="container">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Id peticion</th>
            <th>Id usuario</th>
            <th>Id Producto</th>
            <th>Peticion</th>
            <th>Rechazar</th>
            </tr>
        </thead>

        <tbody>
            {petitions != null ?(
                petitions.map(petition =>(
                    <TablasUsuario key={petition.id_Peticiones}
                    idPeticion={petition.id_Peticiones}
                    idUsuario={petition.Id_Usuario}
                    idProducto={petition.Id_Producto}
                    Estado={petition.Estado}
                    />
                ))
            ):('Cargando...')}
        </tbody>

        </Table>
        </div>
    </>
)
}
export default Request;