// eslint-disable-next-line 
import React, { useEffect, useState } from 'react';
import Cards from './cards';
import './../../admin.css';
import './products.css'
import laptop from './../../../../Components/Assets/default.png';
import AddProductModal from './modals/addProductModal';
//--Peticion para productos--
import { getProducts } from '../../../../api/petitions_index';

function Products(props){
    const [products, setProducts]= useState(null);

    useEffect(()=>{
      getProducts(setProducts)
  },[]) 
    return(
        <>
        <div className="containerAdd">
                <AddProductModal />
            </div>
            <div className="Productos">
            {products != null ?(
                products.map(product =>(
            
                    <Cards className='card'
                    id={product.Id_Producto}
                    name={product.Nombre_Producto}
                    info={product.Descripcion}
                    img={laptop}
                    price={product.Precio}
                    disponibility={product.Existencia}
                    />
                ))
            ):('Cargando...')}
            </div>
        </>
    )
}
export default Products;