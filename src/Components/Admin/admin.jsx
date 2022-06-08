import React from 'react';

import { NavBar} from '../Common/index_common';
import Request from './Views/Request/index_req';
import Products from './Views/Products/index_p';
import MainMenu from './Views/home/home';
//  import {Container, Button} from 'react-bootstrap';
// import Cards from './cards';
//  import AddIcon from '@mui/icons-material/Add';
// // import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

// import laptop from './../../Components/Assets/laptop.png';

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

                <Route path='/' element={<MainMenu />}/>

            </Route>
        </Routes>
        </BrowserRouter>

        </>
    );
}
export default Admin;