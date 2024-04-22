import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider3 from "../../../assets/homepage/Slider/slider3.png";
import slider4 from "../../../assets/homepage/Slider/slider4.png";
import slider5 from "../../../assets/homepage/Slider/slider5.png";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} arrows={false}>
      <div>
        <img src={slider3} alt="" className="w-full" />
      </div>
      <div>
        <img src={slider4} alt="" className="w-full" />
      </div>
      <div>
        <img src={slider5} alt="" className="w-full" />
      </div>
    </Slider>
  );
}
