import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './../../admin.css';

//---ICONS---

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Cartas(props){
    const imgProducto = props.NameImage;
    const nombreProduct=props.NombreP;
    const DescProduct = props.InfoP;

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgProducto} />
                <Card.Body>
                    <Card.Title>{nombreProduct}</Card.Title>
                    <Card.Text>{DescProduct}
                    </Card.Text>
                        <div className="price">
                            <span>
                                <b>Price</b>
                            </span>
                        </div>
                        <div className="buttons">
                            <button className="btnGet button">
                                <VisibilityIcon  fontSize="small"/> View
                            </button>
                            <Button variant="primary">
                                <EditIcon fontSize="small"/>
                                Edit</Button>
                            <Button variant="danger">
                                <DeleteIcon fontSize="small"/>
                                Delete</Button>
                            </div>
                        </Card.Body>
                </Card>
        </>
    )
}
export default Cartas;