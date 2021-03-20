import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
const MovieImageSlider = ({ images, base_url, setShowSlider }) => {
  console.log(images);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledMovieImageSlider
      onClick={(e) => {
        if (e.target.type !== "button") {
          setShowSlider(false);
        }
      }}
    >
      <StyledSlider
        {...settings}
        onClick={(e) => {
          console.log(e.target);
          e.stopPropagation();
        }}
      >
        {images.map((image) => (
          <img key={uuid()} src={`${base_url}original/${image.file_path}`} />
        ))}
      </StyledSlider>
    </StyledMovieImageSlider>
  );
};

const StyledMovieImageSlider = styled(motion.div)`
  height: 100%;
  width: 100%;
  min-height: 50vh;
  background: rgb(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 2rem;
`;
const StyledSlider = styled(Slider)`
  padding: 8rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default MovieImageSlider;
