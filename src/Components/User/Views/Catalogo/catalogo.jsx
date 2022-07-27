import React, {useEffect, useState} from 'react';

import {getProducts, getUniqueUser} from '../../../../api/petitions_index';

import Cards from '../../cards';
import defaultImage from '../../../../Components/Assets/default.png';


function Catalogo (props){

    const id=props.idU;
    const [products, setProducts]= useState(null);

    useEffect(()=>{
        getProducts(setProducts)
    },[])
    
    const [usuario, setUsuario] = useState(null);
    

    useEffect(()=>{
        const idUsuario=props.idU
        getUniqueUser( idUsuario, setUsuario );
    }, [props.idU]);
    

    return ( 
    <>
        {/* {usuario != null ? (
                <div>Usuario:  {usuario.Id_usuario}</div>):(
                <p>Cargando usuario...</p>)} */}
        <div className='Productos'>
        {products != null ?(
                products.map(product =>(
                    

                    <Cards idU={id}
                    id={product.Id_Producto}
                    NombreP={product.Nombre_Producto}
                    InfoP={product.Descripcion}
                    NameImage={defaultImage}
                    price={product.Precio}
                    disponibility={product.Existencia}
                    
                    />
                ))
            ):('Cargando...')}
                </div>
    
    </>
    );


}
export default Catalogo;