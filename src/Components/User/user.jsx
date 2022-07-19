// eslint-disable-next-line 
import React, {useEffect, useState} from 'react';
// import {NavBar} from '../Common/index_common';
import { NavBaru} from '../Common/index_common';
import './user.css';
// import {Container,Button, Card,Modal} from 'react-bootstrap';

// import { useState } from 'react';
// import Model from './Model';

// import {getProducts} from '../../api/petitions_index';
// import Cards from './cards';
// import defaultImage from './../../Components/Assets/default.png'


import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Catalogo from './Views/Catalogo/index_cat';
import HomeCat from './Views/Home/index_homeCat';
import Historial from './Views/Historial/index_historial';
function User (props){
     const id=props.id;
  //   const [products, setProducts]= useState(null);

  //   useEffect(()=>{
  //     getProducts(setProducts)
  // },[]) 


    return ( 
    <>
        {/* <NavBaru id={id}/>
        {/* <div className='Productos'>
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
                </div> */}
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBaru/>}>
                <Route path='Catalogo' element={<Catalogo id={id}/>}/>
                <Route path='Principal' element={<HomeCat/>}/>
                <Route path='Historial' element={<Historial/>}/>
            </Route>
        </Routes>
        </BrowserRouter>

      </>
    );
}

export default User;