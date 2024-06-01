import React from 'react'
import {Carousel} from "react-responsive-carousel";
import {img} from "./Images/Data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img key={imageItemLink} src={imageItemLink} />;
        })}
      </Carousel>
      <div className="hero_img"></div>
    </div>
  );
}

export default CarouselEffect

