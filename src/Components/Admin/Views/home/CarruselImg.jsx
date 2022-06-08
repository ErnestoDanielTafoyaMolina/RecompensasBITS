import Carousel from 'react-bootstrap/Carousel';

//import images
import ad1 from '../../../Assets/ad-1.png';
import ad2 from '../../../Assets/ad-2.png';

function CarruselImagenes(){
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ad1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>BITS</h3>
                    <p>Simplifica todos tus procesos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ad2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>BITS</h3>
                    <p>Simplifica todos tus procesos</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarruselImagenes;