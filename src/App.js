import './App.css';
import Estructura from './assets/components/estructura';
import { Container, Row } from "react-bootstrap";
import React, {useEffect, useState} from "react";
import getProducts from "./api/peticionProductos";

function App() {

  const [products, setProducts]= useState(null);

  useEffect(()=>{
    getProducts(setProducts)
},[])

  console.log(products)
  return (
    <>
      <Container>
        <Row>
        {products != null ?(
                products.map(product =>(
                    <Estructura
                      name={product.Nombre_Producto}
                      desc={product.Descripcion}
                      price={product.Precio}
                      disponibility={product.Existencia}
                    />
                ))
            ):('Cargando...')}
        </Row>
      </Container>
    </>
  );
}

export default App;
