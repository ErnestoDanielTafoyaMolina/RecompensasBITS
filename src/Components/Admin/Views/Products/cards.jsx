import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './../../admin.css';

//---ICONS---


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Cartas(props){
    // const idProducto=props.id;
    const imgProducto = props.img;
    const nombreProduct=props.name;

    const DescProduct = props.info;
    const PrecioProducto=props.price;
    const stock=props.disponibility;


    /*const eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
        if (opcion == true) {
          var contador = 0;
          var arreglo = this.state.data;
          arreglo.map((registro) => {
            if (dato.id == registro.id) {
              arreglo.splice(contador, 1);
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        }
    };*/
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgProducto} />
                <Card.Body>
                    <Card.Title>{nombreProduct}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li><b>Informacion: </b>{DescProduct}</li>
                            <li><b>Precio: </b>{PrecioProducto}</li>
                            <li><b>¿En existencia? </b>{stock}</li>
                        </ul>
                    </Card.Text>
                        <div className="buttons">
                            <Button variant="primary">
                                <EditIcon fontSize="small"/>
                                Edit</Button>

                            <Button  variant="danger">
                                <DeleteIcon fontSize="small"/>
                                Delete</Button>
                            </div>
                        </Card.Body>
                </Card>
        </>
    )
}
export default Cartas;