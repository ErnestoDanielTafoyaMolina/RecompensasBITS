// eslint-disable-next-line 
//import dependencies
import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import TablasPeticion  from './../usersTables/usersTables'
//import components
//import petitions
import { getPendientPetitions /*getUsers*/ } from "../../../../api/petitions_index";
import './request.css'

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
    <h2 className="Title">Bandeja De Entrada</h2>
        <div className="container">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Id peticion</th>
            <th>Nombre_Usuario</th>
            <th>Nombre_Producto</th>
            <th>Estado Peticion</th>
            <th>Respuesta</th>
            </tr>
        </thead>

        <tbody>
            {petitions != null ?(
                petitions.map(petition =>(
                    <TablasPeticion key={petition.id_Peticiones}
                    idPeticion={petition.id_Peticiones}
                    NombreUsuario={petition.Nombre}
                    NombreProducto={petition.Nombre_Producto}
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