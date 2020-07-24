import React from 'react'
import { Carousel } from 'react-bootstrap';
import slideOne from "../../images/slider/slider1.jpg"
import slideTwo from "../../images/slider/slider2.jpg"
import slideThree from "../../images/slider/slider3.jpg"
import slideFour from "../../images/slider/slider4.jpg"
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
      </Carousel>
      </div>
            )
}
