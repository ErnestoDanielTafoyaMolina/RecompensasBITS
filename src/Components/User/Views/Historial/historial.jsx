import React, {useEffect, useState} from "react";
import {getHistorialById, getPendientPetitions, getHistorial} from "../../../../api/petitions_index";
import Table from 'react-bootstrap/Table';
import TablaHistorial from './TablaHistorial';

function Historial (props){
    

    const [Historial, setHistorial]= useState(null);
    const [guardado, setGuardado]= useState(false);
  

    useEffect(()=>{
        const Id=props.Id;
        getHistorialById(Id,setHistorial);
        // getPendientPetitions(id,setHistorial);
        setGuardado(true);
    });

    return(
        <>
            <h1>Historial</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Usuario</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        {/* <th>Fecha</th> */}
                    </tr>
                </thead>

                <tbody>
                    {Historial != null ? (
                        Historial.map(h => (
                            <TablaHistorial 
                                Id_Usuario={h.Nombre}
                                Id_Producto={h.Nombre_Producto}
                                Estado={h.Estado}
                                // Fecha={h.Fecha}
                                setGuardado={setGuardado}
                                />
                                
                        ))
                    ) : ('No hay nada en tu historial...')}
                    
                </tbody>
                
            </Table>
        </>
    )
}

export default Historial;