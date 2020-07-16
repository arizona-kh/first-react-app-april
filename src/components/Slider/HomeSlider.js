import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide";
import styled from 'styled-components';


const images = [
  { 
    src: "/images/marvel.jpg", 
    alt:"Marvel", 
    rating: true
   },
  { 
    src: "/images/2081.jpg", 
    alt:"rolique",
    rating: false, 
    form: true
   },
  { 
    src: "/images/8439.jpg", 
    alt: "team" ,
    rating: true
   },
];


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "25px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "25px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

const StyledSlider = styled(Slider)`
  .slick-next:before, .slick-prev:before {
    font-size: 2rem;
    color: #3f51b5;
    }
  `

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <Fragment>
        <StyledSlider {...settings}>
          {images.map((img, index) => (
            <CustomSlide key={index} alt={img.alt} src={img.src} rating={img.rating} /> 
          ))}
        </StyledSlider>
      </Fragment>
    );
  }
}