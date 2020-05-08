import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide";


const images = [
  { src: "/images/marvel.jpg" },
  { src: "/images/2081.jpg" },
  { src: "/images/8439.jpg" },
];


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "25px", fontSize: "40px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "25px", zIndex: 1, fontSize: "40px" }}
      onClick={onClick}
    />
  );
}


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
        <Slider {...settings}>
          {images.map((img, index) => (
            <CustomSlide key={index} alt={""} src={img.src}/>
          ))}
        </Slider>
      </Fragment>
    );
  }
}