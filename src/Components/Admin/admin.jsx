// eslint-disable-next-line 
import React from 'react';

import { NavBar} from '../Common/index_common';
import Request from './Views/Request/index_req';
import Products from './Views/Products/index_p';

import './admin.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function Admin (props){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route path='Requests' element={<Request />}/>
                <Route path='Products' element={<Products/>}/>

                <Route path='Products' element={<Products/>} />

            </Route>
        </Routes>
        </BrowserRouter>

        </>
    );
}
export default Admin;