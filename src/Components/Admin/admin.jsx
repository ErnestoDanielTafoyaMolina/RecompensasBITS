// eslint-disable-next-line 
import React from 'react';

import { NavBar} from '../Common/index_common';
import Request from './Views/Request/index_req';
import Products from './Views/Products/index_p';
import MailView from '../mail/mail';

import './admin.css';
import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';


function Admin (props){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route index element={<Products/>}/>
                <Route path='Products'element={<Products/>}/>
                <Route path='Requests' element={<Request />}/>
                <Route path='Mail'    element={<MailView/>} />
                <Route path='*' elemnt={<Navigate to="/"/>} />

            </Route>
        </Routes>
        </BrowserRouter>

        </>
    );
}
export default Admin;