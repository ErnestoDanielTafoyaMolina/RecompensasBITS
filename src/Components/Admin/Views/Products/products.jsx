import React from 'react';
import Cards from './cards';
import './../../admin.css';

import {Button} from 'react-bootstrap';

//---ICONS---
import AddIcon from '@mui/icons-material/Add';

import laptop from './../../../../Components/Assets/laptop.png';

function Products(props){
    return(
        <>
        {/* <h1>View Products</h1> */}
        <div className="containerAdd">
                <Button variant="success" className="" style={{ height:'auto'}}>
                    <AddIcon className="addIcon" />
                    Add Product</Button>{''}
            </div>
        <div className="cards">
                    <Cards 
                    NombreP="iPhone 13"
                    InfoP="Azul Oxford"
                    NameImage={laptop}
                    />
                    <Cards
                    NombreP="iPhone 12 Pro Max"
                    InfoP="Space Gray"
                    NameImage={laptop}
                    />
                    <Cards
                    NombreP="iPhone 11"
                    InfoP="Sweet Pruple"
                    NameImage={laptop}
                    />
                </div>
        </>
    )
}
export default Products;