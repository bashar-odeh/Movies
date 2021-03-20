import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieCrad from "../components/MovieCard";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
const Upcoming = ({ upcominMovies, images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  const history = useHistory();
  const upcomingHandler = () => {
    history.push("/upcoming");
    document.body.style.overflow = "hidden";
  };
  return (
    <UpcomingStyled>
      <UpcomingHeader>
        <h2>Upcoming Movies </h2>
        <button onClick={upcomingHandler}>View All</button>
      </UpcomingHeader>
      {upcominMovies.results && (
        <StyledSlide {...settings}>
          {upcominMovies.results.map((movie) => (
            <MovieCrad
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
      )}
    </UpcomingStyled>
  );
};
const UpcomingStyled = styled(motion.div)`
  margin-top: 5rem;
  height: auto;
  min-height: 80vh;
`;
const UpcomingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  button {
    padding: 1rem 3rem;
    background: none;
    color: white;
    border: 3px solid red;
    font-size: 1.5rem;
    color: red;
    transition: all 0.2s ease;
    border-radius: 1rem;
    &:hover {
      background: red;
      color: white;
    }
    @media (max-width: 450px) {
      margin: 0;
      padding: 1rem;
      font-size: 1rem;
    }
  }
  @media (min-width: 2500px) {
    h2 {
      font-size: 4rem;
    }
    button {
      font-size: 3rem;
      padding: 2rem 4rem;
    }
  }
`;
const StyledSlide = styled(Slider)`
  padding: 4rem 1rem;
`;
export default Upcoming;
