import React from 'react';

import { NavBar} from '../Common/index_common';

import {Container, Button, Card} from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import './admin.css'

import laptop from './../../Components/Assets/laptop.png';

function Admin (){
    return (
        <>

        <NavBar />
        
        <Container>
            
            <div className="containerAdd">
                <Button variant="success" className="button" style={{ height:'auto'}}>
                    <AddIcon className="addIcon" />
                    Add Product</Button>{''}
            </div>
            <div className="cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={laptop} />
                        <Card.Body>
                            <Card.Title>HP Laptop</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button className="btnGet">Get this product!</Button>
                        </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={laptop} />
                        <Card.Body>
                            <Card.Title>HP Laptop</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button className='btnGet'>Get this product!</Button>
                        </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={laptop} />
                        <Card.Body>
                            <Card.Title>HP Laptop</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button className='btnGet'>Get this product!</Button>
                        </Card.Body>
                </Card>
            </div>
            <div className="cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={laptop} />
                        <Card.Body>
                            <Card.Title>HP Laptop</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button className='btnGet'>Get this product!</Button>
                        </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={laptop} />
                        <Card.Body>
                            <Card.Title>HP Laptop</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button className='btnGet'>Get this product!</Button>
                        </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={laptop} />
                        <Card.Body>
                            <Card.Title>HP Laptop</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button className='btnGet'>Get this product!</Button>
                        </Card.Body>
                </Card>
            </div>

        </Container>
        
        </>
    );
}

export default Admin;