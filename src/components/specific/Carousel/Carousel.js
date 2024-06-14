import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../styles/custom-slick.css';

const Carousel = ({ children, autoPlay=false, slides=1 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default Carousel;
