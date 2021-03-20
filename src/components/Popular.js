import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MovieCrad from "../components/MovieCard";
import { useHistory } from "react-router-dom";
const Popular = ({ popularMovies, images }) => {
  const history = useHistory();
  const populargHandler = () => {
    history.push("/popular");
    document.body.style.overflow = "hidden";
  };
  return (
    <PopularStyled>
      <PopularHeader>
        <h2>Popular Movies </h2>
        <button onClick={populargHandler}>View All</button>
      </PopularHeader>
      {popularMovies.results && (
        <PopularTrack>
          {popularMovies.results.slice(0, 8).map((movie) => (
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
        </PopularTrack>
      )}
    </PopularStyled>
  );
};
const PopularStyled = styled(motion.div)`
  margin-top: 5rem;
  height: auto;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;
const PopularHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 0 1rem;
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
      font-size: 5rem;
      padding: 2rem;
    }
    button {
      font-size: 3rem;
      padding: 2rem 4rem;
    }
  }
`;
const PopularTrack = styled(motion.div)`
  height: auto;
  width: 100%;
  display: grid;

  grid-template-columns: repeat(auto-fill, 400px);
  grid-template-rows: repeat(3, 400px);
  place-items: center;
  justify-content: center;

  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media (max-width: 1000px) {
    grid-template-columns: 600px;
    grid-template-rows: repeat(9, 400px);
  }
`;
export default Popular;
