import React from "react";
import { TrendingWrap } from "./Trending.styles";
import stars from "../../../assets/home/session/stars.png";
import { TrendingData } from "../../Constant/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrowImg from "../../../assets/home/trending/nextArrow.png"; // Path to your right arrow image
import prevArrowImg from "../../../assets/home/trending/prevArrow.png"; // Path to your left arrow image

const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <TrendingWrap>
      <strong className="headingWrap">Trending Sessions</strong>
      <Slider {...settings}>
        {TrendingData.map((value, index) => (
          <div className="card" key={index}>
            <div className="imgHolder">
              <img src={value.img} alt="img" />
            </div>
            <div className="textHolder">
              <h6>{value.title}</h6>
              <p>{value.para}</p>
            </div>
            <div className="logoWrap">
              <div className="logo">
                <img src={value.logo} alt="logo" />
                <div className="logoText">
                  <h6>{value.name}</h6>
                  <p>{value.type}</p>
                </div>
              </div>
              <div className="rating">
                <span>Teach Student: {value.len}</span>
                <img src={stars} alt="stars" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </TrendingWrap>
  );
};

export default Trending;