import React from 'react';
// import {NavBar} from '../Common/index_common';
import { NavBaru } from '../Common/index_common';
import './user.css';
// import {Container,Button, Card,Modal} from 'react-bootstrap';
import laptop from './../../Components/Assets/laptop.png'
// import { useState } from 'react';
// import Model from './Model';
import Cards from './cards';


function User (props){
    return ( 
    <>
        <NavBaru/> 
        <div className='cardsu'>
           <Cards
            NombreP="Hp"
            InfoP="negra"
            NameImage={laptop}
           />
           <Cards
            NombreP="Omen"
            InfoP="gris"
            NameImage={laptop}
           />
           <Cards
            NombreP="Nitro 5"
            InfoP="Gamer"
            NameImage={laptop}
           />
        </div>
        <div className="cardsu">
        <Cards
            NombreP="Lenovo"
            InfoP="S340"
            NameImage={laptop}
           />
           <Cards
            NombreP="Huawei"
            InfoP="gris"
            NameImage={laptop}
           />
           <Cards
            NombreP="AlienWare"
            InfoP="x"
            NameImage={laptop}
            />
        </div>
     </>
    );
}

export default User;