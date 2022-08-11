import React from 'react';
import {useState} from "react";

function TablaHistorial(props){
        
        const Id_Usuario=props.Id_Usuario;
        const Id_Producto=props.Id_Producto;
        const Estado=props.Estado;
        const Fecha=props.Fecha;
    return(
        <>
        <tr >
            <td>{Id_Usuario}</td>
            <td>{Id_Producto}</td>
            <td>{Estado}</td>
            <td>{Fecha}</td>
        </tr>
        
        </>
    )    
}

export default TablaHistorial;