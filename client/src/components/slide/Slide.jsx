import React from 'react';
import Slider from "react-slick";
import "./Slide.scss";
import "./slick/slick.scss"; 
import "./slick/slick.theme.scss";

const Slide = ({children}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,

    responsive : [
      {
        breakpoint : 1200,
        settings : {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint : 768,
        settings : {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint : 500,
        settings : {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className='slide' >
      <h1>Popular services</h1>
      <div className="container">
          <Slider {...settings}>
            {children}
          </Slider>
      </div>
    </div>
  )
}

export default Slide;