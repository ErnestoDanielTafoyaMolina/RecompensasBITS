import React, {useEffect, useState} from 'react';

import {getProducts} from '../../../../api/petitions_index';

import Cards from '../../cards';
import defaultImage from '../../../../Components/Assets/default.png';


function Catalogo (props){

    const [products, setProducts]= useState(null);

    useEffect(()=>{
      getProducts(setProducts)
  },[]) 

    
  

    return ( 
    <>
        
        <div className='Productos'>
        {products != null ?(
                products.map(product =>(

                    <Cards 
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