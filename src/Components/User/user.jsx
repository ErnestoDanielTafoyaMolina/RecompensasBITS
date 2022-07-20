// eslint-disable-next-line 
import React, {useEffect, useState} from 'react';

import { NavBaru} from '../Common/index_common';
import './user.css';



import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Catalogo from './Views/Catalogo/index_cat';
import HomeCat from './Views/Home/index_homeCat';
import Historial from './Views/Historial/index_historial';
function User (props){
    const id=props.id;



    return ( 
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBaru id={id} />}>
                <Route index element={<HomeCat/>}/>
                <Route path='Catalogo' element={<Catalogo/>}/>
                <Route path='Historial' element={<Historial/>}/>
                <Route path='*' element={<Navigate to ="/"/>}/>
            </Route>
        </Routes>
        </BrowserRouter>

    </>
    );
}

export default User;