import React from "react";
import CardsUsers from "./cards";
import { Col } from "react-bootstrap";


function Estructura(props){
    const name = props.name;
    const desc = props.desc;
    const price = props.price;
    const disponibility = props.disponibility;

return(
        <>
                <Col fluid="md-3">
                    <CardsUsers
                        cardTitle={name}
                        cardText={desc}
                        priceProduct={price}
                        disponibility={disponibility}
                    />
                </Col>

        </>
    )
}

export default Estructura;