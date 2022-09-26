import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import image1 from '../images/1.jpg';
import image2 from '../images/2.jpeg';
import image3 from '../images/3.png';

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
            <img src={image2} alt="" />
        </div>
        <div>
            <img src={image3} alt="" />
        </div>
      </Slider>
    );
  }