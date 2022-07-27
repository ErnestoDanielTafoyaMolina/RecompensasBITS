import React, {useEffect, useState} from "react";
import { getHistorial } from "../../../../api/petitions_index";
import Table from 'react-bootstrap/Table';



function HistorialUsuario(props){

        const id_RegistroCanjeo=props.id_RegistroCanjeo;
        const Id_usuario=props.Id_usuario;
        const Id_Producto=props.Id_Producto;
        const Bits=props.Bits;
        const FechaConsumo=props.FechaConsumo;
        const Descripcion=props.Descripcion;
    return(
        <>
        <tr key={Id_usuario}>
            <td>{id_RegistroCanjeo}</td>
            <td>{Id_usuario}</td>
            <td>{Id_Producto}</td>
            <td>{Bits}</td>
            <td>{FechaConsumo}</td>
            <td>{Descripcion}</td>
        </tr>
        </>
    )
}


function Historial (){
    

    const [Historial, setHistorial]= useState([]);

    useEffect(()=>{
        TraerHistorial();
        getHistorial(setHistorial);
    },[])


    function TraerHistorial  () {
        const historiaal = getHistorial()
    
        console.log('hola',historiaal)
        getHistorial(setHistorial)
      }

    return(
        <><>
            <h1>Historial</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Registro</th>
                        <th>Usuario</th>
                        <th>Producto</th>
                        <th>Bits</th>
                        <th>Fecha</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>

                <tbody>
                    {Historial != null ? (
                        Historial.map(h => (
                            <HistorialUsuario key={h.id_RegistroCanjeo}
                                id_RegistroCanjeo={h.id_RegistroCanjeo}
                                Id_usuario={h.Id_usuario}
                                Id_Producto={h.Id_Producto}
                                Bits={h.Bits}
                                FechaConsumo={h.FechaConsumo}
                                Descripcion={h.Descripcion}
                                 />
                        ))
                    ) : ('Cargando...')}
                </tbody>

            </Table>
        </><>

               
            </></>
    )
}

export default Historial;