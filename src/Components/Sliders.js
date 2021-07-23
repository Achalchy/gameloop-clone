import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "./images/slider-1.png";
import slider2 from "./images/slider-2.jpg";
import slider3 from "./images/slider-3.jpg";
import slider4 from "./images/slider-4.jpg";
const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider absolute top-0 z-0 bg-black">
      <span></span>
      <Slider {...settings}>
        <div>
          <img
            className="object-cover w-full h-full"
            src={slider1}
            alt="gameInfo"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src={slider2}
            alt="gameInfo"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src={slider3}
            alt="gameInfo"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src={slider4}
            alt="gameInfo"
          />
        </div>
      </Slider>
      <span className="span"></span>
    </div>
  );
};

export default Sliders;
