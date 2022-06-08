//import react dependences
import React from "react";
import CarruselImagenes from "./CarruselImg";
import { Container,Col,Row } from "react-bootstrap"
function MainMenu(){
    return(
        <>
            <Container>
                <Row>
                    <Col> <CarruselImagenes /></Col>
                </Row>
                <Row>
                    <Col>
                        <h2>¿Qué es? BITS</h2>
                        <p>
                            BITS es una plataforma que facilita la gestión de tu nómina mediante
                            la cual puedes calcular, timbrar y dispersar, a través de nuestro software
                            que simplifica y agiliza tus procesos financieros y de capital humano,
                            el cual es creado para empresas en crecimiento.
                        </p>
                    </Col>
                    <Col>
                        <h2>¿Por qué Bits?</h2>
                        <p>
                        Bit es la unidad de medida para indicar la capacidad y agilidad de un
                        procesador, según el tamaño de un procesador puede registrar y
                        procesar datos dependiendo de su diseño.
                        Bits es un sistema que optimiza y registra tus procesos en el tema de
                        dispersión de nómina para darle a tu organización una mejor capacidad
                        de ahorro en tiempo y esfuerzo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainMenu;