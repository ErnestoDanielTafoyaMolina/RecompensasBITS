import React, {useEffect, useState} from "react";
import { getHistorial } from "../../../../api/petitions_index";
import Table from 'react-bootstrap/Table';






function Historial (props){
    const id_RegistroCanjeo = props.id_RegistroCanjeo;
    const Id_usuario= props.Id_usuario;
    const Id_Producto = props.Id_Producto;
    const Bits = props.Bits
    const FechaConsumo = props.FechaConsumo
    const Descripcion = props.Descripcion

    const [historial, setHistorial]= useState(null);

    useEffect(()=>{
        getHistorial(setHistorial)
        
    },[])

    

    return(
        <><>
            <h1>Historial</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Registro</th>
                        <th>Nombre</th>
                        <th>Producto</th>
                        <th>Bits</th>
                        <th>Fecha</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>

                <tbody>
                    {historial != null ? (
                        historial.map(h => (
                            <Historial key={id_RegistroCanjeo}
                                Id_usuario={h.Id_usuario}
                                Id_Producto={h.Id_Producto}
                                FechaConsumo={h.FechaConsumo}
                                Descripcion={h.Descripcion}
                                Bits={h.Bits} />
                        ))
                    ) : ('Cargando...')}
                </tbody>

            </Table>
        </><>

                <tr key={id_RegistroCanjeo}>
                    <td>{Id_usuario}</td>
                    <td>{Id_Producto}</td>
                    <td>{Bits}</td>
                    <td>{FechaConsumo}</td>
                    <td>{Descripcion}</td>
                </tr>
            </></>
    )
}

export default Historial;