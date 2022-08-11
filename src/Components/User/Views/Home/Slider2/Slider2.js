import React, {useState} from 'react'
import './Slider2.css'
import BtnSlider2 from './BtnSlider2'
import dataSlider2 from './dataSlider2'


function Slider2(props) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider2.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider2.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider2.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider2">
            {dataSlider2.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim2" : "slide2"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSlider2 moveSlide={nextSlide} direction={"next"} />
            <BtnSlider2 moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots2">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active2" : "dot2"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
export default Slider2;
