import React from 'react'
import { Carousel } from 'react-bootstrap';
import slideOne from "../images/IndexSlider/slider 1.jpg"
import slideTwo from "../images/IndexSlider/slider 2.jpg"
import slideThree from "../images/IndexSlider/slider 3.jpg"
import slideFour from "../images/IndexSlider/slider 4.jpg"
import slideFive from "../images/IndexSlider/slider 5.jpg"
import slideSix from "../images/IndexSlider/slider 6.jpg"
import slideSeven from "../images/IndexSlider/slider 7.jpg"
export default function PhotoSection() {
    return (
      <div className="carouselClass">
      <Carousel id="carouselExampleSlidesOnly" className="carousel slide Mystyling" data-ride="carousel">
        <Carousel.Item className="carousel-inner">
          <div className="CarouselSliderItem">  
          <img src={slideOne}  className="d-block w-100 sliderimage" alt=""/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="CarouselSliderItem">
        <img src={slideTwo}  className="d-block w-100 sliderimage" alt=""/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="CarouselSliderItem">  
        <img src={slideThree}  className="d-block w-100 sliderimage" alt=""/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="CarouselSliderItem">
        <img src={slideFour}  className="d-block w-100 sliderimage" alt=""/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="CarouselSliderItem">
        <img src={slideFive}  className="d-block w-100 sliderimage" alt=""/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="CarouselSliderItem">
        <img src={slideSix}  className="d-block w-100 sliderimage" alt=""/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="CarouselSliderItem">
        <img src={slideSeven}  className="d-block w-100 sliderimage" alt=""/>
        </div>
        </Carousel.Item>
      </Carousel>
      </div>
            )
}
