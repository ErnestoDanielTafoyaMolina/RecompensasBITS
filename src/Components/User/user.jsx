import React, {useEffect, useState} from 'react';
// import {NavBar} from '../Common/index_common';
import { NavBaru} from '../Common/index_common';
import './user.css';
// import {Container,Button, Card,Modal} from 'react-bootstrap';
import laptop from './../../Components/Assets/laptop.png'
// import { useState } from 'react';
// import Model from './Model';
import Cards from './cards';
import {getProducts} from '../../api/petitions_index';




function User (props){
    const id=props.id;
    const [products, setProducts]= useState(null);

    useEffect(()=>{
      getProducts(setProducts)
  },[]) 


    return ( 
    <>
        <NavBaru
          id={id}
        /> 
        <div className='cardsu'>
        {products != null ?(
                products.map(product =>(

                    <Cards
                    NombreP={product.Nombre_Producto}
                    InfoP={product.Descripcion}
                    NameImage={laptop}
                    price={product.Precio}
                    disponibility={product.Existencia}
                    />
                ))
            ):('Cargando...')}
        </div>
      </>
    );
}

export default User;