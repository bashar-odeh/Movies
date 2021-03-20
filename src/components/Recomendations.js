import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";

const Recomendations = ({ recommendations, images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <StyledRecomendations>
      <h2>Recomendations for you </h2>

      <StyledSlide {...settings}>
        {recommendations.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            releaseDate={movie.release_date}
            vote_average={movie.vote_average}
            base_url={images.base_url}
          />
        ))}
      </StyledSlide>
    </StyledRecomendations>
  );
};
const StyledSlide = styled(Slider)`
  padding: 8rem;

  @media (max-width: 950px) {
    padding: 4rem;
  }
`;
const StyledRecomendations = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  h2 {
    font-size: 2rem;
    width: 100%;
    text-align: center;
    position: absolute;
  }
`;
export default Recomendations;
