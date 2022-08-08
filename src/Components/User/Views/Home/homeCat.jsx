import React, {useState} from 'react';
import './home.css'
import Slider from './Slider/Slider';
import Texto from './Texto/Texto';
import Footer from './Footer/Footer';
import Slider2 from './Slider2/Slider2';
function HomeCat(props){
    return(
        <div className='Slider'>
            <Slider></Slider>
            <Texto></Texto>
            <Slider2></Slider2>
            <Footer></Footer>
            
        </div>
    )
    
    
}
export default HomeCat;