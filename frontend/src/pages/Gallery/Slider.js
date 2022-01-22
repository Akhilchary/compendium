import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import Header from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";
import Topbar from '../../components/Topbar/Topbar';
import mailIcon from "../../images/mail.png";
export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
        <Topbar />
        
        <div className="gallery">
            <div>
                <h1 className="Heading">Gallery</h1>
            </div>
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img 
                            src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} 
                            />
                        </div>
                    )
                })}
                

            </div>
            <div className="container-dots">
                    {Array.from({length: 5}).map((item, index) => (
                        <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}  
            </div>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        </div>
            <div className="footer-4">

            <p className="soc-p1">Social.</p>
            <img className="linkdin-ic1" src={linkedIcon} alt="" />
            <img className="insta-ic1" src={instaIcon} />
            <img className="mail-ic1" src={mailIcon} />            

            <div className="footer-nav1">
                <h3>Navigate</h3>
                <div className="footNav-content1">
                    <p>About us</p>
                    <p>Articles</p>
                    <p>Gallery</p>
                    <p>Spotlight</p>
                    <p>Placements</p>
                </div>
            </div>

            <p className="copyright">&copy;2021 TheCompendium  </p>
            
            </div> 
        
      </>
    )
}

