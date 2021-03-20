import React from "react";
//STYLE
import styled from "styled-components";
// ANIMATION
import { motion } from "framer-motion";
//useSelector
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopRated = ({ base_url, id }) => {
  let { topRatedMovies, isLoadingHomePageMovies } = useSelector(
    (state) => state.homePageMovies
  );
  console.log(topRatedMovies[0].vote_average.toString().length);
  return (
    <StyledTopRated>
      {topRatedMovies[0] && (
        <>
          <Image
            src={`${base_url}/original/${topRatedMovies[0].backdrop_path}`}
          />{" "}
          <FloatingData>
            <span>
              {topRatedMovies[0].vote_average.toString().length === 3
                ? topRatedMovies[0].vote_average
                : `${topRatedMovies[0].vote_average}.0`}
            </span>
            <Title>{topRatedMovies[0].title}</Title>
            <p>{topRatedMovies[0].release_date}</p>
            <p>{topRatedMovies[0].overview}</p>
            <Link to={`/movieDetails/${id}`}>
              <button>Read More</button>
            </Link>

            <TitleRated>New Releases</TitleRated>
          </FloatingData>
          <Fade />
        </>
      )}
    </StyledTopRated>
  );
};
const StyledTopRated = styled(motion.div)`
  min-height: 100vh;
  margin-top: 2rem;
  position: relative;
  &:hover {
    background: (0, 0, 0, 1);
  }
`;
const Title = styled(motion.h2)`
  @media (max-width: 425px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;
const Image = styled(motion.img)`
  height: 90vh;
  width: 100%;
  display: block;
  @media (min-width: 2500px) {
    height: 100vh;
  }
`;
const FloatingData = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: block;
  top: 30%;
  position: absolute;
  padding: 0rem 2rem;
  span {
    padding: 1rem;
    font-size: 2rem;
  }
  p {
    max-width: 50rem;
    @media (max-width: 425px) {
      font-size: 1rem;
      line-height: 100%;
      background: rgb(0, 0, 0, 0.8);
    }
    @media (max-width: 320px) {
      font-size: 0.7rem;
    }
  }
  button {
    padding: 1rem 3rem;
    background: none;
    color: white;
    border: 3px solid red;
    font-size: 1.5rem;
    color: red;
    transition: all 0.2s ease;
    &:hover {
      background: red;
      color: white;
    }
    @media (max-width: 425px) {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
  @media (max-width: 1000px) {
    top: 10%;
  }
  @media (max-width: 1440px) {
    top: 18%;
  }
  @media (max-width: 768px) {
    top: 10%;
  }
  @media (min-width: 2500px) {
    top: 2%;
    p {
      width: 100%;
      font-size: 2rem;
    }
    button {
      padding: 2rem 4rem;
    }
    h2 {
      font-size: 4rem;
    }
    span {
      font-size: 4rem;
    }
  }
`;
const Fade = styled.div`
  background: none;
  height: 10vh;
  width: 100%;
  position: relative;
  top: -100px;
  left: 0;
  z-index: -1;
  opacity: 1;
  box-shadow: 100px 100px 5000px white;
`;
const TitleRated = styled(motion.h2)`
  position: relative;
  font-size: 6rem;
  left: 300px;
  top: -90px;
  font-family: "Catamaran", sans-serif;
  &:first-letter {
    font-size: 150%;
    color: red;
  }
  @media (max-width: 1000px) {
    font-size: 4rem;
    top: 35px;
  }
  @media (max-width: 1024px) {
    left: 280px;
    top: -150px;
  }
  @media (max-width: 768px) {
    left: 230px;
    top: -120px;
  }
  @media (max-width: 425px) {
    display: none;
  }
  @media (min-width: 2500px) {
  }
`;
export default TopRated;
